import React from 'react';
import Line from './BitsNbobs/Line';
import FadeInSection from './BitsNbobs/FadeInSection';

const Contact = () => {
    return (
        <div className='container'>
            <FadeInSection>
                <h2>CONTACT</h2>
            </FadeInSection>
            <Line />
            <FadeInSection>
                <p>
                    Have some feedback about my podcast, website or any of the
                    challenges I'm undertaking? Want to collaborate?
                </p>
                <div className='h2 item'>Get in contact below:</div>
                <a url='mailto:hicks.a.james@gmail.com'>EMAIL ME!</a>
            </FadeInSection>
            <Line />
        </div>
    );
};

export default Contact;
