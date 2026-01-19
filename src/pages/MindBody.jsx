import React from 'react';
import './../components/Features.css';

const MindBody = () => {
    return (
        <div className="feature-page page-mind">
            <h1>Mind & Body</h1>
            <p style={{ maxWidth: '800px', textAlign: 'center', fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6' }}>
                Sensabit Smart Band - A flexible, multi-signal wearable biosensor worn on the arm or ankle, suitable for defense forces, ICU monitoring, chronic disease management, and remote care.
                <br /><br />
                Innovative technology meets healthcare needs with sensabit's Healthcare. Designed for medical professionals and patients alike, our smart band assists in monitoring and tracking vital signs, ensuring accurate health assessments. With seamless integration into healthcare systems, sensabit Healthcare aims to revolutionize patient care and improve health outcomes for all.
            </p>

            <div className="feature-grid">
                {/* Stress Analysis */}
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                        </svg>
                    </div>
                    <h3>Stress Analysis</h3>
                    <p>Advanced HRV analysis to detect stress levels and guide you towards relaxation techniques.</p>
                </div>

                {/* Respiration Rate */}
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2c-5.33 4-8 7-8 11 0 3.31 2.69 6 6 6 3.31 0 6-2.69 6-6 0-4-2.67-7-8-11zm0 15c-1.29 0-2.45-.63-3.18-1.6.49-.67 1.28-1.12 2.18-1.31v-.59c0-.28.22-.5.5-.5s.5.22.5.5v.59c.9.19 1.69.64 2.18 1.31-.73.97-1.89 1.6-3.18 1.6z" />
                        </svg>
                    </div>
                    <h3>Respiration Rate</h3>
                    <p>Track your breathing patterns day and night to identify irregularities and improve pulmonary health.</p>
                </div>
            </div>
        </div>
    );
};

export default MindBody;
