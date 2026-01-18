import React from 'react';

const Navbar = () => {
    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            padding: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 100,
            mixBlendMode: 'difference',
            color: 'white'
        }}>
            <div style={{ fontWeight: 900, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
                ADITYA KUMAR
            </div>
            <ul style={{ display: 'flex', gap: '2rem', fontSize: '1rem', fontWeight: 500 }}>
                <li><a href="#work">Work</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
