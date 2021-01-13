import React from 'react';
import FadeInSection from './BitsNbobs/FadeInSection';
import Line from '../components/BitsNbobs/Line';

const Music = () => {
    return (
        <div className='container'>
            <FadeInSection>MUSIC PAGE</FadeInSection>
            <Line />
            <FadeInSection>
                <p>
                    I started playing in metal bands as soon as I could play my
                    first songs on Guitar, around 2005. I played locally in
                    Brisbane until around 2011 when my band at the time The
                    Archivist began to tour outside of South-East QLD, heading
                    to Melbourne, Sydney and Tasmania over the next four years.
                    At the end of an awesome journey we finally released our
                    first professionally recorded single and film-clip seen
                    below. Since then I have dabbled in writing some songs, only
                    one which is released as a Demo on Soundcloud. Since then I
                    have been challenging myself to do guitar covers for all my
                    favourtie albums over the years, which I have been posting
                    to youtube.
                </p>
            </FadeInSection>
            <Line />

            <FadeInSection>
                <div className='iframe-container'>
                    <iframe
                        width='100%'
                        height='300'
                        scrolling='no'
                        frameborder='no'
                        src='https://www.youtube.com/embed/JMMcnkA0jms?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0'
                    />
                </div>
            </FadeInSection>
            <Line />

            <FadeInSection>
                <div className='iframe-container'>
                    <iframe
                        width='100%'
                        height='300'
                        scrolling='no'
                        frameborder='no'
                        src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/572878518&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
                    />
                </div>
            </FadeInSection>
            <Line />
            <FadeInSection>
                <div className='iframe-container'>
                    <iframe
                        width='100%'
                        height='300'
                        scrolling='no'
                        frameborder='no'
                        src='https://www.youtube.com/embed/RNO2zs3XOGA?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0'
                    />
                </div>
            </FadeInSection>
            <Line />
        </div>
    );
};

export default Music;
