import React from 'react';
import { Link } from 'react-router-dom';
import barberImg from '../assets/barber.png';
import cafeImg from '../assets/cafe.png';
import clinicImg from '../assets/clinic.png';

export const Sample: React.FC = () => {
    const works = [
        {
            img: barberImg,
            industry: "理容室",
            pages: "3ページ",
            desc: "スマホで見やすく整理"
        },
        {
            img: cafeImg,
            industry: "飲食店",
            pages: "1ページ",
            desc: "メニューとアクセスを一本化"
        },
        {
            img: clinicImg,
            industry: "整体",
            pages: "5ページ",
            desc: "不安が消える情報設計"
        }
    ];

    return (
        <div style={{ backgroundColor: '#FDFBF8' }}>
            <section className="section text-center" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
                <div className="container">
                    <h1 className="heading-lg">制作例（サンプル）</h1>
                </div>
            </section>

            <section className="section" style={{ paddingBottom: '120px' }}>
                <div className="container">
                    <div className="feature-grid" style={{ marginBottom: '60px' }}>
                        {works.map((work, i) => (
                            <div key={i} className="card" style={{ padding: 0, overflow: 'hidden', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.04)' }}>
                                <div className="work-thumbnail">
                                    <img
                                        src={work.img}
                                        alt={`${work.industry}の制作例`}
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    />
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                                        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{work.industry}</span>
                                        <span className="text-sub" style={{ backgroundColor: '#F7F3ED', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>
                                            {work.pages}
                                        </span>
                                    </div>
                                    <p className="text-sub" style={{ fontSize: '0.9rem' }}>{work.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center" style={{ backgroundColor: '#F7F3ED', borderRadius: '12px', padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
                        <h3 className="heading-sm" style={{ marginBottom: '24px' }}>似た形で作れます。</h3>
                        <Link to="/contact" className="cta-btn" style={{ display: 'inline-block', backgroundColor: 'var(--text-main)', color: 'white', padding: '16px 60px' }}>
                            無料で相談する
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
