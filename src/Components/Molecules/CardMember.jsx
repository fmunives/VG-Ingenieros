import React from 'react';

const CardMember = () => {
  return (
    <article>
      <div className='s-px-4'>
        <div className='img-container circle smb-2'>
          <img
            src='https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            alt=''
          />
        </div>
      </div>
      <div className='s-center'>
        <p className='t3 s-mb-0'>Paola Arellana</p>
        <p>Designer</p>
      </div>
    </article>
  );
};

export default CardMember;
