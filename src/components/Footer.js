import React from 'react';
import Greenwave from '../img/greenwave.png';
import '../styles/footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <img src={Greenwave} className='greenstuff' />
            <div className='quote'>QUOTE OF THE DAY</div>
            <div className='footer-item links'>SOCIAL MEDIA LINKS</div>
        </div>
    );
};

export default Footer;
