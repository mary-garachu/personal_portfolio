import React from 'react';
import { toAbsoluteUrl } from '../../_Helpers/utils';
import './style.scss';

const Hero = () => {
    const heroImage = toAbsoluteUrl('Assets/logo/js1.jpg')
  return (
    <div className='hero'>
        <div className='hero-content'>
            <div className='hero-image'>
                <img src={heroImage} alt='About' /> 
            </div>
            <div className='hero-contact-details'>
                <h2> About </h2>
                <p> I am a front-end developer with 2 years of hands-on experience. Passionate about crafting
beautiful and functional products with delightful user experiences. Committed to continuous
learning and staying abreast of emerging technologies. I have completed over 10 projects in the past 2 years.</p>
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