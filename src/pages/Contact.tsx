import React, { useState } from 'react';

export const Contact: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    // This is a dummy submit handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // In a real app, you would send this to a backend or form service like Formspree
    };

    if (submitted) {
        return (
            <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
                    <div className="card">
                        <h2 className="heading-md">送信しました</h2>
                        <p className="text-sub">
                            お問い合わせありがとうございます。<br />
                            内容を確認のうえ、2〜3日以内にご返信いたします。
                        </p>
                        <button
                            onClick={() => setSubmitted(false)}
                            style={{ marginTop: '2rem', color: 'var(--color-accent)', fontWeight: 'bold', textDecoration: 'underline' }}
                        >
                            戻る
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="section text-center" style={{ paddingTop: '120px', paddingBottom: '40px' }}>
                <div className="container">
                    <h1 className="heading-lg">無料相談</h1>
                    <p className="text-sub">まずは状況だけでOKです。</p>
                </div>
            </section>

            <section className="section" style={{ paddingBottom: '120px' }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <form onSubmit={handleSubmit} className="card">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">お名前 <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem' }}>*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="form-input"
                                    placeholder="例：山田 太郎"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">メールアドレス <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem' }}>*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="form-input"
                                    placeholder="例：taro@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="industry" className="form-label">業種 <span className="text-sub" style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>（任意）</span></label>
                                <input
                                    type="text"
                                    id="industry"
                                    className="form-input"
                                    placeholder="例：カフェ、美容室..."
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="url" className="form-label">いまホームページはありますか？ <span className="text-sub" style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>（任意）</span></label>
                                <input
                                    type="url"
                                    id="url"
                                    className="form-input"
                                    placeholder="URLがあれば貼り付けてください"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">ご希望</label>
                                <div style={{ display: 'flex', gap: '1.5rem' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input type="radio" name="type" defaultChecked style={{ accentColor: 'var(--color-accent)', width: '20px', height: '20px' }} />
                                        <span>新規制作</span>
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input type="radio" name="type" style={{ accentColor: 'var(--color-accent)', width: '20px', height: '20px' }} />
                                        <span>作り直し</span>
                                    </label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">ひとこと <span className="text-sub" style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>（任意）</span></label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="form-textarea"
                                    placeholder="困っていることや、相談したいことがあれば自由にお書きください。"
                                ></textarea>
                            </div>

                            <div style={{ paddingTop: '1rem' }}>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.1rem' }}>
                                    送信する
                                </button>
                            </div>
                        </div>

                        <div className="text-sub text-center" style={{ marginTop: '2rem', fontSize: '0.8rem', lineHeight: '1.5' }}>
                            <p>※返信は通常2〜3日以内を目安にお返しします</p>
                            <p>※営業目的の連絡には返信しません</p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};
