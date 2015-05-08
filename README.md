# gulpを使ってCSSを結合して1ファイルにまとめるサンプル

## 必要な環境

- NodeJS
- gulp

## 必要なもののインストール

このリポジトリをクローンまたはダウンロードしてディレクトリに移動します。

もしグローバル環境にgulpがインストールされていない場合は、まず以下のコマンドを実行します。

```sh
npm install -g gulp
```

そして以下のコマンドを実行します。

```sh
npm install
```

これで必要なファイルが用意されました。

## CSSを結合する

### css/srcディレクトリ以下のCSSファイルを、順序関係なく結合する

```sh
gulp concat:allCSS
```

### css/srcディレクトリ以下のCSSファイルを、gulpfile.js内の指定した順で結合する

```sh
gulp concat:sortedCSS
```