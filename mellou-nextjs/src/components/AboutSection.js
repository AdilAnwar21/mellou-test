"use client";

import { useState } from "react";
import { aboutFeatures } from "@/data/staticData";

export default function AboutSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="wave-section" id="aboutus">
            <img
                src="/assets/WavesDesktop.webp"
                alt="Waves Background"
                className="bottom-left-image"
            />
            <img
                src="/assets/WhyMellouDesktop.webp"
                alt="Why Mellou"
                className="top-image"
            />

            <div className="wrapper">
                {aboutFeatures.map((feature, index) => (
                    <div className="item" key={index}>
                        <div
                            className={`title ${openIndex === index ? "open" : ""}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            {feature.title}
                        </div>
                        <div
                            className={`content ${openIndex === index ? "open" : ""}`}
                            dangerouslySetInnerHTML={{ __html: feature.content }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
