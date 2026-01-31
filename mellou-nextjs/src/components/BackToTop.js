"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <a
            href="#"
            className="back-to-top"
            id="backToTopBtn"
            onClick={(e) => {
                e.preventDefault();
                scrollToTop();
            }}
            style={{ opacity: isVisible ? 1 : 0, display: isVisible ? "block" : "none" }}
        >
            <i className="fa-solid fa-arrow-up"></i>
        </a>
    );
}
