"use client";

import { useEffect } from "react";

export default function ScrollRevealInit() {
    useEffect(() => {
        const initScrollReveal = () => {
            if (typeof window !== "undefined" && window.ScrollReveal) {
                const ScrollReveal = window.ScrollReveal;

                const sr = ScrollReveal({
                    origin: 'top',
                    distance: '85px',
                    duration: 2500,
                    reset: true
                });

                const srinverse = ScrollReveal({
                    origin: 'bottom',
                    distance: '85px',
                    duration: 2500,
                    reset: false
                });

                const srleft = ScrollReveal({
                    origin: 'left',
                    distance: '85px',
                    duration: 2000,
                    reset: false
                });

                const slideUp = {
                    distance: '100%',
                    origin: 'bottom',
                    opacity: null
                };

                // Apply reveals
                sr.reveal('.delicacy-text', { delay: 300 });
                srleft.reveal('.top-image', { delay: 250 });
                srinverse.reveal('.item', { delay: 350 });
                sr.reveal('.right-side', { delay: 350 });
                srleft.reveal('.headers', { delay: 350 });
                srleft.reveal('.section-part');
                srleft.reveal('.section-part2');
                srinverse.reveal('.testimonail-head');
                ScrollReveal().reveal('.signature', slideUp);
                sr.reveal('.button-nav', { delay: 300 });
                ScrollReveal().reveal('.containera-images', slideUp);

                // Image grid reveals - only on desktop to avoid issues with mobile carousel
                if (window.innerWidth > 768) {
                    const sr2 = ScrollReveal();
                    sr2.reveal('.image-grid img:nth-child(1)', { delay: 200, duration: 800 });
                    sr2.reveal('.image-grid img:nth-child(2)', { delay: 400, duration: 800 });
                    sr2.reveal('.image-grid img:nth-child(3)', { delay: 600, duration: 800 });
                    sr2.reveal('.image-grid img:nth-child(4)', { delay: 800, duration: 800 });
                }

                // Contact section reveals
                const srContact = ScrollReveal({
                    origin: 'bottom',
                    distance: '50px',
                    duration: 1000,
                    easing: 'ease-in-out',
                    reset: false
                });

                srContact.reveal('.contact-title', { delay: 200 });
                srContact.reveal('.contact-subtitle', { delay: 300 });
                srContact.reveal('.contact-info-card', { delay: 400 });
                srContact.reveal('.contact-form', { delay: 500 });

                // Footer reveal
                const srFooter = ScrollReveal({
                    origin: 'bottom',
                    distance: '100px',
                    duration: 800,
                    easing: 'ease-in-out'
                });

                srFooter.reveal('.footer img', {
                    beforeReveal: (domEl) => {
                        domEl.style.transition = 'transform 800ms';
                        domEl.style.transform = 'translateY(0)';
                    }
                });

                return true;
            }
            return false;
        };

        // Try to initialize immediately
        if (!initScrollReveal()) {
            // If not available, try multiple times with shorter intervals
            let attempts = 0;
            const maxAttempts = 20;
            const interval = setInterval(() => {
                attempts++;
                if (initScrollReveal() || attempts >= maxAttempts) {
                    clearInterval(interval);
                }
            }, 50); // Check every 50ms instead of waiting 100ms

            return () => clearInterval(interval);
        }
    }, []);

    return null;
}
