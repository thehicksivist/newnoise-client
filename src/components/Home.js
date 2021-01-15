import React from 'react';
import FadeInSection from './BitsNbobs/FadeInSection';
import Line from './BitsNbobs/Line';

function Home() {
    return (
        <div className='container'>
            <FadeInSection className='item'>
                <p>
                    Undoing Perfectionism by James Hicks is a collection of
                    projects focused on self-improvement; namely a Podcast,
                    YouTube channel and Instagram account which can be previewed
                    and accessed below.
                </p>
                <p>
                    Through challenging myself in my creative and professional
                    endeavours, I'm learning about what perfectionism is, how is
                    affects me and why I don't want it to be a part of my life
                    anymore. For more info on how this all came about, visit the
                    About Page.
                </p>
            </FadeInSection>
            <Line />
            <FadeInSection>
                <iframe
                    width='100%'
                    scrolling='no'
                    frameborder='no'
                    src='https://anchor.fm/james-hicks0/embed'
                />
            </FadeInSection>
            <Line />
            <div className='item'>
                <p>Here's what I've been up to...</p>
            </div>
            <div id='curator-feed-default-feed-layout' className='item'>
                <a
                    href='https://curator.io'
                    target='_blank'
                    className='crt-logo crt-tag'
                >
                    Powered by Curator.io
                </a>
            </div>
            <Line />
        </div>
    );
}

export default Home;
