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
                        MA-PE WEB DEVELOPMENT
                    </p>
                    <h1 className="heading-xxl" style={{ textShadow: '0 0 20px #FDFBF8, 0 0 10px #FDFBF8, 0 0 5px #FDFBF8' }}>
                        <span style={{ display: 'block' }}>デジタルに、</span>
                        <span style={{ display: 'block', marginLeft: '0.5em' }}>お店の看板</span>
                        <span style={{ display: 'block', color: 'var(--accent)' }}>作ります。</span>
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
                        src={`${import.meta.env.BASE_URL}images/hero_new.png`}
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
                    background: `linear-gradient(to bottom, ${isProblemsVisible ? '#FFF8D7' : 'transparent'} 70%, #fff 100%)`,
                    transition: 'background 0.8s ease-out'
                }}
            >
                <section className="section-wrapper">
                    <div className="problems-container">
                        <div className="problems-title-wrapper">
                            <h2 className="txt-vertical problems-title">
                                こんなお悩み<br />ありませんか？
                            </h2>
                        </div>
                        <div className="problems-list-wrapper">
                            <ul className="number-list">
                                {[
                                    "SNSだけだと情報が散ってしまう",
                                    "自分ではどう作ればいいか分からない",
                                    "月額管理費がずっと不安",
                                    "昔作ったまま放置で、スマホだと見づらい"
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
                                icon: <img src={`${import.meta.env.BASE_URL}images/icon_signboard.png`} alt="看板" width="60" height="60" style={{ filter: 'invert(1) grayscale(1) brightness(3)', mixBlendMode: 'screen' }} />,
                                title: "誰もが見やすい",
                                desc: "あなたのお店のGoogleマップ店舗情報に載せることで、シンプルな“看板”として働き続けます。"
                            },
                            {
                                icon: <img src={`${import.meta.env.BASE_URL}images/icon_feather.png`} alt="軽量" width="60" height="60" style={{ filter: 'invert(1) grayscale(1) brightness(3)', mixBlendMode: 'screen' }} />,
                                title: "動作が軽い",
                                desc: "スマホでもすぐ開く、ストレスのないページに整えます。"
                            },
                            {
                                icon: <img src={`${import.meta.env.BASE_URL}images/icon_cactus.png`} alt="維持" width="72" height="72" style={{ filter: 'invert(1) grayscale(1) brightness(3)', mixBlendMode: 'screen' }} />,
                                title: "維持がラク",
                                desc: "サーバー代・ドメイン代基本０円。更新しなくても困らない形にまとめます。"
                            }
                        ].map((item, i) => (
                            <div key={i} className="feature-card">
                                <div style={{
                                    color: 'var(--accent)',
                                    marginBottom: '20px',
                                    width: '110px',
                                    height: '110px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--text-main)',
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
            <div style={{ backgroundColor: '#fff' }}>
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

                        <div style={{ backgroundColor: '#e4854c', padding: '60px', borderRadius: '4px', color: 'white' }}>
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>
                                まずは<br />ご相談ください
                            </h2>
                            <p style={{ marginBottom: '30px' }}>
                                LINEまたはお問い合わせフォームよりご連絡いただけます。
                            </p>
                            <Link to="/contact" className="cta-btn" style={{ display: 'inline-block', backgroundColor: 'white', color: '#e4854c', fontWeight: 'bold', padding: '16px 60px', border: 'none', borderRadius: '8px' }}>
                                無料で相談する
                            </Link>
                        </div>
                    </div>
                </section>
            </div>

            {/* FAQ */}
            {/* FAQ */}
            {/* FAQ */}
            <div style={{ backgroundColor: '#fff' }}>
                <section className="section-wrapper">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '0' }}>よくある質問</h2>
                        </div>
                        <div>
                            <Accordion items={[
                                {
                                    question: "なぜ、維持費がかからないのですか？",
                                    answer: "「Netlify（ネットリファイ）」という、世界中で使われている高機能かつ無料枠のあるホスティングサービスを利用しているためです。（※独自ドメインをご希望の場合のみ、その実費が必要です）"
                                },
                                {
                                    question: "文章や画像が用意できない場合は？",
                                    answer: "まずはご相談ください（簡単なヒアリングから作成をお手伝いいたします）。"
                                },
                                {
                                    question: "英語ページは作れますか？",
                                    answer: "必要な場合は、1ページから追加できます。ご相談ください。"
                                },
                                {
                                    question: "ホームページを作っても埋もれてしまわないか心配です。",
                                    answer: "地域密着のお店であれば、Googleマップとの連携が集客に効果的です。また、制作するホームページには検索上位に表示されやすくするための基本的な設定（内部SEO）を標準で組み込んでいますので、ご安心ください。"
                                },
                                {
                                    question: "今はホームページを見る人は少ないのではないでしょうか？",
                                    answer: "Googleマップでお店を探す方は多く、そこに情報が載っていないと選択肢に入りづらいのが現実です。ウェブサイトがあればお店の雰囲気がイメージしやすくなり、来店につながりやすくなります。"
                                },
                                {
                                    question: "SNSで情報発信していれば十分では？",
                                    answer: "SNSは「最新情報」を届けるのに向いていますが、投稿が流れてしまい、メニューやアクセスなどの「基本情報」が埋もれがちです。ホームページはこれらを整理して常に表示できるため、お客様の安心感につながります。"
                                },
                                {
                                    question: "最近はAI検索で完結してしまい、Googleマップなども見ないのですが…",
                                    answer: "AI検索も、実はGoogleマップやウェブサイトの情報を元に回答を構成しています。公式のホームページがあることで、AIからお客様へ正しく紹介されやすくなるというメリットがあります。"
                                }
                            ]} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
