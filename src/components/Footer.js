import React from 'react';
import '../styles/footer.css';
import { SocialIcon } from 'react-social-icons';
import FadeInSection from './BitsNbobs/FadeInSection';

const Footer = () => {
    const quotes = [
        'Believing change is possible makes change possible.',
        'The moment you stop learning is the moment you stop living.',
        'Fail fast > Learn > Continue.',
        "Whether you think you can or can't, you are right.",
        "If you do what you've always done, you'll get what you've always gotten.",
        "Making yourself better takes work, making yourself FEEL better doesn't.",
        'Pain and discomfort are temporary, quitting lasts forever.',
        'If you are too introspective, you may think yourself out of doing something wonderful.',
        'Do everything before you are ready; because no-one is ever truly ready.',
        'Life is 10% what happens to you, and 90% how you react to it.',
        'When you realise there is nothing lacking, the whole world belongs to you.',
        "If you don't like a colour, use it because it just means you don't understand it yet.",
    ];

    const greenwave =
        'https://res.cloudinary.com/dvqlfwgtf/image/upload/v1610687616/Pngtree_modern_stylish_green_wave_background_5068018.png';

    const random = Math.floor(Math.random() * quotes.length);

    return (
        <div className='footer-container'>
            <img
                src='https://res.cloudinary.com/dvqlfwgtf/image/upload/v1610687616/Pngtree_modern_stylish_green_wave_background_5068018.png'
                className='greenstuff'
            />

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
                    rel='noopener noreferrer'
                />
                <SocialIcon
                    url='https://www.instagram.com/undoing_perfectionism/'
                    className='icon'
                    target='_blank'
                    rel='noopener noreferrer'
                />
                {/* <SocialIcon url='https://www.tiktok.com/@undoing_perfectionism/' /> */}
                <SocialIcon
                    url='https://www.youtube.com/channel/UCh4LrHDE8Hx_pzecgG4uuUQ'
                    className='icon'
                    target='_blank'
                    rel='noopener noreferrer'
                />
                <SocialIcon
                    url='https://soundcloud.com/user-362067369/'
                    className='icon'
                    target='_blank'
                    rel='noopener noreferrer'
                />
                <SocialIcon
                    url='mailto:hicks.a.james@gmail.com'
                    className='icon'
                    target='_blank'
                    rel='noopener noreferrer'
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
                    rel='noopener noreferrer'
                    rel='nofollow noopener'
                >
                    KTB MEDIA
                </a>
            </p>
        </div>
    );
};

export default Footer;
