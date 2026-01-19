import React from 'react';
import './../components/Features.css';

const SleepHealth = () => {
    return (
        <div className="feature-page page-sleep">
            <h1>Sleep Health</h1>
            <p style={{ maxWidth: '800px', textAlign: 'center', fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6' }}>
                Sensabit Smart Band - A flexible, multi-signal wearable biosensor worn on the arm or ankle, suitable for defense forces, ICU monitoring, chronic disease management, and remote care.
                <br /><br />
                Innovative technology meets healthcare needs with sensabit's Healthcare. Designed for medical professionals and patients alike, our smart band assists in monitoring and tracking vital signs, ensuring accurate health assessments. With seamless integration into healthcare systems, sensabit Healthcare aims to revolutionize patient care and improve health outcomes for all.
            </p>

            <div className="feature-grid">
                {/* Sleep Analysis */}
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2C9.408 2 7.155 3.376 6 5.485A9.957 9.957 0 0 1 12 4c5.523 0 10 4.477 10 10 0 2.05-.626 3.966-1.71 5.58C21.363 18.064 22 16.12 22 14c0-5.523-4.477-10-10-10z" style={{ fill: '#fff' }} />
                            <path d="M11 6a7 7 0 0 0-5.6 11.196l-.9.9a1 1 0 0 0 1.415 1.415l.9-.9A7 7 0 1 0 11 6z" style={{ fill: '#9fa8da', opacity: 0.8 }} />
                        </svg>
                    </div>
                    <h3>Sleep Analysis</h3>
                    <p>Comprehensive breakdown of light, deep, and REM sleep cycles to help you understand your rest quality.</p>
                </div>

                {/* Snoring */}
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg viewBox="0 0 24 24">
                            <path d="M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                        </svg>
                    </div>
                    <h3>Snoring Detection</h3>
                    <p>Monitor snoring patterns and intensity to identify potential breathing disruptions during sleep.</p>
                </div>

                {/* Temperature */}
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg viewBox="0 0 24 24">
                            <path d="M15 13V5a3 3 0 0 0-6 0v8a5 5 0 1 0 6 0zm-3-9a1 1 0 0 1 1 1v3h-2V5a1 1 0 0 1 1-1z" />
                        </svg>
                    </div>
                    <h3>Temperature</h3>
                    <p>Track skin temperature variations to optimize your sleep environment for deeper rest.</p>
                </div>
            </div>
        </div>
    );
};

export default SleepHealth;
