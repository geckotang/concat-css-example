# gulpを使ってCSSを結合して1ファイルにまとめるサンプル

Sassとかプリプロセッサとかは使ってないけど、CSSの結合**だけ**したいよ。みたいな人向けのgulpを使ったサンプル。

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

これで、順序関係なく結合された[css/style.css](https://github.com/geckotang/concat-css-example/blob/master/css/style.css)が生成されます。

### css/srcディレクトリ以下のCSSファイルを、gulpfile.js内の指定した順で結合する

```sh
gulp concat:sortedCSS
```

これで、指定した順序で結合された[css/sorted_style.css](https://github.com/geckotang/concat-css-example/blob/master/css/sorted_style.css)が生成されます。
