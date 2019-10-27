import React, { Component } from 'react';
import FirebaseConfig from './Firebase';

class FormClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: [],
      alert: false,
      alertData: {}
    };
  }

  showAlert(type, message) {
    this.setState({
      alert: true,
      alertData: { type, message }
    });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 4000);
  }

  resetForm() {
    this.refs.contactForm.reset();
  }

  componentWillMount() {
    let formRef = FirebaseConfig.database()
      .ref('form')
      .orderByKey()
      .limitToLast(6);
    formRef.on('child_added', snapshot => {
      const { name, surname, courses, email, phone, message } = snapshot.val();
      const data = { name, surname, courses, email, phone, message };
      this.setState({ form: [data].concat(this.state.form) });
    });
  }

  sendMessage(e) {
    e.preventDefault();
    const params = {
      name: this.inputName.value,
      surname: this.inputSurname.value,
      courses: this.inputCourses.value,
      email: this.inputEmail.value,
      phone: this.inputPhone.value,
      message: this.textAreaMessage.value
    };
    console.log(params);

    if (
      params.name &&
      params.surname &&
      params.email &&
      params.phone &&
      params.courses &&
      params.message
    ) {
      FirebaseConfig.database()
        .ref('form')
        .push(params)
        .then(() => {
          this.showAlert('success', 'Tu mensaje se envío con éxito');
        })
        .catch(() => {
          this.showAlert('danger', 'No pudimos enviar tu mensaje (:');
        });
      this.resetForm();
    } else {
      this.showAlert('warning', 'Por favor completa los datos solicitados');
    }
  }

  render() {
    return (
      <div className='m-cols-4'>
        {this.state.alert && (
          <div
            className={`alert alert-${this.state.alertData.type}`}
            role='alert'
          >
            <div className='container'>{this.state.alertData.message}</div>
          </div>
        )}
        <div className='ed-container'>
          <form
            className='ed-container'
            id='contactForm'
            onSubmit={this.sendMessage.bind(this)}
            ref='contactForm'
          >
            <div className='ed-item'></div>
            <div className='ed-grid m-grid-2'>
              <div className='ed-item'>
                <label htmlFor='name'>Nombres</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  ref={name => (this.inputName = name)}
                />
              </div>
              <div className='ed-item'>
                <label htmlFor='surname'>Apellidos</label>
                <input
                  type='text'
                  id='surname'
                  name='surname'
                  ref={surname => (this.inputSurname = surname)}
                />
              </div>
            </div>
            <div className='ed-grid m-grid-2'>
              <div className='ed-item'>
                <label htmlFor='email'>Correo</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  ref={email => (this.inputEmail = email)}
                />
              </div>
              <div className='ed-item'>
                <label htmlFor='phone'>Celular</label>
                <input
                  type='number'
                  id='phone'
                  name='phone'
                  ref={phone => (this.inputPhone = phone)}
                />
              </div>
            </div>
            <div className='ed-item'>
              <label htmlFor='courses'>Curso(s) de interés</label>
              <input
                type='text'
                id='courses'
                name='courses'
                ref={courses => (this.inputCourses = courses)}
              />
            </div>
            <div className='ed-item '>
              <label htmlFor='message'>Mensaje</label>
              <textarea
                name='message'
                id='message'
                cols='30'
                rows='10'
                className='s-mb-2'
                ref={message => (this.textAreaMessage = message)}
              ></textarea>
            </div>
            <div className='ed-item '>
              <input
                className='button ghost full'
                type='submit'
                value='Enviar'
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormClass;
