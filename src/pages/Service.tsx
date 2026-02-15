import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import { Accordion } from '../components/Accordion';

export const Service: React.FC = () => {
    const plans = [
        {
            name: "基本料金",
            price: "30,000",
            features: ["最大5ページ", "文章・写真はご支給", "修正は2回まで", "Googleマップ／SNSリンク等埋め込み"],
            recommend: false
        },
        {
            name: "オプション",
            price: "",
            features: ["ページ追加", "原稿作成サポート", "画像素材の用意", "（内容は随時更新）"],
            recommend: false
        },

    ];

    const faqs = [
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
    ];

    return (
        <>
            <div style={{ backgroundColor: '#FDFBF8' }}>
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
                                    "静的サイト（固定ページ）の制作",
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
            </div>

            {/* Flow Info */}
            <div style={{ backgroundColor: '#fff' }}>
                <section className="section-wrapper">
                    <div style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '80px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h2 className="heading-xxl" style={{ fontSize: '2.5rem' }}>制作の流れ</h2>
                            <p style={{ color: 'var(--text-sub)' }}>完成までのシンプルな6ステップ</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                            {[
                                {
                                    num: "01",
                                    name: "相談",
                                    desc: "LINEまたはお問い合わせフォームから、ご要望や希望プランを簡単にお知らせください"
                                },
                                {
                                    num: "02",
                                    name: "お支払い",
                                    desc: "内容にご納得いただけましたら、案内に従ってお支払いをお願いいたします"
                                },
                                {
                                    num: "03",
                                    name: "ヒアリング",
                                    desc: "ヒアリングフォーム等にて、営業時間・メニュー・写真など、必要な情報を揃えます"
                                },
                                {
                                    num: "04",
                                    name: "ラフ案提示",
                                    desc: "ヒアリング内容をもとに、仮のホームページを作成し、方向性の確認をします"
                                },
                                {
                                    num: "05",
                                    name: "制作・確認",
                                    desc: "実際に公開するホームページを制作し、修正箇所をお伺いします（修正は２回まで）"
                                },
                                {
                                    num: "06",
                                    name: "公開・納品",
                                    desc: "完成後、案内に沿って公開するためのホスティングサービスへの登録作業を行なっていただきます。登録確認後、公開して完了です"
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
            </div>

            {/* Pricing */}
            <div style={{ backgroundColor: '#FDFBF8' }}>
                <section className="section-wrapper">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 className="heading-xxl" style={{ fontSize: '2.5rem' }}>料金プラン</h2>
                        <p style={{ color: 'var(--text-sub)' }}>ベースプランと、必要な分だけ追加できるオプション。</p>
                    </div>

                    <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', maxWidth: '900px', margin: '0 auto' }}>
                        {plans.map((plan, i) => (
                            <div key={i} className="card" style={{
                                position: 'relative',
                                border: '1px solid rgba(255,255,255,0.5)',
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: plan.recommend ? '#fff' : 'rgba(255,255,255,0.6)',
                                transform: plan.recommend ? 'scale(1.05)' : 'none',
                                zIndex: plan.recommend ? 10 : 1,
                                boxShadow: plan.recommend ? '0 20px 40px rgba(0,0,0,0.1)' : 'none',
                                padding: '40px 20px'
                            }}>
                                {plan.recommend && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-15px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        backgroundColor: 'var(--accent)',
                                        color: 'white',
                                        padding: '5px 15px',
                                        borderRadius: '20px',
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold'
                                    }}>RECOMMENDED</div>
                                )}
                                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-rounded)', marginBottom: '1rem', textAlign: 'center' }}>{plan.name}</h3>
                                {plan.name === 'オプション' ? (
                                    <div style={{ fontSize: '1.1rem', fontWeight: 700, textAlign: 'center', marginBottom: '2rem', color: 'var(--text-main)', minHeight: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        必要なものを自由にプラス
                                    </div>
                                ) : (
                                    <div style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '2rem', color: 'var(--text-main)' }}>
                                        <span style={{ fontSize: '1rem', fontWeight: 400, marginRight: '4px' }}>¥</span>{plan.price}
                                    </div>
                                )}

                                <ul style={{ marginBottom: '2rem', flexGrow: 1 }}>
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} style={{ display: 'flex', gap: '10px', marginBottom: '10px', fontSize: '0.95rem', color: 'var(--text-sub)' }}>
                                            <Check size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                {plan.name === '基本料金' && (
                                    <div style={{
                                        backgroundColor: '#fff8d7',
                                        padding: '15px',
                                        borderRadius: '8px',
                                        marginBottom: '0',
                                        textAlign: 'center'
                                    }}>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 'bold', marginBottom: '8px' }}>
                                            ご利用後のアンケート回答で<br />4,000円OFF
                                        </p>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--text-main)', flexWrap: 'wrap' }}>
                                            <span style={{ textDecoration: 'line-through double', color: 'var(--text-sub)', fontSize: '1.1rem' }}>¥30,000</span>
                                            <span style={{ fontSize: '1.2rem', color: 'var(--accent)' }}>→</span>
                                            <span style={{ fontSize: '1.6rem', fontWeight: 700 }}>
                                                <span style={{ fontSize: '1rem', marginRight: '2px' }}>¥</span>26,000
                                            </span>
                                        </div>
                                        <p style={{ fontSize: '0.75rem', marginTop: '15px', color: 'var(--text-sub)', textAlign: 'left', lineHeight: '1.6' }}>
                                            ※アンケートの回答に同意していただいた方のみ対象です。<br />
                                            ホームページ納品後にアンケートフォームのリンクをお送りいたします。
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div style={{
                        margin: '60px auto 0',
                        maxWidth: '900px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '40px'
                    }}>
                        <div style={{
                            flex: '1 1 400px',
                            backgroundColor: '#fff8d7',
                            padding: '40px',
                            borderRadius: '8px'
                        }}>
                            <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.2rem', marginBottom: '20px', textAlign: 'center' }}>サービスの前提</h3>
                            <div className="split-2" style={{ gap: '20px' }}>
                                <ul style={{ listStyle: 'none', fontSize: '0.95rem' }}>
                                    <li style={{ marginBottom: '8px' }}>・ドメイン・サーバーはご依頼者様名義となります</li>
                                    <li style={{ marginBottom: '8px' }}>・納品後の運用はご依頼者様にお願いしております</li>
                                </ul>
                                <ul style={{ listStyle: 'none', fontSize: '0.95rem' }}>
                                    <li style={{ marginBottom: '8px' }}>・原稿が揃ってからの制作開始となります</li>
                                    <li style={{ marginBottom: '8px' }}>・規定回数を超える修正は追加費用となります</li>
                                    <li style={{ marginBottom: '8px' }}>・ホームページ公開完了後の修正は有料となります</li>
                                    <li style={{ marginBottom: '8px' }}>・軽微な修正など、再度依頼される場合はLINEまたはお問い合わせフォームよりご連絡ください</li>
                                </ul>
                            </div>
                        </div>
                        <div style={{ flex: '0 0 auto' }}>
                            <Link to="/contact" className="cta-btn" style={{ padding: '16px 60px', backgroundColor: 'var(--text-main)', color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                無料で相談する
                            </Link>
                        </div>
                    </div>
                </section>

            </div>

            {/* FAQ */}
            <div style={{ backgroundColor: '#fff' }}>
                <section className="section-wrapper">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '40px', textAlign: 'center' }}>よくある質問</h2>
                        <Accordion items={faqs} />
                    </div>
                </section>
            </div>
        </>
    );
};
