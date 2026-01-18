import React from 'react';

const Hero = () => {
    return (
        <section style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 'var(--spacing-md)',
            paddingRight: 'var(--spacing-md)',
        }}>
            <div className="container fade-in">
                <h1 style={{ maxWidth: '12ch', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                    BUILDING INTELLIGENT SYSTEMS
                </h1>
                <p style={{ fontSize: '1.5rem', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
                    Computer Science Engineer specializing in AI/ML and Performant Software.
                </p>
                <a href="#work" style={{
                    display: 'inline-block',
                    borderBottom: '2px solid currentColor',
                    paddingBottom: '0.2rem',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--text-main)'
                }}>
                    View Selected Work
                </a>
            </div>
        </section>
    );
};

export default Hero;
