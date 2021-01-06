import React from 'react';
import { useEffect } from 'react';
import '../styles/global.css';

function Home() {
    return (
        <div>
            <div>
                <div>
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
                </div>
                <div>Here's what I've been up to:</div>
                <div
                    className='powr-social-feed'
                    id='311bc081_1609823118'
                ></div>
            </div>
            <div className='maxwidth'>
                <div>CURATOR</div>
                <div id='curator-feed-default-feed-layout' className='maxwidth'>
                    <a
                        href='https://curator.io'
                        target='_blank'
                        className='crt-logo crt-tag'
                    >
                        Powered by Curator.io
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
