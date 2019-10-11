import React from 'react';

const Form = () => {
  return (
    <div className='m-cols-4'>
      <form className='ed-container'>
        <div className='ed-item'>
          <h3>¿Cómo puedo ayudarte?</h3>
          <p>Coloque sus datos y en breve nos comunicaremos con usted</p>
        </div>
        <div className='ed-grid m-grid-2'>
          <div className='ed-item'>
            <label htmlFor=''>Nombres</label>
            <input type='text' />
          </div>
          <div className='ed-item'>
            <label htmlFor=''>Apellidos</label>
            <input type='text' />
          </div>
        </div>
        <div className='ed-grid m-grid-2'>
          <div className='ed-item'>
            <label htmlFor=''>Correo</label>
            <input type='email' />
          </div>
          <div className='ed-item'>
            <label htmlFor=''>Celular</label>
            <input type='number' />
          </div>
        </div>
        <div className='ed-item'>
          <label htmlFor=''>Curso(s) de interés</label>
          <input type='text' />
        </div>
        <div className='ed-item '>
          <label htmlFor=''>Mensaje</label>
          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            className='s-mb-2'
          ></textarea>
        </div>
        <div className='ed-item '>
          <input className='button ghost full' type='submit' value='Enviar' />
        </div>
      </form>
    </div>
  );
};

export default Form;
