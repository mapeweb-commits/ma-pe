import React from 'react';
import { ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#FDFBF8' }}>
            <section className="section text-center" style={{ paddingTop: '120px', paddingBottom: '40px' }}>
                <div className="container">
                    <p style={{ letterSpacing: '0.2em', marginBottom: '20px', color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 700 }}>CONTACT</p>
                    <h1 className="heading-lg">無料相談</h1>
                </div>
            </section>

            <section className="section" style={{ paddingBottom: '120px' }}>
                <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
                    <div className="card" style={{ padding: '60px 40px' }}>
                        <p style={{ marginBottom: '40px', lineHeight: '2' }}>
                            まずは以下のお問い合わせフォームまたはLINEよりお気軽にご連絡ください。<br />
                            内容を確認のうえ、折り返しご返信いたします。
                        </p>

                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdJ6dANWIOg2KbhSDbFe6NVqjUu0B09TvNjuq_wC4A3UZbpzQ/viewform?usp=sf_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                backgroundColor: 'var(--text-main)',
                                color: 'white',
                                padding: '20px 60px',
                                fontSize: '1.1rem',
                                borderRadius: '50px',
                                maxWidth: '400px',
                                textDecoration: 'none',
                                width: '100%',
                                border: 'none'
                            }}
                        >
                            <span style={{ textAlign: 'center' }}>
                                お問い合わせ<br />フォームへ
                            </span>
                            <ExternalLink size={18} />
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                backgroundColor: '#06C755',
                                color: 'white',
                                padding: '20px 60px',
                                fontSize: '1.1rem',
                                borderRadius: '50px',
                                maxWidth: '400px',
                                textDecoration: 'none',
                                marginTop: '20px',
                                width: '100%',
                                border: 'none'
                            }}
                        >
                            <span style={{ textAlign: 'center' }}>
                                LINE公式<br />アカウントへ
                            </span>
                            <ExternalLink size={18} />
                        </a>

                        <div className="text-sub" style={{ marginTop: '40px', fontSize: '0.8rem', lineHeight: '1.5' }}>
                            <p>※営業目的の連絡には返信しません</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
