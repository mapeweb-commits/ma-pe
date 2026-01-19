import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const FloatingCta: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

            // Show only after scrolling a bit AND not at the very bottom
            if (window.scrollY > 100 && !scrolledToBottom) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Only render on mobile (handled by CSS media queries mostly, but logical check is good too if needed)
    // Here we rely on CSS class 'mobile-only' for display control

    return (
        <div className={`floating-cta ${isVisible ? 'visible' : ''}`}>
            <Link to="/contact" className="floating-cta-btn">
                無料で相談する
            </Link>
        </div>
    );
};
