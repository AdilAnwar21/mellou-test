"use client";

import { useState } from "react";
import { faqItems } from "@/data/staticData";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq">
            <h1>Frequently asked Questions</h1>

            <div className="wrapper">
                {faqItems.map((item, index) => (
                    <div className="item" key={index}>
                        <div
                            className={`title ${openIndex === index ? "open" : ""}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            {item.question}
                        </div>
                        <div className={`content ${openIndex === index ? "open" : ""}`}>
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
