#!/bin/bash
# Netlifyクライアントデプロイスクリプト
# 使用法: bash deploy.sh <プロジェクトルート> <NETLIFY_AUTH_TOKEN> <SITE_ID>

set -e

PROJECT_ROOT="$1"
NETLIFY_AUTH_TOKEN="$2"
SITE_ID="$3"

if [ -z "$PROJECT_ROOT" ] || [ -z "$NETLIFY_AUTH_TOKEN" ] || [ -z "$SITE_ID" ]; then
  echo "エラー: 引数が不足しています"
  echo "使用法: bash deploy.sh <プロジェクトルート> <NETLIFY_AUTH_TOKEN> <SITE_ID>"
  echo ""
  echo "引数:"
  echo "  プロジェクトルート  - Viteプロジェクトのルートディレクトリ"
  echo "  NETLIFY_AUTH_TOKEN  - クライアントのNetlify Personal Access Token"
  echo "  SITE_ID             - NetlifyのサイトID"
  exit 1
fi

cd "$PROJECT_ROOT"

echo "=== ステップ1: distフォルダをクリーン ==="
rm -rf dist
echo "✅ distフォルダを削除しました"

echo ""
echo "=== ステップ2: Netlify用にビルド ==="
NETLIFY=true npx vite build
echo "✅ ビルド完了"

echo ""
echo "=== ステップ3: アセットパスを確認 ==="
if grep -q 'src="/assets/' dist/index.html; then
  echo "✅ アセットパスが正しい（ルートパス）"
else
  echo "❌ エラー: アセットパスが正しくありません"
  echo "dist/index.htmlの内容:"
  head -10 dist/index.html
  exit 1
fi

echo ""
echo "=== ステップ4: Netlifyにデプロイ ==="
NETLIFY_AUTH_TOKEN="$NETLIFY_AUTH_TOKEN" npx -y netlify-cli deploy \
  --site="$SITE_ID" \
  --dir=dist \
  --prod \
  --no-build

echo ""
echo "🎉 デプロイ完了！"
