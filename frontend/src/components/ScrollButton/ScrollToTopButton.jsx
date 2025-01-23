import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Toggle button visibility based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to the top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const buttonStyle = {
        position: 'fixed',
        bottom: '60px',
        right: '30px',
        backgroundColor: '#3498db',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        fontSize: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        zIndex: '1000',
        transition: 'opacity 0.3s ease-in-out',
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <button onClick={scrollToTop} style={buttonStyle} title="Go to Top" className='fas fa-chevron-up'>
        ↑
        </button>
    );
};

export default ScrollToTopButton;