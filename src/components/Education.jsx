import React from 'react';

const Education = () => {
    return (
        <section id="education" className="section container">
            <h2 style={{ marginBottom: '3rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Education</h2>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <div>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                            ACCURATE INSTITUTE OF MANAGEMENT AND TECHNOLOGY
                        </h3>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>B.Tech (Computer Science Engineering)</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-main)' }}>2024 - 2028</p>
                        <p style={{ color: 'var(--text-muted)' }}>Greater Noida</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
