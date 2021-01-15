import React from 'react';
import FadeInSection from './BitsNbobs/FadeInSection';
import Line from './BitsNbobs/Line';
import Gallery from './Gallery';

const Miniatures = () => {
    // create a simple modal to view the images up close

    return (
        <div className='container'>
            <FadeInSection>
                <h2>MINIATURES</h2>
            </FadeInSection>
            <Line />
            <FadeInSection>
                <p>
                    This is the epitome of creative hobbies that leaves people
                    with an icky taste in their mouth from incomplete projects,
                    as the urge to buy more and more of these little people,
                    creatures, critters, vehicles and terrain pieces is never
                    ending. There are many different types of miniatures, and
                    many within that made for tabletop wargaming. I started
                    playing{' '}
                    <a
                        href='https://en.wikipedia.org/wiki/Warhammer_40,000'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Warhammer 40k
                    </a>{' '}
                    when I was around the age of 15 or so. I bought around 40
                    army men, 2 tanks and some other pieces, and I only ever got
                    around to painting just 10 army men (funnily enough I still
                    have them!).
                </p>
                <p>
                    Oblivious to what would be a years-long habit of starting
                    things but not finishing them, I also got into another
                    tabletop game set in the Warhammer universe,{' '}
                    <a
                        href='https://en.wikipedia.org/wiki/Mordheim'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Mordheim
                    </a>
                    . I owned around 40 miniatures for this game for 10 years
                    while I was more focused on playing in bands, though began
                    collecting again after I left the music scene (~2014). It
                    was a slippery slope, as by 2019 I owned over 150 models,
                    having painted only around 30.
                </p>
                <p>
                    Fast-forward to 2020 and the 100 Day Project you can read
                    more on my About page, I am setting myself achievable goals
                    to work through my collection, which feels awesome at every
                    milestone. Please enjoy my gallery below of all I have
                    completed so far!
                </p>
            </FadeInSection>
            <Line />
            <FadeInSection>
                <h2>GALLERY</h2>
                <br />
                <Gallery />
            </FadeInSection>
            <Line />
        </div>
    );
};

export default Miniatures;
