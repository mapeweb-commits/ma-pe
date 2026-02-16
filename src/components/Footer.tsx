import React from 'react';
import { Link } from 'react-router-dom';

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
                        <Link to="/legal" style={{ opacity: 0.8 }}>特定商取引法に基づく表記</Link>
                        <Link to="/privacy" style={{ opacity: 0.8 }}>プライバシーポリシー</Link>
                    </div>
                    <p>Copyright © ma-pe. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};
