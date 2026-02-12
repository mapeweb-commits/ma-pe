import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Accordion } from '../components/Accordion';

export const Home: React.FC = () => {
    const [isProblemsVisible, setIsProblemsVisible] = useState(false);
    const problemsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsProblemsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (problemsRef.current) {
            observer.observe(problemsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className="section-wrapper full-screen" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#FDFBF8' }}>
                <div className="hero-content-wrapper" style={{ maxWidth: '800px', position: 'relative', zIndex: 10 }}>
                    <p style={{
                        letterSpacing: '0.2em',
                        marginBottom: '20px',
                        color: 'var(--accent)',
                        fontSize: '0.9rem',
                        fontWeight: 700
                    }}>
                        MA-PE WEB DESIGN
                    </p>
                    <h1 className="heading-xxl" style={{ textShadow: '0 0 20px #FDFBF8, 0 0 10px #FDFBF8, 0 0 5px #FDFBF8' }}>
                        <span style={{ display: 'block' }}>古くなった</span>
                        <span style={{ display: 'block', marginLeft: '0.5em' }}>ホームページ、</span>
                        <span style={{ display: 'block', color: 'var(--accent)' }}>作り直します。</span>
                    </h1>

                    {/* PC Only Text */}
                    <div className="desktop-only">
                        <p className="text-justify" style={{ maxWidth: '500px', marginTop: '40px', fontSize: '1.1rem', lineHeight: 2.2 }}>
                            <span style={{ background: 'linear-gradient(transparent 30%, #E5E3DF 30%)', padding: '0 4px', boxDecorationBreak: 'clone' }}>地方の個人店向け。</span><br />
                            <span style={{ background: 'linear-gradient(transparent 30%, #E5E3DF 30%)', padding: '0 4px', boxDecorationBreak: 'clone' }}>AIの時代だからこそ、お店には</span><br />
                            <span style={{ background: 'linear-gradient(transparent 30%, #E5E3DF 30%)', padding: '0 4px', boxDecorationBreak: 'clone' }}>“ちゃんとした居場所”が必要です。</span><br />
                            <span style={{ background: 'linear-gradient(transparent 30%, #E5E3DF 30%)', padding: '0 4px', boxDecorationBreak: 'clone' }}>必要な情報だけを整えて、</span><br />
                            <span style={{ background: 'linear-gradient(transparent 30%, #E5E3DF 30%)', padding: '0 4px', boxDecorationBreak: 'clone' }}>ちゃんと伝わる形にします。</span>
                        </p>
                    </div>

                </div>

                {/* Hero Image */}
                <div className="hero-image-container">
                    <img
                        src={`${import.meta.env.BASE_URL}images/hero_main.jpg`}
                        alt="Background"
                        className="hero-image"
                    />
                </div>

                {/* Scroll Indicator */}
                <div className="scroll-indicator" style={{ bottom: '40px', left: '0' }}>
                    <span className="scroll-text">SCROLL</span>
                    <div className="scroll-line"></div>
                </div>
            </section>

            {/* Message Section (Mobile Only) */}
            <section className="section-wrapper mobile-only" style={{ display: 'flex', justifyContent: 'center', padding: '80px 20px', backgroundColor: '#FDFBF8' }}>
                <p style={{ fontSize: '1.1rem', lineHeight: '2.0', textAlign: 'center', letterSpacing: '0.05em', fontWeight: 500 }}>
                    <span style={{ display: 'block', marginBottom: '20px', fontSize: '1.0rem', color: 'var(--accent)' }}>地方の個人店向け。</span>
                    AIの時代だからこそ、お店には<br />
                    「ちゃんとした居場所」が必要です。<br />
                    <span style={{ display: 'block', marginTop: '30px' }}>
                        必要な情報だけを整えて、<br />
                        ちゃんと伝わる形にします。
                    </span>
                </p>
            </section>

            {/* Problems Section */}
            <div
                ref={problemsRef}
                style={{
                    background: `linear-gradient(to bottom, ${isProblemsVisible ? '#F7EDDA' : 'transparent'} 70%, #fff 100%)`,
                    transition: 'background 0.8s ease-out'
                }}
            >
                <section className="section-wrapper">
                    <div style={{ display: 'flex', gap: '80px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                        <div style={{ flex: '0 0 200px' }}>
                            <h2 className="txt-vertical" style={{ fontSize: '2rem', height: '300px', borderLeft: '1px solid currentColor', paddingLeft: '20px' }}>
                                こんなお悩み<br />ありませんか？
                            </h2>
                        </div>
                        <div style={{ flex: 1 }}>
                            <ul className="number-list">
                                {[
                                    "昔作ったまま放置で、スマホだと見づらい",
                                    "どこを直せばいいか分からない",
                                    "月額管理費がずっと不安",
                                    "SNSだけだと情報が散ってしまう"
                                ].map((item, i) => (
                                    <li key={i} className="number-item">
                                        <h3 style={{ fontSize: '1.2rem', marginTop: '10px' }}>{item}</h3>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            {/* Promise Section */}
            {/* Promise Section */}
            <div style={{ backgroundColor: '#fff' }}>
                <section className="section-wrapper">
                    <div style={{ marginBottom: '80px' }}>
                        <span style={{ color: 'var(--accent)', letterSpacing: '0.2em', display: 'block', marginBottom: '10px' }}>PROMISE</span>
                        <h2 style={{ fontSize: '2.5rem' }}>まーぺの約束</h2>
                    </div>

                    <div className="feature-grid">
                        {[
                            {
                                icon: <img src={`${import.meta.env.BASE_URL}images/icon_signboard.png`} alt="看板" width="60" height="60" style={{ mixBlendMode: 'multiply' }} />,
                                title: "見やすい",
                                desc: "シンプルな“看板”として動き続けます。"
                            },
                            {
                                icon: <img src={`${import.meta.env.BASE_URL}images/icon_feather.png`} alt="軽量" width="60" height="60" style={{ mixBlendMode: 'multiply' }} />,
                                title: "軽い",
                                desc: "スマホでもすぐ開く、ストレスのないページに整えます。"
                            },
                            {
                                icon: <img src={`${import.meta.env.BASE_URL}images/icon_cactus.png`} alt="維持" width="72" height="72" style={{ mixBlendMode: 'multiply' }} />,
                                title: "維持がラク",
                                desc: "更新しなくても困らない形にまとめます。"
                            }
                        ].map((item, i) => (
                            <div key={i} className="feature-card">
                                <div style={{
                                    color: 'var(--accent)',
                                    marginBottom: '20px',
                                    width: '110px',
                                    height: '110px',
                                    borderRadius: '50%',
                                    backgroundColor: '#F7EDDA',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyItems: 'center',
                                    justifyContent: 'center'
                                }}>{item.icon}</div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Service & CTA */}
            <section className="section-wrapper">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>サービス概要</h2>
                        <p style={{ marginBottom: '30px', color: 'var(--text-sub)' }}>
                            必要なのは、豪華な機能ではなく、<br />
                            迷わせない情報設計です。
                        </p>
                        <Link to="/service" style={{ display: 'inline-flex', alignItems: 'center', borderBottom: '1px solid currentColor', paddingBottom: '4px' }}>
                            詳しく見る <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                        </Link>
                    </div>

                    <div style={{ backgroundColor: 'var(--accent)', padding: '60px', borderRadius: '4px', color: 'white' }}>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>
                            まずは<br />ご相談ください
                        </h2>
                        <p style={{ marginBottom: '30px' }}>
                            状況だけ教えていただければ、<br />
                            直すべきポイントを整理します。
                        </p>
                        <Link to="/contact" className="cta-btn" style={{ display: 'inline-block', backgroundColor: 'white', color: 'var(--accent)', padding: '16px 60px', border: 'none' }}>
                            無料で相談する
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            {/* FAQ */}
            <section className="section-wrapper">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '0' }}>よくある質問</h2>
                    </div>
                    <div>
                        <Accordion items={[
                            {
                                question: "今のホームページがなくても頼めますか？",
                                answer: "はい。新規でも作れます。"
                            },
                            {
                                question: "月額の管理費はかかりますか？",
                                answer: "基本はかかりません（ドメイン・サーバー費用などの実費は除く。必要な場合のみ、事前にお伝えします）。"
                            },
                            {
                                question: "文章が用意できない場合は？",
                                answer: "まずはご相談ください（内容によっては別料金になりますが、簡単なヒアリングから作成のお手伝いも可能です）。"
                            },
                            {
                                question: "英語ページは作れますか？",
                                answer: "必要な場合のみ、1ページから追加できます。"
                            }
                        ]} />
                    </div>
                </div>
            </section>
        </>
    );
};
