# トラブルシューティングガイド

## 目次

1. [画面が真っ白になる](#画面が真っ白になる)
2. [CLIデプロイ時にビルドが再実行される](#cliデプロイ時にビルドが再実行される)
3. [404エラー（SPAルーティング）](#404エラーspaルーティング)
4. [トークンが無効・認証エラー](#トークンが無効認証エラー)
5. [サイト名が既に使われている](#サイト名が既に使われている)
6. [複数GitHubアカウントの認証衝突](#複数githubアカウントの認証衝突)
7. [Netlify無料プランの制限](#netlify無料プランの制限)
8. [独自ドメインの移行](#独自ドメインの移行)

---

## 画面が真っ白になる

### 症状
デプロイ後にNetlifyのURLを開いても何も表示されない。

### 原因
`vite.config.ts`の`base`設定がNetlify用（`/`）になっていない。
GitHub Pages用の`/project-name/`パスが残っている。

### 確認方法
```bash
head -10 dist/index.html
```
- ❌ `src="/project-name/assets/index-xxx.js"` → パスが間違っている
- ✅ `src="/assets/index-xxx.js"` → 正しい

### 対処法
```bash
# npm run build ではなく npx vite build を直接使う
rm -rf dist
NETLIFY=true npx vite build
```

### 根本原因
`npm run build`は`tsc -b && vite build`を実行するが、`tsc -b`の後に
`NETLIFY`環境変数が正しく引き継がれない場合がある。

---

## CLIデプロイ時にビルドが再実行される

### 症状
ローカルで正しくビルドしたのに、デプロイ後のサイトが間違ったパスを使っている。

### 原因
`netlify.toml`に`build.command`が設定されている場合、
Netlify CLIの`--prod`デプロイ時にビルドが再実行される。

### 対処法
`--no-build`フラグを追加:
```bash
NETLIFY_AUTH_TOKEN=<token> npx netlify-cli deploy \
  --site=<site-id> --dir=dist --prod --no-build
```

---

## 404エラー（SPAルーティング）

### 症状
トップページは表示されるが、別のページに遷移するとNotFoundになる。

### 原因
`netlify.toml`のリダイレクト設定がない。

### 対処法
`netlify.toml`に以下を追加:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## トークンが無効・認証エラー

### 症状
デプロイ時に`401 Unauthorized`や`Invalid token`エラー。

### 原因
- トークンの有効期限切れ
- トークンの文字列コピーミス（大文字小文字が区別される）

### 対処法
1. クライアントに新しいトークンを発行してもらう
2. Netlify → User Settings → Applications → Personal Access Tokens → New access token
3. トークンは`nfp_`で始まる文字列

---

## サイト名が既に使われている

### 症状
`create_site.sh`実行時に名前の競合エラー。

### 対処法
別のサイト名を試す。サイト名はグローバルでユニークである必要がある。
```bash
bash create_site.sh <token> "my-unique-site-name-123"
```

---

## 複数GitHubアカウントの認証衝突

### 症状
`git push`時に間違ったアカウントで認証される。

### 原因
macOSのキーチェーンはgithub.comに対して1つの認証情報しか保存できない。

### 対処法
リポジトリごとにPATをremote URLに埋め込む:
```bash
git remote set-url origin https://<ユーザー名>:<PAT>@github.com/<ユーザー名>/<リポ名>.git
```

---

## Netlify無料プランの制限

| リソース | 制限 |
|---------|------|
| チームメンバー | 1人のみ（追加不可） |
| 帯域幅 | 100 GB/月 |
| ビルド時間 | 300分/月 |
| サイト移行 | 新UIでは利用不可 |

---

## 独自ドメインの移行

別のNetlifyアカウントに独自ドメインサイトを移行する場合:

1. 新アカウントでプロジェクト作成＆デプロイ（ドメインは未設定）
2. `.netlify.app` URLで動作確認
3. 旧プロジェクトからカスタムドメインを解除（⚠️ ダウンタイム開始）
4. 新プロジェクトにカスタムドメインを追加
5. SSL証明書の自動発行を待つ（約2〜5分）
6. ダウンタイム終了

- 外部DNS（お名前.com等）: DNS設定の変更は不要
- Netlify DNS: DNSゾーンの再設定が必要
