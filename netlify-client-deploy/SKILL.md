---
name: netlify-client-deploy
description: クライアント（他人）のNetlifyアカウントにVite+Reactウェブサイトをデプロイするスキル。デプロイトークン方式によりGitHub連携不要でクライアントの負担を最小化する。クライアントのNetlifyへのデプロイ、他人のアカウントへのデプロイ、ホームページの納品、Netlifyデプロイトークンについて聞かれたときに使用する。
---

# Netlifyクライアントデプロイ

クライアント（他人）のNetlifyアカウントにVite+Reactウェブサイトをデプロイする。

## 前提知識

### GitHubとNetlifyの連携制約

- Netlifyは**1アカウントにつき1つのGitHubアカウント**しか連携できない
- クライアントのNetlifyから開発者のGitHubリポジトリを直接連携**できない**
- そのため**デプロイトークン方式**を使う（GitHub連携の制約を完全に回避）

### デプロイトークン方式の利点

- クライアントの作業: Netlify登録 + トークン発行の**2つだけ**
- クライアントにGitHub知識は不要
- ビルド設定のミスが起きない（開発者がローカルでビルド）
- 更新時にクライアントの作業は不要

## ワークフロー

### フェーズ1: プロジェクト準備（開発者の初回のみ）

`vite.config.ts`のbase設定をNetlify対応にする:

```typescript
export default defineConfig({
  plugins: [react()],
  base: process.env.NETLIFY ? '/' : '/project-name/',
})
```

React Routerのbasenameを動的にする:

```tsx
<BrowserRouter basename={import.meta.env.BASE_URL}>
```

プロジェクトルートに`netlify.toml`を作成。テンプレートは`assets/netlify.toml.template`を参照。

### フェーズ2: クライアントのNetlifyセットアップ（初回のみ）

クライアントに案内テンプレートを使って依頼する。テンプレートは`references/client-guide-templates.md`を参照。

クライアントがやること:
1. https://app.netlify.com/signup でアカウント作成（Googleが最もシンプル）
2. User Settings → Applications → Personal Access Tokens → New access token
3. トークン（`nfp_`で始まる文字列）を開発者に共有

### フェーズ3: プロジェクト作成（開発者側）

`scripts/create_site.sh`を使ってNetlify APIでプロジェクトを作成:

```bash
bash <skill-path>/scripts/create_site.sh <NETLIFY_AUTH_TOKEN> <サイト名>
```

レスポンスからサイトIDとURLを記録する。

### フェーズ4: ビルド＆デプロイ（開発者側）

`scripts/deploy.sh`を使う:

```bash
bash <skill-path>/scripts/deploy.sh <プロジェクトルート> <NETLIFY_AUTH_TOKEN> <SITE_ID>
```

手動で実行する場合:

```bash
# ⚠️ npm run build ではなく npx vite build を直接使う
# tsc -b後に環境変数が引き継がれない問題を回避するため
rm -rf dist
NETLIFY=true npx vite build

# ⚠️ --no-build が必須
# netlify.tomlのbuild.commandによる再ビルドを防ぐため
NETLIFY_AUTH_TOKEN=<token> npx netlify-cli deploy \
  --site=<site-id> --dir=dist --prod --no-build
```

### フェーズ5: 動作確認

ブラウザで `https://<サイト名>.netlify.app` にアクセスして確認。

### 以後の更新

開発者だけで完結する。クライアントの作業は不要:
```bash
rm -rf dist && NETLIFY=true npx vite build
NETLIFY_AUTH_TOKEN=<token> npx netlify-cli deploy \
  --site=<site-id> --dir=dist --prod --no-build
```

## 重要な注意事項

### ビルドコマンド

`npm run build`（`tsc -b && vite build`）ではなく`NETLIFY=true npx vite build`を直接使う。
`tsc -b`実行後に`NETLIFY`環境変数が引き継がれない場合がある。

### --no-buildフラグ

CLIデプロイ時は必ず`--no-build`を付ける。
`netlify.toml`の`build.command`がCLIでも再実行され、正しいdistが上書きされるため。

### パス確認

デプロイ前にdist/index.htmlのパスを確認:
- ✅ `src="/assets/..."` → 正しい
- ❌ `src="/project-name/assets/..."` → NG、再ビルドが必要

## トラブルシューティング

問題が発生した場合は`references/troubleshooting.md`を参照。

## バンドルリソース

| パス | 説明 |
|------|------|
| `scripts/deploy.sh` | ビルド＆デプロイ自動化スクリプト |
| `scripts/create_site.sh` | Netlify APIでプロジェクト作成 |
| `references/client-guide-templates.md` | クライアントへの案内メッセージテンプレート |
| `references/troubleshooting.md` | トラブルシューティング集 |
| `assets/netlify.toml.template` | netlify.toml設定テンプレート |
