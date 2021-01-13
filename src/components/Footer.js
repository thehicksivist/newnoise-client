import React from 'react';
import Greenwave from '../img/greenwave.png';
import '../styles/footer.css';
import { SocialIcon } from 'react-social-icons';
import FadeInSection from './BitsNbobs/FadeInSection';

const Footer = () => {
    const quotes = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed vulputate. Leo duis ut diam quam nulla. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Amet purus gravida quis blandit turpis cursus in hac habitasse. Habitant morbi tristique senectus et netus et malesuada fames ac.',
        'Sed vulputate mi sit amet mauris commodo. Odio ut sem nulla pharetra diam. Vitae congue mauris rhoncus aenean vel elit scelerisque. Enim sed faucibus turpis in. Adipiscing elit pellentesque habitant morbi tristique senectus. Et ligula ullamcorper malesuada proin libero nunc.',
        'Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Tempor orci eu lobortis elementum nibh tellus molestie nunc non.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Dictum sit amet justo donec enim diam vulputate. Mattis aliquam faucibus purus in massa tempor nec. Turpis in eu mi bibendum.',
        'Libero justo laoreet sit amet. Elit scelerisque mauris pellentesque pulvinar. ',
        'Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Vitae auctor eu augue ut lectus arcu bibendum. Natoque penatibus et magnis dis parturient.',
    ];

    const random = Math.floor(Math.random() * quotes.length);

    return (
        <div className='footer-container'>
            <img src={Greenwave} className='greenstuff' />
            <FadeInSection>
                <div className='quote-container center-text'>
                    <p className='quote'>"{quotes[random]}"</p>
                </div>
            </FadeInSection>
            <div className='title'>
                <p className='titletext'> undoing perfectionism </p>
            </div>
            <div className='icons'>
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
            <p className='subtitle center-text'>
                This website and all its content* created under the Undoing
                Perfectionism <small>TM</small> by James Hicks - 2021
            </p>
            <p>
                * header photo by{' '}
                <a
                    href='https://ktb.media/'
                    target='_blank'
                    rel='nofollow noopener'
                >
                    KTB MEDIA
                </a>
            </p>
        </div>
    );
};

export default Footer;
