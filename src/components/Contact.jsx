import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section container" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '10vw', lineHeight: 0.9, marginBottom: '4rem', wordBreak: 'break-all', color: 'var(--text-main)' }}>
                LET'S WORK
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <a href="mailto:adityak1149x@gmail.com" style={{ borderBottom: '1px solid var(--text-secondary)' }}>
                        adityak1149x@gmail.com
                    </a>
                    <span>+91 8865804386</span>
                </div>
                <p style={{ color: 'var(--text-muted)' }}>Greater Noida, India</p>

                {/* Social Links */}
                <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                    <a href="https://www.instagram.com/aaditya_irl_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', fontWeight: 500, borderBottom: '1px solid transparent' }} className="social-link">
                        Instagram
                    </a>
                    <a href="https://x.com/mr_aadi_ff" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', fontWeight: 500, borderBottom: '1px solid transparent' }} className="social-link">
                        Twitter
                    </a>
                </div>
            </div>

            <footer style={{ marginTop: '8rem', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between' }}>
                <span>© {new Date().getFullYear()} Aditya Kumar</span>
                <span>Portfolio</span>
            </footer>
        </section>
    );
};

export default Contact;
