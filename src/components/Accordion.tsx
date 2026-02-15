import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
    question: string;
    answer: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion-item">
            <button
                className="accordion-trigger w-full text-left"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '1.25rem 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-main)' }}
            >
                <span style={{ fontSize: '1.1rem', fontWeight: 600, fontFamily: 'var(--font-sans)', paddingRight: '1rem', display: 'block' }}>{question}</span>
                {isOpen ? (
                    <ChevronUp className="text-[var(--accent)]" size={24} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                ) : (
                    <ChevronDown className="text-[#D0C8C0]" size={24} style={{ color: '#D0C8C0', flexShrink: 0 }} />
                )}
            </button>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                <p style={{ lineHeight: '1.6' }}>{answer}</p>
            </div>
        </div>
    );
};

export const Accordion: React.FC<{ items: AccordionItemProps[] }> = ({ items }) => {
    return (
        <div className="card">
            {items.map((item, index) => (
                <AccordionItem key={index} {...item} />
            ))}
        </div>
    );
};
