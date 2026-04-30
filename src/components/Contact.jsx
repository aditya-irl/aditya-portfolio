import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(null); // null | sending | success | error

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs
            .sendForm(
                'service_g8b2mhm',
                'template_len99dg',
                form.current,
                '6tabigaDhMCNeEHOe'
            )
            .then(
                () => {
                    setStatus('success');
                    e.target.reset();
                    setTimeout(() => setStatus(null), 5000);
                },
                () => {
                    setStatus('error');
                    setTimeout(() => setStatus(null), 5000);
                }
            );
    };

    return (
        <section
            id="contact"
            className="section container"
            style={{ marginBottom: '4rem', paddingBottom: '2rem' }}
        >
            <div
                className="grid"
                style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'start',
                }}
            >
                {/* LEFT SIDE */}
                <div className="reveal">
                    <h2
                        style={{
                            fontSize: 'clamp(3rem, 5vw, 4rem)',
                            lineHeight: 0.9,
                            marginBottom: '2rem',
                            color: 'var(--text-main)',
                        }}
                    >
                        LET&apos;S WORK
                        <br />
                        TOGETHER
                    </h2>

                    <p style={{ maxWidth: '400px', marginBottom: '2rem' }}>
                        Have a project in mind? Let&apos;s create something amazing.
                    </p>

                    {/* EMAIL */}
                    <div style={{ marginBottom: '1.5rem' }}>
                        <span
                            style={{
                                display: 'block',
                                color: 'var(--text-muted)',
                                fontSize: '0.9rem',
                                marginBottom: '0.5rem',
                            }}
                        >
                            EMAIL
                        </span>
                        <a
                            href="mailto:adityak1149x@gmail.com"
                            className="hover-link"
                            style={{ fontSize: '1.25rem', fontWeight: 500 }}
                        >
                            adityak1149x@gmail.com
                        </a>
                    </div>

                    {/* WHATSAPP */}
                    <div style={{ marginBottom: '1.5rem' }}>
                        <span
                            style={{
                                display: 'block',
                                color: 'var(--text-muted)',
                                fontSize: '0.9rem',
                                marginBottom: '0.5rem',
                            }}
                        >
                            WHATSAPP
                        </span>
                        <a
                            href="https://wa.me/918865804386?text=Hi%20Aditya,%20I%20visited%20your%20portfolio%20and%20wanted%20to%20connect."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover-link"
                            style={{ fontSize: '1.25rem', fontWeight: 500 }}
                        >
                            Chat on WhatsApp
                        </a>
                    </div>

                    {/* SOCIALS */}
                    <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem' }}>
                        <a
                            href="https://www.instagram.com/aaditya_irl_?utm_source=ig_web_button_share_sheet"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--text-muted)',
                                fontSize: '1.8rem',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#E1306C';
                                e.currentTarget.style.transform = 'scale(1.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'var(--text-muted)';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a
                            href="https://x.com/mr_aadi_ff"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--text-muted)',
                                fontSize: '1.8rem',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#1DA1F2';
                                e.currentTarget.style.transform = 'scale(1.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'var(--text-muted)';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                </div>

                {/* RIGHT SIDE – FORM */}
                <div className="reveal" style={{ transitionDelay: '0.2s' }}>
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            background: 'var(--card-bg)',
                            padding: '2rem',
                            borderRadius: 'var(--border-radius)',
                            boxShadow: 'var(--shadow-soft)',
                        }}
                    >
                        <div>
                            <label>NAME</label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label>EMAIL</label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label>MESSAGE</label>
                            <textarea
                                name="message"
                                required
                                rows="4"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'success' && (
                            <div
                                style={{
                                    padding: '1rem',
                                    background: 'rgba(0,255,136,0.1)',
                                    color: '#00ff88',
                                    borderRadius: '8px',
                                    textAlign: 'center',
                                }}
                            >
                                Message sent successfully!
                            </div>
                        )}

                        {status === 'error' && (
                            <div
                                style={{
                                    padding: '1rem',
                                    background: 'rgba(255,68,68,0.1)',
                                    color: '#ff4444',
                                    borderRadius: '8px',
                                    textAlign: 'center',
                                }}
                            >
                                Failed to send. Please check your config.
                            </div>
                        )}
                    </form>
                </div>
            </div>

            <footer
                style={{
                    marginTop: '6rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid var(--border-color)',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <span>© {new Date().getFullYear()} Aditya Kumar</span>
                <span>Portfolio</span>
            </footer>
        </section>
    );
};

export default Contact; 