import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import { Accordion } from '../components/Accordion';

export const Service: React.FC = () => {
    const plans = [
        {
            name: "ライト",
            price: "30,000",
            features: ["1ページ完結（縦長1ページ）", "文章・写真はご支給", "修正：1回", "テンプレから選択"],
            recommend: false
        },
        {
            name: "スタンダード",
            price: "60,000〜80,000",
            features: ["3〜5ページ", "文章・写真はご支給", "修正：2回", "Googleマップ／電話ボタン込み"],
            recommend: true
        },
        {
            name: "フル",
            price: "100,000〜",
            features: ["5ページ以上", "構成の整理から一緒に", "修正：3回", "詳細なヒアリング"],
            recommend: false
        }
    ];

    const faqs = [
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
    ];

    return (
        <>
            <section className="section-wrapper full-screen" style={{ minHeight: '60vh', paddingBottom: 0 }}>
                <div style={{ maxWidth: '800px' }}>
                    <p style={{ letterSpacing: '0.2em', marginBottom: '20px', color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 700 }}>SERVICE</p>
                    <h1 className="heading-xxl">
                        シンプルで、<br />
                        長く使えるものだけ。
                    </h1>
                    <p className="text-justify" style={{ maxWidth: '500px', marginTop: '40px', fontSize: '1.1rem', lineHeight: 2.2 }}>
                        機能満載のサイトは作りません。<br />
                        お店の看板として「ちょうどいい」サイズ感で、<br />
                        丁寧に仕上げます。
                    </p>
                </div>
            </section>

            {/* Scope */}
            <section className="section-wrapper">
                <div className="split-2">
                    {/* Can Do */}
                    <div className="feature-card" style={{ borderTop: '4px solid var(--accent)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <div className="icon-circle"><Check size={20} /></div>
                            <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-rounded)', fontWeight: 'bold' }}>対応できること</h2>
                        </div>
                        <ul className="number-list">
                            {[
                                "静的サイト（固定ページ）の制作・作り直し",
                                "トップ / メニュー / アクセス / よくある質問 など",
                                "Googleマップ、電話ボタン、SNSリンクの設置"
                            ].map((item, i) => (
                                <li key={i} style={{ padding: '15px 0', borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', gap: '10px' }}>
                                    <span style={{ color: 'var(--accent)' }}>●</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Cannot Do */}
                    <div className="feature-card" style={{ backgroundColor: 'rgba(255,255,255,0.5)', border: '1px dashed #ccc' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <div className="icon-circle"><X size={20} color="var(--text-sub)" /></div>
                            <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-rounded)', fontWeight: 'bold', color: 'var(--text-sub)' }}>対応しないこと</h2>
                        </div>
                        <ul style={{ listStyle: 'none' }}>
                            {[
                                "ブログ機能 (WordPress等)",
                                "予約システム",
                                "ネットショップ（EC）",
                                "会員機能"
                            ].map((item, i) => (
                                <li key={i} style={{ padding: '15px 0', borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', gap: '10px', color: 'var(--text-sub)' }}>
                                    <span>×</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div style={{ marginTop: '2rem' }}>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-sub)' }}>
                                ※“シンプルな看板作り”に集中するため、機能のある仕組みは扱っていません。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Flow Info */}
            <section className="section-wrapper" style={{ paddingBottom: '0' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '80px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 className="heading-xxl" style={{ fontSize: '2.5rem' }}>制作の流れ</h2>
                        <p style={{ color: 'var(--text-sub)' }}>完成までのシンプルな5ステップ</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                        {[
                            {
                                num: "01",
                                name: "相談",
                                desc: "現状と目的を確認します（まずはURLだけでもOK）"
                            },
                            {
                                num: "02",
                                name: "情報整理",
                                desc: "営業時間・メニュー・写真など、必要な情報を揃えます"
                            },
                            {
                                num: "03",
                                name: "ラフ案提示",
                                desc: "ページ構成と文章の方向性を出します"
                            },
                            {
                                num: "04",
                                name: "制作・確認",
                                desc: "画面を見ながら確認（修正は回数内）"
                            },
                            {
                                num: "05",
                                name: "公開・納品",
                                desc: "公開して完了。必要なら簡単な使い方だけ共有します"
                            }
                        ].map((step, i) => (
                            <div key={i} className="" style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '30px',
                                padding: '30px 0',
                                borderBottom: '1px solid rgba(0,0,0,0.05)',
                            }}>
                                <div style={{
                                    width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.8)',
                                    border: '1px solid var(--accent)',
                                    color: 'var(--accent)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.2rem', fontFamily: 'var(--font-sans)', flexShrink: 0
                                }}>
                                    {step.num}
                                </div>
                                <div style={{ paddingTop: '10px' }}>
                                    <h3 style={{ marginBottom: '10px', fontSize: '1.4rem', fontFamily: 'var(--font-rounded)' }}>{step.name}</h3>
                                    <p style={{ color: 'var(--text-sub)', lineHeight: 1.8 }}>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="section-wrapper">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="heading-xxl" style={{ fontSize: '2.5rem' }}>料金プラン</h2>
                    <p style={{ color: 'var(--text-sub)' }}>わかりやすい3つのプランをご用意しました。</p>
                </div>

                <div className="grid-3">
                    {plans.map((plan, i) => (
                        <div key={i} className="card" style={{
                            position: 'relative',
                            border: '1px solid rgba(255,255,255,0.5)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-rounded)', marginBottom: '1rem', textAlign: 'center' }}>{plan.name}</h3>
                            <div style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '2rem', color: 'var(--text-main)' }}>
                                <span style={{ fontSize: '1rem', fontWeight: 400, marginRight: '4px' }}>¥</span>{plan.price}
                            </div>
                            <ul style={{ marginBottom: '2rem', flexGrow: 1 }}>
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} style={{ display: 'flex', gap: '10px', marginBottom: '10px', fontSize: '0.95rem', color: 'var(--text-sub)' }}>
                                        <Check size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '60px', backgroundColor: 'rgba(235, 229, 221, 0.5)', padding: '40px', borderRadius: '8px' }}>
                    <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.2rem', marginBottom: '20px', textAlign: 'center' }}>共通の前提</h3>
                    <div className="split-2" style={{ gap: '20px' }}>
                        <ul style={{ listStyle: 'none', fontSize: '0.95rem' }}>
                            <li style={{ marginBottom: '8px' }}>・ドメイン・サーバーは依頼者名義</li>
                            <li style={{ marginBottom: '8px' }}>・納品後の運用は依頼者側</li>
                        </ul>
                        <ul style={{ listStyle: 'none', fontSize: '0.95rem' }}>
                            <li style={{ marginBottom: '8px' }}>・原稿が揃ってから制作開始</li>
                            <li style={{ marginBottom: '8px' }}>・修正回数超過は追加費用</li>
                        </ul>
                    </div>
                </div>

                <div style={{ marginTop: '40px', backgroundColor: 'rgba(235, 229, 221, 0.5)', padding: '40px', borderRadius: '8px', maxWidth: '800px', margin: '40px auto 0' }}>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        <div className="text-sub" style={{ fontSize: '0.9rem' }}>
                            <p style={{ marginBottom: '0.5rem' }}>※修正回数には上限があります</p>
                            <p>※納品後の運用は依頼者側です</p>
                        </div>
                        <Link to="/contact" className="cta-btn" style={{ padding: '16px 40px', backgroundColor: 'var(--text-main)', color: 'white' }}>
                            無料で相談する
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-wrapper">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '40px', textAlign: 'center' }}>よくある質問</h2>
                    <Accordion items={faqs} />
                </div>
            </section>
        </>
    );
};
