import React, { useState, useEffect, useRef } from 'react';

const FadeInSection = (props) => {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    return (
        <div
            className={`fade-in-section ${
                isVisible ? 'is-visible' : ''
            } item fade-in`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
};
export default FadeInSection;
