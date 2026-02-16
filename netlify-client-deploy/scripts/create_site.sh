#!/bin/bash
# Netlifyプロジェクト作成スクリプト（API経由）
# 使用法: bash create_site.sh <NETLIFY_AUTH_TOKEN> <サイト名>

set -e

NETLIFY_AUTH_TOKEN="$1"
SITE_NAME="$2"

if [ -z "$NETLIFY_AUTH_TOKEN" ] || [ -z "$SITE_NAME" ]; then
  echo "エラー: 引数が不足しています"
  echo "使用法: bash create_site.sh <NETLIFY_AUTH_TOKEN> <サイト名>"
  echo ""
  echo "引数:"
  echo "  NETLIFY_AUTH_TOKEN  - クライアントのNetlify Personal Access Token"
  echo "  サイト名            - 希望するサイト名（xxx.netlify.appのxxx部分）"
  exit 1
fi

echo "=== Netlifyプロジェクトを作成中 ==="

RESPONSE=$(curl -s -X POST "https://api.netlify.com/api/v1/sites" \
  -H "Authorization: Bearer $NETLIFY_AUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"name\": \"$SITE_NAME\"}")

# エラーチェック
if echo "$RESPONSE" | python3 -c "import sys, json; data = json.load(sys.stdin); print(data.get('id', ''))" 2>/dev/null | grep -q '^$'; then
  echo "❌ エラー: プロジェクトの作成に失敗しました"
  echo "$RESPONSE" | python3 -m json.tool 2>/dev/null || echo "$RESPONSE"
  exit 1
fi

SITE_ID=$(echo "$RESPONSE" | python3 -c "import sys, json; print(json.load(sys.stdin)['id'])")
SITE_URL=$(echo "$RESPONSE" | python3 -c "import sys, json; print(json.load(sys.stdin)['url'])")
ADMIN_URL=$(echo "$RESPONSE" | python3 -c "import sys, json; print(json.load(sys.stdin)['admin_url'])")

echo "✅ プロジェクト作成完了！"
echo ""
echo "サイトID:   $SITE_ID"
echo "サイトURL:  $SITE_URL"
echo "管理画面:   $ADMIN_URL"
echo ""
echo "デプロイコマンド:"
echo "  bash deploy.sh <プロジェクトルート> $NETLIFY_AUTH_TOKEN $SITE_ID"
