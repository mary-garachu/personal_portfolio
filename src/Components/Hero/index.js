import React from 'react';
import { toAbsoluteUrl } from '../../_Helpers/utils';
import './style.scss';

const Hero = () => {
    const heroImage = toAbsoluteUrl('Assets/logo/hero3.jpg')
  return (
    <div className='hero'>
        <div className='hero-content'>
            <div className='hero-image'>
                <img src={heroImage} alt='About' /> 
            </div>
            <div className='hero-contact-details'>
                <h2> About </h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, quam in venenatis volutpat, nulla lectus convallis dolor, non vehicula nunc erat in est. Integer vitae mi a justo ultrices placerat. Proin non magna nec mauris congue hendrerit. Aenean lobortis lectus at metus finibus. </p>

                <div className='hero-contact-detail'>
                    <h3>Name</h3>
                    <p> Ngarachu Mary Muthoni</p>
                    <h3>Email</h3>
                    <p> garachu.muthoni@gmail.com </p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero