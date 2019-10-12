import React from 'react';
import Iframe from 'react-iframe';

const Form = () => {
  return (
    <div className='m-cols-4'>
      <div className='ed-container'>
        {/* <h3>¿Cómo puedo ayudarte?</h3>
        <p>Coloque sus datos y en breve nos comunicaremos con usted</p> */}
        <Iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLSfu5YbpXtQlhllYE7DQsGsPCBcSPXHjRqQJlJY6gTBMRl8cTw/viewform?embedded=true'
          width='750'
          height='500'
          frameborder='0'
          marginheight='0'
          marginwidth='0'
          className='s-border s-radius-br s-radius-bl s-pxy-2'
        />
      </div>

      {/* <form className='ed-container' id='contactForm'>
        <div className='ed-item'></div>
        <div className='ed-grid m-grid-2'>
          <div className='ed-item'>
            <label htmlFor=''>Nombres</label>
            <input type='text' id='nombre' name='nombre' />
          </div>
          <div className='ed-item'>
            <label htmlFor=''>Apellidos</label>
            <input type='text' id='apellidos' name='apellidos' />
          </div>
        </div>
        <div className='ed-grid m-grid-2'>
          <div className='ed-item'>
            <label htmlFor=''>Correo</label>
            <input type='email' id='email' name='email' />
          </div>
          <div className='ed-item'>
            <label htmlFor=''>Celular</label>
            <input type='number' id='celular' name='celular' />
          </div>
        </div>
        <div className='ed-item'>
          <label htmlFor=''>Curso(s) de interés</label>
          <input type='text' id='curso' name='curso' />
        </div>
        <div className='ed-item '>
          <label htmlFor=''>Mensaje</label>
          <textarea
            name='mensaje'
            id='mensaje'
            cols='30'
            rows='10'
            className='s-mb-2'
          ></textarea>
        </div>
        <div className='ed-item '>
          <input className='button ghost full' type='submit' value='Enviar' />
        </div>
      </form> */}
    </div>
  );
};

export default Form;
