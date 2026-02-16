import React from 'react';

export const Privacy: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#FFFFFF' }}>
            <section className="section text-center" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
                <div className="container">
                    <h1 className="heading-lg">プライバシーポリシー</h1>
                </div>
            </section>

            <section className="section" style={{ paddingBottom: '120px' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="privacy-policy" style={{ backgroundColor: 'white', padding: '40px', borderRadius: '8px', lineHeight: '1.9' }}>
                        <p style={{ marginBottom: '2rem' }}>
                            まーぺ（以下、「当方」）は、個人情報の重要性を認識し、適切な取り扱いと保護に努めます。
                        </p>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.3rem', borderLeft: '4px solid #D09166', paddingLeft: '1rem', marginBottom: '1.5rem' }}>1. 個人情報の取得について</h2>
                            <p>当方のウェブサイトでは、氏名・住所・電話番号・メールアドレス等の個人情報を、原則として直接取得・保存することはありません。</p>
                            <p>お問い合わせや申し込み等は、外部サービスを通じて行われます。</p>
                        </div>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.3rem', borderLeft: '4px solid #D09166', paddingLeft: '1rem', marginBottom: '1.5rem' }}>2. 利用している外部サービス</h2>
                            <p>当サイトでは、以下の外部サービスを利用する場合があります。</p>
                            <ol style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
                                <li>LINE公式アカウント（連絡・予約対応）</li>
                                <li>Googleフォーム（問い合わせ・申し込み受付）</li>
                                <li>Google Analytics（アクセス解析）</li>
                            </ol>
                            <p style={{ marginTop: '1rem' }}>外部サービス上で入力された情報は、各サービス提供事業者のシステム内で管理され、当方はその管理責任を負いません。</p>
                        </div>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.3rem', borderLeft: '4px solid #D09166', paddingLeft: '1rem', marginBottom: '1.5rem' }}>3. 個人情報の利用目的</h2>
                            <p>外部サービスを通じて取得される情報は、連絡対応、申し込み内容の確認、サービス提供等の目的で利用されます。</p>
                            <p>当方は、当該情報を外部サービスの管理画面上で確認する場合がありますが、独自に保存・二次利用することはありません。</p>
                        </div>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.3rem', borderLeft: '4px solid #D09166', paddingLeft: '1rem', marginBottom: '1.5rem' }}>4. Googleフォームの利用について</h2>
                            <p>当サイトでは、問い合わせおよび申し込み受付のためにGoogleフォームを利用しています。<br />Googleフォームに入力された情報は、Google LLCの提供するサービス上で管理されます。</p>
                            <p>Google社における個人情報の取り扱いについては、同社のプライバシーポリシーをご確認ください。</p>
                        </div>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.3rem', borderLeft: '4px solid #D09166', paddingLeft: '1rem', marginBottom: '1.5rem' }}>5. アクセス解析ツールについて</h2>
                            <p>当サイトでは、サイト改善を目的としてGoogle Analyticsを利用しています。<br />Google Analyticsはクッキー（Cookie）を使用して、匿名のトラフィックデータを収集しますが、個人を特定する情報は含まれません。</p>
                        </div>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.3rem', borderLeft: '4px solid #D09166', paddingLeft: '1rem', marginBottom: '1.5rem' }}>6. クッキー（Cookie）について</h2>
                            <p>クッキーは、利用者のブラウザを識別するためのものであり、氏名や連絡先などの個人情報を含むものではありません。<br />利用者は、ブラウザの設定によりクッキーの使用を拒否することが可能です。</p>
                        </div>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.3rem', borderLeft: '4px solid #D09166', paddingLeft: '1rem', marginBottom: '1.5rem' }}>7. 個人情報の第三者提供</h2>
                            <p>当方は、法令に基づく場合を除き、個人情報を第三者に提供することはありません。<br />ただし、外部サービスの利用に伴う情報提供については、各サービス提供事業者の規定に従います。</p>
                        </div>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.3rem', borderLeft: '4px solid #D09166', paddingLeft: '1rem', marginBottom: '1.5rem' }}>8. 免責事項</h2>
                            <p>当サイトの利用により生じたトラブルや損害について、当方は責任を負いかねます。<br />また、外部サービスの内容や運用変更等について、当方は一切の責任を負いません。</p>
                        </div>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.3rem', borderLeft: '4px solid #D09166', paddingLeft: '1rem', marginBottom: '1.5rem' }}>9. プライバシーポリシーの変更</h2>
                            <p>本プライバシーポリシーは、法令の変更や運営方針の見直しにより、予告なく改定される場合があります。</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
