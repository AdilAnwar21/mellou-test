"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            const preloader = document.getElementById('preloader');
            if (preloader) {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    setIsVisible(false);
                }, 500);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div id="preloader">
            <div className="loader">
                <div className="cone"></div>
                <div className="scoop"></div>
            </div>
            <div className="loading-text">MELLOU</div>
        </div>
    );
}
