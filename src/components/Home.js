import React from 'react';
import { useEffect } from 'react';

function Home() {
    return (
        <div>
            <div>
                <div>Social Media Posts</div>
                <div
                    className='powr-social-feed'
                    id='311bc081_1609823118'
                ></div>
            </div>
            <div>
                <div>CURATOR</div>
                <div id='curator-feed-default-feed-layout'>
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
