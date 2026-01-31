"use client";

import { useState } from "react";
import { navLinks } from "@/data/staticData";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        if (window.innerWidth <= 840) {
            setIsMenuOpen(false);
        }
    };

    return (
        <header>
            <nav className="navbar" id="navbar" style={{ display: isMenuOpen ? "block" : "" }}>
                {navLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        className={link.active ? "active" : ""}
                        onClick={closeMenu}
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
            <i
                className={`fa ${isMenuOpen ? "fa-x" : "fa-bars"} menu-icon`}
                id="menu-icon"
                aria-hidden="true"
                onClick={toggleMenu}
            ></i>
            <img src="/img/logo-removebg-preview.png" alt="Mellou Logo" className="logo" />
            <div className="social">
                <a href="https://www.instagram.com/mellou.india/" className="idea">
                    <i className="fa-brands fa-instagram"></i>@mellou.india
                </a>
            </div>
        </header>
    );
}
