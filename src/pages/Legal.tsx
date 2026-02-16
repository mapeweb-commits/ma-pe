import React from 'react';

export const Legal: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#FFFFFF' }}>
            <section className="section text-center" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
                <div className="container">
                    <h1 className="heading-lg">特定商取引法に基づく表記</h1>
                </div>
            </section>

            <section className="section" style={{ paddingBottom: '120px' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="legal-info" style={{ backgroundColor: 'white', padding: '40px', borderRadius: '8px' }}>
                        <dl style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
                            {[
                                {
                                    term: "事業者名",
                                    desc: "長谷川 雅彦（屋号：まーぺ (ma-pe)）"
                                },
                                {
                                    term: "運営責任者",
                                    desc: "長谷川 雅彦"
                                },
                                {
                                    term: "所在地",
                                    desc: "群馬県前橋市\n※詳細な住所は、ご請求があった場合に遅滞なく開示いたします。"
                                },
                                {
                                    term: "連絡先",
                                    desc: "メールアドレス：mapeweb.contact@gmail.com\n電話番号：ご請求があった場合に遅滞なく開示いたします。"
                                },
                                {
                                    term: "販売価格",
                                    desc: "提供するサービス内容により、個別にお見積もりいたします。"
                                },
                                {
                                    term: "商品代金以外の必要料金",
                                    desc: "銀行振込の場合、振込手数料はお客様のご負担となります。"
                                },
                                {
                                    term: "支払方法",
                                    desc: "銀行振込／クレジットカード決済"
                                },
                                {
                                    term: "支払時期",
                                    desc: "契約締結後、当方が指定する期日までにお支払いください。"
                                },
                                {
                                    term: "役務の提供時期",
                                    desc: "契約締結後、双方合意のスケジュールに基づき制作・提供いたします。"
                                },
                                {
                                    term: "キャンセル・返金について",
                                    desc: "制作開始後のキャンセルにつきましては、作業の進行状況に応じて費用が発生する場合があります。\n成果物の納品後については、返金には応じかねます。"
                                }
                            ].map((item, i) => (
                                <div key={i} style={{ borderBottom: '1px solid #eee', paddingBottom: '20px', marginBottom: '10px' }}>
                                    <dt style={{ fontWeight: 'bold', marginBottom: '8px', color: '#432F2F' }}>{item.term}</dt>
                                    <dd style={{ whiteSpace: 'pre-wrap', lineHeight: 1.8 }}>{item.desc}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>
        </div>
    );
};
