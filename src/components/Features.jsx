import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Features.css'

const Features = () => {
    const [headerRef, headerVisible] = useScrollAnimation()
    const [gridRef, gridVisible] = useScrollAnimation()
    const [setupRef, setupVisible] = useScrollAnimation()



    return (
        <section id="features" className="features">
            <div className="container">
                <div
                    ref={headerRef}
                    className={`section-header ${headerVisible ? 'animate-in' : ''}`}
                >
                    <h2 className="section-title">Sensabit Features</h2>
                </div>

                <div
                    ref={gridRef}
                    className={`features-grid-full ${gridVisible ? 'animate-in' : ''}`}
                >
                    <h3 className="setup-title" style={{ marginTop: '4rem', marginBottom: '2rem', fontWeight: '500', textAlign: 'center', color: '#fff', fontSize: '2rem' }}>Advanced Device Capabilities</h3>
                    <div className="feature-grid">
                        {[
                            { title: 'Heart Rate Variability', icon: '💓', desc: 'Track HRV for recovery and stress' },
                            { title: 'SpO2 Monitoring', icon: '🩸', desc: 'Blood oxygen saturation levels' },
                            { title: 'Sleep Analysis', icon: '😴', desc: 'Deep sleep and quality insights' },
                            { title: 'Stress Monitoring', icon: '🧠', desc: 'Real-time stress level detection' },
                            { title: 'Activity Tracking', icon: '👣', desc: 'Steps, distance, and movement' },
                            { title: 'Skin Temperature', icon: '🌡️', desc: 'Continuous temperature monitoring' },
                            { title: 'Respiratory Rate', icon: '🫁', desc: 'Breaths per minute analysis' },
                            { title: 'Fall Detection', icon: '⚠️', desc: 'Automated fall alerts' },
                            { title: 'Posture Monitoring', icon: '🧘', desc: 'Real-time posture correction' },
                            { title: 'Calories Burned', icon: '🔥', desc: 'Active and resting energy' }
                        ].map((item, i) => (
                            <div key={i} className="feature-card">
                                <div className="feature-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    ref={setupRef}
                    className={`setup-section ${setupVisible ? 'animate-in' : ''}`}
                    id="setup"
                >
                    <h3 className="setup-title">Easy Set-Up Process</h3>
                    <div className="setup-steps">
                        <div className="setup-step">
                            <div className="setup-step-number">1</div>
                            <h4>Wear Device</h4>
                            <p>Wear comfortably on your wrist or arm</p>
                        </div>
                        <div className="setup-arrow">→</div>
                        <div className="setup-step">
                            <div className="setup-step-number">2</div>
                            <h4>Connect</h4>
                            <p>Pair instantly with the Sensabit App</p>
                        </div>
                        <div className="setup-arrow">→</div>
                        <div className="setup-step">
                            <div className="setup-step-number">3</div>
                            <h4>Monitor</h4>
                            <p>Start tracking your vital health metrics</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
