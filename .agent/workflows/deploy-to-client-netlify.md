---
description: 他人（クライアント）のNetlifyアカウントにホームページをデプロイするワークフロー
---

# クライアントのNetlifyアカウントにデプロイする方法

## 前提条件

- あなた（開発者）: GitHubアカウントを持っている
- クライアント: Netlifyアカウントを持っている（無料プランでOK、メールやGoogleで登録可能、GitHubは不要）
- プロジェクト: Vite + React（`npm run build` → `dist` フォルダ出力）

---

## 方法の選び方

| シナリオ | 推奨方法 | クライアント負担 |
|---------|---------|---------------|
| **クライアントが技術に詳しくない** | **方法B（推奨 ✅）** | ⭐ 最小 |
| **継続的に自動更新したい + クライアントにGitHubがある** | 方法A | ⭐⭐⭐ |
| **1回限りの納品** | 方法C | ⭐⭐ |

---

## 方法B: デプロイトークン方式（推奨 ✅）

### メリット
- クライアントの負担が最小（トークン発行のみ）
- クライアントにGitHub知識が不要
- ビルド設定のミスが起きない（開発者がローカルでビルド）
- 更新時にクライアントを巻き込まない

### 制約事項（GitHubとNetlifyの連携仕様）
- Netlifyは1アカウントにつき1つのGitHubアカウントしか連携できない
- クライアントのNetlifyから開発者のGitHubリポジトリを直接連携できない
  - そのため、方法AはクライアントがGitHubアカウントを持ち、リポジトリにアクセス権がある場合のみ利用可能
- 方法Bならこの制約を完全に回避できる

### 手順

#### ステップ1: クライアントがNetlifyアカウントを作成（初回のみ）

1. https://app.netlify.com/signup にアクセス
2. Google、メール、GitHub等で登録（Googleが最もシンプル）
3. オンボーディング質問に回答（スキップ可能）

#### ステップ2: クライアントがトークンを発行（初回のみ）

1. Netlifyにログイン
2. 左下のユーザーアイコン → 「User settings」
3. 左メニューの「Applications」→ 「Personal access tokens」
4. 「New access token」をクリック
5. トークン名を設定（例: `deploy-token`）
6. 「Generate token」をクリック
7. 表示されたトークン（`nfp_` で始まる）をコピーして開発者に共有
   - ⚠️ トークンは1回しか表示されないので注意

#### ステップ3: 開発者がプロジェクトを作成（Netlify APIで）

// turbo
```bash
# クライアントのトークンを使ってAPIでプロジェクトを作成
curl -s -X POST "https://api.netlify.com/api/v1/sites" \
  -H "Authorization: Bearer <クライアントのトークン>" \
  -H "Content-Type: application/json" \
  -d '{"name": "<希望するサイト名>"}' | python3 -m json.tool
```

レスポンスから以下を記録：
- `site_id`: デプロイ時に使用
- `url`: 公開URL（例: `https://xxx.netlify.app`）

#### ステップ4: ビルド（開発者側）

⚠️ **重要: `npm run build` ではなく `npx vite build` を直接使う**

`npm run build` は `tsc -b && vite build` を実行し、`tsc -b` の後に環境変数が
うまく引き継がれない場合があるため。

// turbo
```bash
# distをクリーンにしてからビルド
rm -rf dist
NETLIFY=true npx vite build
```

ビルド後、パスが正しいか確認：
// turbo
```bash
head -10 dist/index.html
# href="/assets/..." のようにルートパスになっていればOK
# href="/project-name/assets/..." となっていたらNGO
```

#### ステップ5: デプロイ（開発者側）

⚠️ **重要: `--no-build` フラグが必須**

`netlify.toml` に `build.command` がある場合、CLIが再ビルドを実行してしまい、
ローカルで正しくビルドした `dist` が上書きされてしまうため。

```bash
NETLIFY_AUTH_TOKEN=<クライアントのトークン> \
npx netlify-cli deploy \
  --site=<サイトID> \
  --dir=dist \
  --prod \
  --no-build
```

#### ステップ6: 動作確認

ブラウザで `https://<サイト名>.netlify.app` にアクセスして確認。

#### 以後の更新手順（開発者側のみ）

```bash
# 1. コードを修正
# 2. ビルド
rm -rf dist && NETLIFY=true npx vite build

# 3. デプロイ
NETLIFY_AUTH_TOKEN=<トークン> npx netlify-cli deploy \
  --site=<サイトID> --dir=dist --prod --no-build
```

---

## 方法A: GitHub連携

### メリット
- GitHubにプッシュするだけで自動デプロイ
- デプロイコマンドの実行が不要

### デメリット
- クライアントにGitHubアカウントが必要
- クライアントがNetlify-GitHub連携の設定をする必要がある
- Netlifyは自分のGitHubリポジトリしか連携できないため、リポジトリのアクセス権設定が必要

### 手順

#### ステップ1: GitHubリポジトリを準備（開発者側）

1. 公開（Public）リポジトリとしてGitHubにコードをプッシュ
2. `netlify.toml` をプロジェクトルートに作成:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NETLIFY = "true"

# SPA対応
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

3. `vite.config.ts` でNetlify環境に対応:

```typescript
export default defineConfig({
  plugins: [react()],
  base: process.env.NETLIFY ? '/' : '/your-project-name/',
})
```

4. React Routerの `basename` も動的に:

```tsx
<BrowserRouter basename={import.meta.env.BASE_URL}>
```

#### ステップ2: クライアントにGitHubリポジトリへのアクセス権を付与（開発者側）

1. GitHubリポジトリの Settings → Collaborators → Add people
2. クライアントのGitHubアカウントを招待
3. 権限は「Read」でOK
4. ※リポジトリがPublicの場合、この手順は省略可能

#### ステップ3: クライアントがNetlifyでプロジェクトを作成（クライアント側）

1. https://app.netlify.com にログイン
2. 「Add new project」→「Import an existing project」
3. 「Deploy with GitHub」を選択
4. 開発者のGitHubリポジトリを検索・選択
5. ビルド設定を確認（netlify.toml があれば自動入力される）:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. 「Deploy」をクリック

#### ステップ4: 以後の更新（開発者側）

```bash
git add -A
git commit -m "更新内容の説明"
git push origin main
# → 自動的にNetlifyが再デプロイ
```

---

## 方法C: ドラッグ＆ドロップ（最もシンプル）

### ユースケース
- 1回限りの納品
- クライアントが技術に詳しくない場合

### 手順

1. 開発者がビルド: `rm -rf dist && NETLIFY=true npx vite build`
2. `dist` フォルダをZIPにして送付
3. クライアントがNetlifyにログイン
4. ダッシュボードにZIPファイルをドラッグ＆ドロップ

---

## 独自ドメインの設定（オプション）

クライアントが独自ドメインを持っている場合:

1. Netlifyの Project configuration → Domain management
2. 「Add a domain」でドメインを追加
3. DNSレコードを設定（クライアントのドメイン管理画面で）:
   - CNAME: `xxx.netlify.app` を指す
   - または A レコード: Netlifyの IP アドレスを指す
4. SSL証明書は自動発行される（Let's Encrypt）

### 独自ドメインサイトを別アカウントに移行する場合

1. 新アカウントでプロジェクトを作成＆デプロイ（ドメインはまだ設定しない）
2. `.netlify.app` URLで動作確認
3. 旧プロジェクトからカスタムドメインを解除（⚠️ ダウンタイム開始）
4. 新プロジェクトにカスタムドメインを追加
5. SSL証明書の自動発行を待つ（約2〜5分）
6. ダウンタイム終了
- 外部DNS（お名前.com等）の場合: DNS設定の変更は不要
- Netlify DNSの場合: DNSゾーンの再設定が必要（やや複雑）

---

## トラブルシューティング

### 画面が真っ白になる
- `dist/index.html` のアセットパスを確認:
  - ✅ 正しい: `src="/assets/index-xxx.js"`
  - ❌ 間違い: `src="/project-name/assets/index-xxx.js"`
- 原因: `vite.config.ts` の `base` が `'/'` になっていない
- 対処: `NETLIFY=true npx vite build` で再ビルド（`npm run build` ではなく直接）

### CLIデプロイ時にビルドが再実行される
- 原因: `netlify.toml` の `build.command` が CLIでも実行される
- 対処: `--no-build` フラグを追加

### 404エラーが出る（SPAルーティング）
- `netlify.toml` にリダイレクト設定があるか確認:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### GitHub連携でデプロイが失敗する
- `npm run build` がローカルで成功するか確認
- Node.jsのバージョンを `netlify.toml` で指定:
```toml
[build.environment]
  NODE_VERSION = "20"
```

### 複数のGitHubアカウントを同じデバイスで使う場合
- リポジトリごとにPATをremote URLに埋め込む:
```bash
git remote set-url origin https://<ユーザー名>:<PAT>@github.com/<ユーザー名>/<リポ名>.git
```
- キーチェーンは使わない（1つのホストに1つしか保存できないため）

### Netlifyの無料プラン制限
- チームメンバー: 1人のみ（追加不可）
- 帯域幅: 100 GB/月
- ビルド時間: 300分/月
- サイト移行（Transfer site）機能: 新UIでは利用不可
