import React from 'react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px', // Navbar height
            position: 'relative'
        }}>
            <div className="container hero-grid">
                <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                    <h1 style={{ marginBottom: '1.5rem' }}>
                        BUILDING INTELLIGENT SYSTEMS
                    </h1>
                    <p style={{
                        fontSize: '1.5rem',
                        marginBottom: '3rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6
                    }}>
                        Computer Science Engineer specializing in AI/ML and Performant Software.
                    </p>
                    <a href="#work" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                        View Selected Work
                    </a>
                </div>

                <div className="reveal" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transitionDelay: '0.3s'
                }}>
                    <div className="tilt-card hover-tilt profile-image-container">
                        <img
                            src={profileImg}
                            alt="Aditya Kumar"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block'
                            }}
                        />
                    </div>
                </div>
            </div>

            <style>{`
                .hero-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    gap: 4rem;
                    align-items: center;
                }
                
                .profile-image-container {
                    width: 100%;
                    max-width: 420px;
                    aspect-ratio: 0.85; /* Portrait feel */
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: var(--shadow-soft);
                    border: 1px solid var(--border-color);
                    background: var(--card-bg);
                }

                @media (max-width: 900px) {
                    .hero-grid {
                        grid-template-columns: 1fr;
                        text-align: center;
                        gap: 3rem;
                    }
                    
                    .hero-grid h1 {
                        font-size: 2.5rem;
                    }
                    
                    .profile-image-container {
                        max-width: 320px;
                        margin: 0 auto;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
