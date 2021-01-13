import React from 'react';
import FadeInSection from './BitsNbobs/FadeInSection';
import Line from './BitsNbobs/Line';

function Home() {
    return (
        <div className='container'>
            <FadeInSection className='item'>
                <p className='font3'>
                    Undoing Perfectionism by James Hicks is a collection of
                    projects focused on self-improvement, namely a podcast,
                    youtube channel and instagram account which can be previewed
                    and accessed below. For more info visit the About Page.
                </p>
                <p>
                    Undoing Perfectionism is what I'm trying to do, through
                    challenging myself in my creative and professional
                    endeavours. I'm learning about what perfectionism is, how is
                    affects me and why I don't want it to be a part of my life
                    anymore. It all started when, after years of simply not
                    committing, I finally participated in the 100 Day Project in
                    2020 (thanks Covid). What I saw in it was mostly a
                    curiousity as to what might happen, and to my surprise and
                    delight I felt empowered and determined to complete the
                    challenge. Previous to the challenge, I had started my
                    YouTube account under the same name to do guitar covers as a
                    way for me to learn and grow.
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
            <div className='h2 item'>Here's what I've been up to...</div>
            {/* <div>POWR</div>
            <div
                className='powr-social-feed item'
                id='311bc081_1609823118'
            ></div> */}
            {/* <div>CURATOR</div> */}
            <div id='curator-feed-default-feed-layout' className='item'>
                <a
                    href='https://curator.io'
                    target='_blank'
                    className='crt-logo crt-tag'
                >
                    Powered by Curator.io
                </a>
            </div>
        </div>
    );
}

export default Home;
