# Kazuko no Kai メンバー紹介ページ

このプロジェクトは、Google Spreadsheet の会員情報を基に GitHub Pages 上でメンバー紹介ページを自動生成する仕組みを提供します。

## ディレクトリ構成
```
kazukonokai/
├── assets/
│   ├── css/
│   │   └── styles.css  # Webページのスタイル
│   ├── js/
│   │   └── script.js   # JSON を fetch して表示するロジック
├── data/
│   └── members.json    # Google Spreadsheet から生成される JSON
├── index.html          # メインの HTML ファイル
└── README.md           # プロジェクトの説明
```

## 使用方法
1. `data/members.json` を Google Apps Script などで生成してください。
2. GitHub Pages を有効化し、`index.html` を公開してください。
3. メンバー情報が自動的に表示されます。

## 必要な機能
- Google Spreadsheet から JSON を生成するスクリプト（別途作成）
- GitHub Pages の設定

## ライセンス
このプロジェクトは MIT ライセンスの下で提供されます。