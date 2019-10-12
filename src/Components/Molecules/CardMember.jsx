import React from 'react';
import LinkedIn from '../../Components/Atoms/LinkedIn';
import Email from '../../Components/Atoms/Email';
import Twitter from '../../Components/Atoms/Twitter';

const CardMember = ({ title, image, subtitle, linkedIn, twitter, email }) => {
  return (
    <article>
      <div className='s-px-4'>
        <div className='img-container circle smb-2'>
          <img src={image} alt='' />
        </div>
      </div>
      <div className='s-center'>
        <p className='t3 s-mb-0'>{title}</p>
        <p className='s-mb-0'>{subtitle}</p>
        <div className='m-50 m-to-center s-to-center s-50'>
          <ul className='ed-menu  s-horizontal'>
            <li>
              <LinkedIn size='lg' address={linkedIn} />
            </li>
            <li>
              <Email size='lg' address={email} />
            </li>

            <li>
              <Twitter size='lg' address={twitter} />
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default CardMember;
