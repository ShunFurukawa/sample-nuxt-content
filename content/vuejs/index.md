---
title: Vue.js
description: The Progressive JavaScript Framework
thumb: index.jpg
tag:
  - foo
  - vuejs
  - vue
createdAt: 2021-02-01 14:00
---

![logo-image](https://jp.vuejs.org/images/logo.png)
## The Progressive JavaScript Framework

### 親しみやすい
すでに **HTML**、CSS そして JavaScript を知っていますか？ガイドを読んで、すぐにモノ作りを開始しましょう！


## はじめに

>公式ガイドは、HTML、CSS そして JavaScript の中レベルのフロントエンドの知識を前提にしています。フロントエンドの開発が初めてであるならば、最初のステップとして、フレームワークに直接入門するのは良いアイデアではないかもしれません。基礎を学んで戻ってきましょう！他のフレームワークでの以前の経験は役に立ちますが、必須ではありません。


Vue.js を試すには、Hello World example が最も簡単です。気軽に他のタブを開いて、基本的な例を試してみましょう。もしくは、単純に index.html を作成し 、以下のコードで Vue を導入することができます:

```html
<!-- 開発バージョン、便利なコンソールの警告が含まれています -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
```

or

```html
<!-- 本番バージョン、サイズと速度のために最適化されています -->
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
```

Vue の他のインストール方法について、インストール ページで紹介しています。注意点として、初心者が vue-cli で始めることは推奨しません（特に、Node.js ベースのツールについてまだ詳しくない場合）。

よりインタラクティブに学びたい場合、スクリーンキャストといつでも一時停止してコードを試せる環境を組み合わせた、 Scrimba の一連のチュートリアル を利用可能です


## 宣言的レンダリング
Vue.js のコアは、単純なテンプレート構文を使って宣言的にデータを DOM に描画することを可能にするシステムです:

```html
<div id="app">
  {{ message }}
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

これで初めての Vue アプリケーションが作成できました！一見するとただテンプレートを描画しているように見えますが、Vue.js は内部で多くの作業を行っています。データと DOM は関連付けられ、そして全てがリアクティブになっています。どのようにしてそれが分かるのでしょうか？ブラウザの JavaScript コンソールを開いて、app.message の値を変えてみましょう。描画されたサンプルが、上記に応じて更新されるのが確認できるでしょう。

これでもう HTML を直接操作する必要がないことに注意してください。Vue アプリケーションは、自身を単一の DOM 要素 (上の例では #app 要素) にアタッチし、完全に制御します。HTML はエントリポイントにはなりますが、ほかのすべてのことは新しく作られた Vue インスタンスの中で起こります。


<v-img src='00.jpg' alt='00'></v-img>
