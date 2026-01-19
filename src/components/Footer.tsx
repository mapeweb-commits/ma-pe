import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div>
                        <div className="logo mb-md" style={{ fontSize: '1.1rem' }}>まーぺ｜まちのお店のためのホームページ制作</div>
                        <p className="text-sub" style={{ fontSize: '0.9rem' }}>
                            見やすい・軽い・維持費がほぼかからない“お店の看板”
                        </p>
                    </div>
                    <div className="text-sub" style={{ fontSize: '0.9rem' }}>
                        <p>※静的サイト制作専門（ブログ・予約・EC非対応）</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        {/* Note: Legal and Privacy links are placeholders as per instructions */}
                        <span style={{ cursor: 'not-allowed', opacity: 0.5 }}>特定商取引法に基づく表記</span>
                        <span style={{ cursor: 'not-allowed', opacity: 0.5 }}>プライバシーポリシー</span>
                    </div>
                    <p>© ma-pe. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};
