import React from 'react';
import Greenwave from '../img/greenwave.png';
import '../styles/footer.css';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div className='footer-container'>
            <img src={Greenwave} className='greenstuff' />
            <div className='quote'>QUOTE OF THE DAY</div>
            <div className='title'>
                <p className='titletext'> undoing perfectionism</p>
            </div>
            <div className='icon'>
                <SocialIcon
                    url='https://anchor.fm/james-hicks0'
                    network='rss'
                    className='icon'
                    target='_blank'
                />
                <SocialIcon
                    url='https://www.instagram.com/undoing_perfectionism/'
                    className='icon'
                    target='_blank'
                />
                {/* <SocialIcon url='https://www.tiktok.com/@undoing_perfectionism/' /> */}
                <SocialIcon
                    url='https://www.youtube.com/channel/UCh4LrHDE8Hx_pzecgG4uuUQ'
                    className='icon'
                    target='_blank'
                />
                <SocialIcon
                    url='https://soundcloud.com/user-362067369/'
                    className='icon'
                    target='_blank'
                />
                <SocialIcon
                    url='mailto:hicks.a.james@gmail.com'
                    className='icon'
                    target='_blank'
                />
            </div>
            <p className='subtitle'>by James Hicks</p>
        </div>
    );
};

export default Footer;
