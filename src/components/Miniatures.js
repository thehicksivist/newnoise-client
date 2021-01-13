import React from 'react';
import FadeInSection from './BitsNbobs/FadeInSection';
import Line from '../components/BitsNbobs/Line';
import Gallery from './Gallery';

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
                <Gallery />
            </FadeInSection>
            <Line />
        </div>
    );
};

export default Miniatures;
