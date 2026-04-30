import React from 'react';

const ProjectCard = ({ title, techs, description, liveLink, isOngoing }) => {
    return (
        <div style={{
            backgroundColor: '#0a0a0a',
            border: '1px solid #222',
            borderRadius: '16px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            position: 'relative',
            cursor: 'default'
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px)';
                e.currentTarget.style.borderColor = '#00ff88';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 255, 136, 0.15), 0 0 15px rgba(0, 255, 136, 0.05) inset';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#222';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, position: 'relative', zIndex: 1 }}>
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.6rem', color: '#ffffff', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {title}
                    {isOngoing && (
                        <span style={{
                            fontSize: '0.7rem', padding: '0.2rem 0.5rem', background: 'rgba(255, 170, 0, 0.1)',
                            color: '#ffaa00', border: '1px solid rgba(255, 170, 0, 0.3)', borderRadius: '20px',
                            textTransform: 'uppercase', letterSpacing: '1px'
                        }}>Ongoing</span>
                    )}
                </h3>
                <p style={{
                    fontFamily: '"Courier New", Courier, monospace',
                    fontSize: '0.9rem',
                    marginBottom: '1.25rem',
                    color: '#00ccff',
                    letterSpacing: '0.05em',
                    lineHeight: '1.5'
                }}>
                    {techs}
                </p>
                <p style={{ fontSize: '1rem', color: '#aaaaaa', lineHeight: '1.7', marginBottom: '2rem', flexGrow: 1 }}>
                    {description}
                </p>

                {/* Neon Actions */}
                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                    {liveLink && liveLink !== "#" ? (
                        <a 
                            href={liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{
                                flex: 1, textAlign: 'center', padding: '0.8rem 1rem',
                                background: 'linear-gradient(135deg, #00ff88, #00ccff)', color: '#000',
                                fontWeight: '600', borderRadius: '8px', fontSize: '0.9rem',
                                textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none',
                                transition: 'all 0.3s ease', border: 'none',
                                boxShadow: '0 0 15px rgba(0, 255, 136, 0.3)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 255, 136, 0.5), 0 0 10px rgba(0, 204, 255, 0.3)';
                                e.currentTarget.style.filter = 'brightness(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 136, 0.3)';
                                e.currentTarget.style.filter = 'brightness(1)';
                            }}
                        >
                            Live Demo
                        </a>
                    ) : (
                        <span 
                            style={{
                                flex: 1, textAlign: 'center', padding: '0.8rem 1rem',
                                background: 'rgba(255, 255, 255, 0.02)', color: '#ffffff',
                                fontWeight: '600', borderRadius: '8px', fontSize: '0.9rem',
                                textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none',
                                transition: 'all 0.3s ease', border: '1px solid #444',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#fff';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                                e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#444';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            Coming Soon
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

const SelectedWorks = () => {
    const projects = [
        {
            title: "Maverick Physicist",
            techs: (
                <>
                    Frontend: React.js, HTML, CSS, JavaScript<br />
                    Backend: Node.js, Express.js<br />
                    Database: MongoDB<br />
                    Deployment: Vercel
                </>
            ),
            description: "An interactive physics learning website that simplifies complex concepts with a clean UI and smooth user experience.",
            liveLink: "https://maverick-physicist.vercel.app/",
            isOngoing: false
        },
        {
            title: "Face Detection Attendance System",
            techs: "Python / OpenCV / AI",
            description: "An AI-based attendance system using face recognition. This project is currently under development.",
            liveLink: "#",
            isOngoing: true
        },
        {
            title: "Tic Tac Toe Game",
            techs: "HTML / CSS / JS",
            description: "A simple and interactive tic tac toe game with smooth gameplay and responsive design.",
            liveLink: "https://tic-tac-toe-play.vercel.app/",
            isOngoing: false
        }
    ];

    return (
        <section id="work" className="section container">
            <h2 style={{ marginBottom: '4rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>Selected Work</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem'
            }}>
                {projects.map((p, index) => (
                    <ProjectCard key={index} {...p} />
                ))}
            </div>
        </section>
    );
};

export default SelectedWorks;
