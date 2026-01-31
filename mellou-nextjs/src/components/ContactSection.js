"use client";

import { useState } from "react";
import { contactInfo } from "@/data/staticData";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.name && formData.email && formData.message) {
            alert("Thank you for contacting us! We will get back to you soon.");
            setFormData({ name: "", email: "", phone: "", message: "" });
        } else {
            alert("Please fill in all required fields.");
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="contact-section" id="contactus">
            <div className="container">
                <div className="contact-header">
                    <h2 className="contact-title">get in touch.</h2>
                    <p className="contact-subtitle">
                        We'd love to hear from you! Reach out to us for any queries, feedback, or just to say hello.
                    </p>
                </div>

                <div className="row contact-content">
                    <div className="col-lg-6 col-md-12 contact-info-wrapper">
                        <div className="contact-info-card">
                            <h3>Contact Information</h3>

                            <div className="info-item">
                                <div className="info-icon">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="info-text">
                                    <h4>Visit Us</h4>
                                    <p>{contactInfo.location}</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="info-text">
                                    <h4>Email Us</h4>
                                    <p>
                                        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                                    </p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="info-text">
                                    <h4>Call Us</h4>
                                    <p>
                                        <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                                    </p>
                                </div>
                            </div>

                            <div className="social-links">
                                <h4>Follow Us</h4>
                                <div className="social-icons">
                                    <a href={contactInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a href={contactInfo.socialLinks.facebook} className="social-link">
                                        <i className="fa-brands fa-facebook"></i>
                                    </a>
                                    <a href={contactInfo.socialLinks.twitter} className="social-link">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 contact-form-wrapper">
                        <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Tell us what's on your mind..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                <span>Send Message</span>
                                <i className="fa-solid fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
