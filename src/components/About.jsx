import React from 'react';

const About = () => {
    return (
        <section id="about" style={{
            backgroundColor: '#000000', // Keeps it slightly darker or same as regular bg
            color: 'var(--text-main)',
            padding: '8rem 0'
        }}>
            <div className="container">
                <div style={{ maxWidth: '800px' }}>
                    <h2 style={{ color: 'var(--text-main)' }}>About</h2>
                    <p style={{
                        fontSize: '1.5rem',
                        lineHeight: 1.6,
                        color: 'var(--text-secondary)',
                        maxWidth: 'none'
                    }}>
                        I am Aditya Kumar, a Computer Science Engineering student with a strong interest in AI/ML and software development. I enjoy building intelligent systems and clean digital products that combine logic, usability, and performance.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
