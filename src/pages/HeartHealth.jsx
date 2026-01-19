import React from 'react';
import './../components/Features.css';

const HeartHealth = () => {
    return (
        <div className="feature-page page-heart">
            <h1>Heart Health</h1>
            <p style={{ maxWidth: '800px', textAlign: 'center', fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6' }}>
                Sensabit Smart Band - A flexible, multi-signal wearable biosensor worn on the arm or ankle, suitable for defense forces, ICU monitoring, chronic disease management, and remote care.
                <br /><br />
                Innovative technology meets healthcare needs with sensabit's Healthcare. Designed for medical professionals and patients alike, our smart band assists in monitoring and tracking vital signs, ensuring accurate health assessments. With seamless integration into healthcare systems, sensabit Healthcare aims to revolutionize patient care and improve health outcomes for all.
            </p>

            <div className="feature-grid">
                {/* Continuous ECG */}
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg viewBox="0 0 24 24">
                            <path d="M22 12h-2.48l-2.07 6.22-3.8-15.02-3.6 11.23L8.8 12H2v-2h8.07l1.26 3.78 3.59-11.23 3.8 15.02 1.4-4.23h1.88v2z" />
                        </svg>
                    </div>
                    <h3>Continuous ECG</h3>
                    <p>Medical-grade ECG monitoring to detect irregularities and potential heart health issues early.</p>
                </div>

                {/* SpO2 Monitoring */}
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                        </svg>
                    </div>
                    <h3>SpO2 Monitoring</h3>
                    <p>Real-time oxygen saturation tracking to ensure your body is getting the oxygen it needs.</p>
                </div>

                {/* Heart Rate & HRV */}
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" style={{ fill: '#e91e63' }} />
                        </svg>
                    </div>
                    <h3>Heart Rate & HRV</h3>
                    <p>Track your resting heart rate and variability to understand your body's recovery and stress response.</p>
                </div>
            </div>
        </div>
    );
};

export default HeartHealth;
