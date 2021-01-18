import React from 'react';
import Line from './BitsNbobs/Line';
import FadeInSection from './BitsNbobs/FadeInSection';
import '../styles/contact.css';

const Contact = () => {
    return (
        <div className='container'>
            <FadeInSection>
                <h2>CONTACT</h2>
            </FadeInSection>
            <Line />
            <FadeInSection>
                <p className='center-text'>
                    Have some feedback about my podcast, website or any of the
                    challenges I'm undertaking? Want to collaborate?
                </p>
                <div className='container'>
                    <div className='item contact center-text'>
                        <h3>Get in contact below:</h3>
                    </div>
                    {/* <div className='item email'>
                        <button>
                            <a href='mailto:hicks.a.james@gmail.com'>
                                EMAIL ME!
                            </a>
                        </button>
                    </div> */}
                    <div class='button_cont item' align='center'>
                        <a
                            class='example_c'
                            href='mailto:hicks.a.james@gmail.com'
                            target='_blank'
                            rel='noopener noreferrer nofollow'
                        >
                            Email me!
                        </a>
                    </div>
                </div>
            </FadeInSection>
            <Line />
        </div>
    );
};

export default Contact;
