import React from 'react';

const Experience = () => {
    return (
        <section className="section container" style={{ paddingTop: 0 }}>
            {/* Visual Separator */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '4rem' }}>
                <h2 style={{ marginBottom: '4rem' }}>Experience</h2>

                <div style={{
                    padding: '3rem',
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '4px'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        marginBottom: '2rem',
                        alignItems: 'baseline'
                    }}>
                        <div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>HRM Intern</h3>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: 500 }}>EDLERNITY TECH OPS PVT LTD</p>
                        </div>
                        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>Sep 2024 – Nov 2024</p>
                    </div>

                    <ul style={{
                        listStyle: 'none',
                        paddingLeft: 0,
                        color: 'var(--text-secondary)',
                        lineHeight: 1.8,
                        fontSize: '1.1rem'
                    }}>
                        <li style={{ marginBottom: '0.5rem' }}>• Managed professional communication via email & dashboards</li>
                        <li style={{ marginBottom: '0.5rem' }}>• Email communication & coordination tools</li>
                        <li style={{ marginBottom: '0.5rem' }}>• Sorting & filtering candidate data</li>
                        <li>• Maintaining HR databases & records in digital format</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;
