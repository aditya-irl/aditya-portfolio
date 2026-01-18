import React from 'react';

const ProjectCard = ({ title, techs, description }) => {
    return (
        <div style={{
            padding: '2rem',
            backgroundColor: 'var(--card-bg)',
            border: '1px solid var(--border-color)',
            transition: 'transform 0.3s ease, border-color 0.3s ease',
            cursor: 'default'
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = 'var(--text-secondary)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
            }}
        >
            <h3 style={{ marginBottom: '1rem', fontSize: '2rem', color: 'var(--text-main)' }}>{title}</h3>
            <p style={{
                fontFamily: 'monospace',
                fontSize: '0.9rem',
                marginBottom: '1rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
            }}>
                {techs}
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{description}</p>
        </div>
    );
};

const SelectedWorks = () => {
    const projects = [
        {
            title: "Face Detection Attendance System",
            techs: "Python / OpenCV / Tkinter",
            description: "Automated attendance system using face detection. Detects faces via camera, matches stored data, marks attendance, and saves records in CSV."
        },
        {
            title: "Tic Tac Toe Game",
            techs: "HTML / CSS / JavaScript",
            description: "Browser-based two-player game with interactive UI and JavaScript game logic."
        }
    ];

    return (
        <section id="work" className="section container">
            <h2 style={{ marginBottom: '4rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>Selected Work</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
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
