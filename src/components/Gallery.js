import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import img1 from '../img/Miniatures/img1.jpg';
import img2 from '../img/Miniatures/img2.jpg';
import img3 from '../img/Miniatures/img3.jpg';
import img4 from '../img/Miniatures/img4.jpg';
import img5 from '../img/Miniatures/img5.jpg';
import img6 from '../img/Miniatures/img6.jpg';
import img7 from '../img/Miniatures/img7.jpg';
import img8 from '../img/Miniatures/img8.jpg';

const Gallery = () => {
    const [thisState, setThisState] = useState({
        showIndex: false,
        showBullets: true,
        infinite: true,
        showThumbnails: true,
        showFullscreenButton: true,
        showGalleryFullscreenButton: true,
        showPlayButton: true,
        showGalleryPlayButton: true,
        showNav: true,
        isRTL: false,
        slideDuration: 450,
        slideInterval: 2000,
        slideOnThumbnailOver: false,
        thumbnailPosition: 'bottom',
        showVideo: {},
    });

    const PREFIX_URL =
        'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';

    const _onImageClick = (event) => {
        console.debug(
            'clicked on image',
            event.target,
            'at index',
            selfRef.getCurrentIndex()
        );
    };

    const _onImageLoad = (event) => {
        console.debug('loaded image', event.target.src);
    };

    const _onSlide = (index) => {
        _resetVideo();
        console.debug('slid to index', index);
    };

    const _onPause = (index) => {
        console.debug('paused on index', index);
    };

    const _onScreenChange = (fullScreenElement) => {
        console.debug('isFullScreen?', !!fullScreenElement);
    };

    const _onPlay = (index) => {
        console.debug('playing from index', index);
    };

    const _handleInputChange = (state, event) => {
        setThisState({ [state]: event.target.value });
    };

    const _handleCheckboxChange = (state, event) => {
        setThisState({ [state]: event.target.checked });
    };

    const _handleThumbnailPositionChange = (event) => {
        setThisState({ thumbnailPosition: event.target.value });
    };

    const _getStaticImages = () => {
        let images = [];
        for (let i = 2; i < 12; i++) {
            images.push({
                original: `${PREFIX_URL}${i}.jpg`,
                thumbnail: `${PREFIX_URL}${i}t.jpg`,
            });
        }

        return images;
    };

    const _resetVideo = () => {
        setThisState({ showVideo: {} });

        if (thisState.showPlayButton) {
            setThisState({ showGalleryPlayButton: true });
        }

        if (thisState.showFullscreenButton) {
            setThisState({ showGalleryFullscreenButton: true });
        }
    };

    const _toggleShowVideo = (url) => {
        thisState.showVideo[url] = !Boolean(thisState.showVideo[url]);
        setThisState({
            showVideo: thisState.showVideo,
        });

        if (thisState.showVideo[url]) {
            if (thisState.showPlayButton) {
                setThisState({ showGalleryPlayButton: false });
            }

            if (thisState.showFullscreenButton) {
                setThisState({ showGalleryFullscreenButton: false });
            }
        }
    };

    const _renderVideo = (item) => {
        return (
            <div>
                {thisState.showVideo[item.embedUrl] ? (
                    <div className='video-wrapper'>
                        <a
                            className='close-video'
                            onClick={_toggleShowVideo.bind(this, item.embedUrl)}
                        ></a>
                        <iframe
                            width='560'
                            height='315'
                            src={item.embedUrl}
                            frameBorder='0'
                            allowFullScreen
                        ></iframe>
                    </div>
                ) : (
                    <a onClick={_toggleShowVideo.bind(this, item.embedUrl)}>
                        <div className='play-button'></div>
                        <img
                            className='image-gallery-image'
                            src={item.original}
                        />
                        {item.description && (
                            <span
                                className='image-gallery-description'
                                style={{ right: '0', left: 'initial' }}
                            >
                                {item.description}
                            </span>
                        )}
                    </a>
                )}
            </div>
        );
    };
    const images = [
        {
            original: img1,
            thumbnail: img1,
        },
        {
            original: img2,
            thumbnail: img2,
        },
        {
            original: img3,
            thumbnail: img3,
        },
        {
            original: img4,
            thumbnail: img4,
        },
        {
            original: img5,
            thumbnail: img5,
        },
        {
            original: img6,
            thumbnail: img6,
        },
        {
            original: img7,
            thumbnail: img7,
        },
        {
            original: img8,
            thumbnail: img8,
        },
    ];

    const [selfRef, setSelfRef] = useState([]);

    return (
        <ImageGallery
            ref={(i) => setSelfRef(i)}
            items={images}
            lazyLoad={false}
            onClick={_onImageClick.bind(selfRef)}
            onImageLoad={_onImageLoad}
            onSlide={_onSlide.bind(selfRef)}
            onPause={_onPause.bind(selfRef)}
            onScreenChange={_onScreenChange.bind(selfRef)}
            onPlay={_onPlay.bind(selfRef)}
            infinite={thisState.infinite}
            showBullets={thisState.showBullets}
            showFullscreenButton={
                thisState.showFullscreenButton &&
                thisState.showGalleryFullscreenButton
            }
            showPlayButton={
                thisState.showPlayButton && thisState.showGalleryPlayButton
            }
            showThumbnails={thisState.showThumbnails}
            showIndex={thisState.showIndex}
            showNav={thisState.showNav}
            isRTL={thisState.isRTL}
            thumbnailPosition={thisState.thumbnailPosition}
            slideDuration={parseInt(thisState.slideDuration)}
            slideInterval={parseInt(thisState.slideInterval)}
            slideOnThumbnailOver={thisState.slideOnThumbnailOver}
            additionalClass='app-image-gallery'
        />
    );
};
export default Gallery;
