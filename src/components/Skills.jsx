import React from 'react';

const SkillGroup = ({ title, items }) => (
    <div style={{ marginBottom: '3rem' }}>
        <h4 style={{
            fontSize: '1.2rem',
            marginBottom: '1rem',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
        }}>
            {title}
        </h4>
        <p style={{
            fontSize: '1.5rem',
            lineHeight: 1.5,
            fontWeight: 400,
            color: 'var(--text-main)'
        }}>
            {items.join(', ')}
        </p>
    </div>
);

const Skills = () => {
    return (
        <section id="skills" className="section container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                <div>
                    <h2>Expertise</h2>
                </div>
                <div>
                    <SkillGroup
                        title="Programming"
                        items={['C', 'Python', 'C++', 'Java', 'SQL (Basic)']}
                    />
                    <SkillGroup
                        title="Libraries & Frameworks"
                        items={['NumPy (Basic)', 'Pandas (Basic)', 'Tkinter (Basic GUI)']}
                    />
                    <SkillGroup
                        title="Tools & Platforms"
                        items={['Visual Studio Code', 'Git', 'GitHub', 'CodeBlocks']}
                    />
                    <SkillGroup
                        title="Databases"
                        items={['MySQL', 'SQL (DDL & DML Basic)']}
                    />
                    <SkillGroup
                        title="Certifications"
                        items={['Python Programming - HACKERRANK', 'SQL (Basic) - HACKERRANK']}
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
