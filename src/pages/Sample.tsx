import React from 'react';
import { Link } from 'react-router-dom';
import oluleaImg from '../assets/olulea.jpg';
import comingSoonImg from '../assets/coming_soon.svg';

export const Sample: React.FC = () => {
    const works = [
        {
            img: oluleaImg,
            industry: "理容室",
            displayTitle: (
                <div style={{ lineHeight: 1.4, textAlign: 'left' }}>
                    Hair Relaxation Salon OLU'LEA 様<br />
                    <span style={{ fontSize: '0.65em', fontWeight: 'normal', display: 'block', marginTop: '4px' }}>ヘアーリラクゼーションサロン オルレア</span>
                </div>
            ),
            link: "https://olulea-hair.com/"
        },
        {
            img: comingSoonImg,
            industry: "飲食店"
        },
        {
            img: comingSoonImg,
            industry: "整体"
        }
    ];

    return (
        <div style={{ backgroundColor: '#FFFFFF' }}>
            <section className="section text-center" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
                <div className="container">
                    <p style={{ letterSpacing: '0.2em', marginBottom: '20px', color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 700 }}>WORKS</p>
                    <h1 className="heading-lg">制作例（サンプル）</h1>
                </div>
            </section>

            <section className="section" style={{ paddingBottom: '120px' }}>
                <div className="container">
                    <div className="feature-grid" style={{ marginBottom: '60px' }}>
                        {works.map((work, i) => {
                            const CardContent = (
                                <div className="card" style={{ padding: 0, overflow: 'hidden', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.04)', height: '100%' }}>
                                    <div className="work-thumbnail">
                                        <img
                                            src={work.img}
                                            alt={`${work.industry}の制作例`}
                                            style={{ width: '100%', height: 'auto', display: 'block' }}
                                        />
                                    </div>
                                    <div style={{ padding: '1.5rem' }}>
                                        <div style={{}}>
                                            <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{(work as any).displayTitle || work.industry}</div>
                                        </div>
                                    </div>
                                </div>
                            );

                            return (
                                <div key={i}>
                                    {(work as any).link ? (
                                        <a href={(work as any).link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', height: '100%', textDecoration: 'none', color: 'inherit' }}>
                                            {CardContent}
                                        </a>
                                    ) : (
                                        CardContent
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-center" style={{ borderRadius: '12px', padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>

                        <Link to="/contact" className="cta-btn" style={{ display: 'inline-block', backgroundColor: 'var(--text-main)', color: 'white', padding: '16px 60px', borderRadius: '8px' }}>
                            無料で相談する
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
