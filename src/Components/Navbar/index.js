import React from 'react';
import {toAbsoluteUrl} from '../../_Helpers/utils';
import './style.scss';

const Navbar = () => {

    const Logo = toAbsoluteUrl('Assets/logo/mary.png');
  return (
    <div className='navbar'>
        <img src={Logo} alt= 'Mary' />
        <p>garachu.muthoni@gmail.com</p>
    </div>
  )
}

export default Navbar