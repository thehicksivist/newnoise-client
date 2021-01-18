import React, { useState, useEffect, useRef } from 'react';

const FadeInSection = (props) => {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();
    useEffect(() => {
        const currentSection = domRef.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => setVisible(entry.isIntersecting));
        });
        observer.observe(currentSection);
        return () => observer.unobserve(currentSection);
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
