import React from 'react';
import FadeInSection from './FadeInSection';
import Line from '../components/BitsNbobs/Line';

const Miniatures = () => {
    // create a simple modal to view the images up close

    return (
        <div className='container'>
            <FadeInSection>MINIATURES PAGE</FadeInSection>
            <Line />
            <FadeInSection>
                <p>
                    This is the epitome of creative hobbies that leaves people
                    with
                </p>
            </FadeInSection>
            <Line />
            <FadeInSection>
                <p>THIS IS WHERE THE GALLERY WILL GO YA'LL</p>
            </FadeInSection>
        </div>
    );
};

export default Miniatures;
