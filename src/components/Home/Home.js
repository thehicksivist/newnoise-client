import React from 'react';
import Contact from './Contact';

function Home() {
    return (
        <div className='container'>
            <div className='item'>
                <p className='font3'>
                    Undoing Perfectionism by James Hicks is a collection of
                    projects focused on self-improvement, namely a podcast,
                    youtube channel and instagram account which can be previewed
                    and accessed below. For more info visit the About Page.
                </p>
            </div>
            <div className='item'>
                <hr
                    style={{
                        color: `black`,
                        backgroundColor: `black`,
                        height: 2,
                    }}
                />
            </div>
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
            <Contact />
        </div>
    );
}

export default Home;
