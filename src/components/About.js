import React from 'react';
import FadeInSection from './BitsNbobs/FadeInSection';
import Line from './BitsNbobs/Line';

const About = () => {
    return (
        <div className='container'>
            <FadeInSection>
                <h2>ABOUT</h2>
            </FadeInSection>
            <Line />
            <FadeInSection>
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
        </div>
    );
};

export default About;
