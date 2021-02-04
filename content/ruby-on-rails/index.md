---
title: Ruby on Rails
description: プロダクト開発の０→１を学ぼう
thumb: index.jpg
tag:
  - ruby
  - rails
  - ruby on rails
createdAt: 2021-02-01 14:00
---


## 推薦の言葉
私が前にいた会社（CD Baby）は、かなり早い段階でRuby on Railsに乗り換えたのですが、またPHPに戻ってしまいました（詳細は私の名前をGoogleで検索してみてください）。そんな私ですが、Michael Hartl 氏の本を強く勧められたので、その本を使ってもう一度試してみた結果、今度は無事に Rails に乗り換えることができました。それがこの Ruby on Rails チュートリアルという本です。

私は多くの Rails 関連の本を参考にしてきましたが、真の決定版と呼べるものは本書をおいて他にありません。本書では、あらゆる手順が「Rails 流」で行われています。最初のうちは慣れるまでに時間がかかりましたが、この本を終えた今、ついにこれこそが自然な方式だと感じられるまでになりました。また、本書は Rails 関連の本の中で唯一、多くのプロが推奨するテスト駆動開発（TDD: Test Driven Development）を、全編を通して実践しています。実例を使ってここまで分かりやすく解説された本は、本書が初めてでしょう。極めつけは、Git や GitHub、Heroku の実例に含めている点です。このような、実際の開発現場で使わているツールもチュートリアルに含まれているため、読者は、まるで実際のプロジェクトの開発プロセスを体験しているかのような感覚が得られるはずです。それでいて、それぞれの実例が独立したセクションになっているのではなく、そのどれもがチュートリアルの内容と見事に一体化しています。

本書は、筋道だった一本道の物語のようになっています。私自身、章の終わりにある練習問題もやりながら、この Rails チュートリアルを3日間かけて一気に読破しました1 。最初から最後まで、途中を飛ばさずにやるのが一番効果的で有益な読み方です。ぜひやってみてください。

それでは、楽しんでお読みください！


## 謝辞
Ruby on Rails チュートリアルは、私の以前の著書「RailsSpace」と、その時の共著者 Aurelius Prochazka から多くを参考にさせてもらっています。Aure には、協力と本書への支援も含め、感謝したいと思います。また、RailsSpace と Rails チュートリアルの編集を担当した Debra Williams Cauley 氏にも謝意を表したく思います。彼女が野球の試合に連れて行ってくれる限り、私は本を書き続けるでしょう。

私にインスピレーションと知識を与えてくれた Rubyist の方々にも感謝したいと思います： David Heinemeier Hansson, Yehuda Katz, Carl Lerche, Jeremy Kemper, Xavier Noria, Ryan Bates, Geoffrey Grosenbach, Peter Cooper, Matt Aimonetti, Mark Bates, Gregg Pollack, Wayne E. Seguin, Amy Hoy, Dave Chelimsky, Pat Maddox, Tom Preston-Werner, Chris Wanstrath, Chad Fowler, Josh Susser, Obie Fernandez, Ian McFarland, Steven Bristol, Pratik Naik, Sarah Mei, Sarah Allen, Wolfram Arnold, Alex Chaffee, Giles Bowkett, Evan Dorn, Long Nguyen, James Lindenbaum, Adam Wiggins, Tikhon Bernstam, Ron Evans, Wyatt Greene, Miles Forrest, Sandi Metz, Ryan Davis, Aaron Patterson, Pivotal Labs の方々、Heroku の方々、thoughtbot の方々、そして GitHub の方々、ありがとうございました。最後に、ここに書ききれないほど多くの読者からバグ報告や提案を頂きました。ご協力いただいた皆様のおかげで、本書の完成度をとことんまで高めることができました。

丁寧なレビュー、技術的なフィードバック、そして役立つ提案をしてくれた Andrew Thai に感謝します。また、Learn Enough to Be Dangerous の共同創業者である Nick Merwin と Lee Donahoe、日々のチュートリアルの制作をサポートしてくれてありがとう。

最後に、たくさんの読者の皆さん、そして、ここに挙げきれないほど多いコントリビューターのみんな、バグ報告や提案をしてくれてありがとう。彼ら/彼女らの多くの手助けに、最高の感謝を。


## 著者
マイケル・ハートル（Michael Hartl） はRuby on Rails Tutorial という、Web 開発を学ぶときによく参考にされる本の著者です。 また、Learn Enough to Be Dangerous（learnenough.com）教育系ウェブサイトの創業者でもあります。 以前は、（今ではすっかり古くなってしまいましたが）「RailsSpace」という本の執筆および開発に携わったり、また、 一時人気を博した Ruby on Rails ベースのSNSプラットフォーム「Insoshi」の開発にも携わっていました。 2011年には、Rails コミュニティへの高い貢献が認められて、Ruby Hero Award を受賞しました。

ハーバード大学卒業後、カリフォルニア工科大学で物理学博士号を取得。シリコンバレーの有名な起業プログラム Y Combinator の卒業生でもあります。


## 著作権とライセンス
Ruby on Rails チュートリアル: 実例を使って Rails を学ぼう Copyright © 2016 by Michael Hartl（最終更新日: 2020/05/10 08:37:52 PT）

Ruby on Rails チュートリアルで掲載しているすべてのソースコードは、MIT ライセンスおよびBeerware ライセンスの元で提供されています。（訳注: MITライセンスの利用方法については @y_catch さんの記事「MITライセンスが適用されたコードを利用するには 」をご参照ください）

（注: 「すべてのソースコード」とは、Railsチュートリアル内で題材としている「Railsアプリケーションのソースコード」を指します。「Railsチュートリアル」という教材は上記ライセンスで提供されていないのでご注意ください。商用でRailsチュートリアルをご利用する場合はお問い合わせページからご連絡ください。）


```
The MIT License

Copyright (c) 2016 Michael Hartl

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR
A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR
ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.
```

```
THE BEERWARE LICENSE (Revision 42)

Michael Hartl wrote this code. As long as you retain
this notice you can do whatever you want with this stuff.
If we meet some day, and you think this stuff is worth it,
you can buy me a beer in return.
```


## 第1章 ゼロからデプロイまで

Railsチュートリアルへようこそ！

本チュートリアルの目的は、皆さんにWebサービス開発で必要になる基礎知識を学んでもらうことです。本チュートリアルで学んだことは、Webサービス開発者としての仕事を探したり、フリーランスとしてのキャリアを始めたり、自分のWebサービスで起業する場面などで役立ちます。既に開発の経験があれば、より短期間でWebサービス開発の流れを掴めるでしょう。

Railsチュートリアルでは汎用性の高いスキルの習得を優先しています。今後他のプログラミング言語やフレームワークも学ぶ予定の人にとっても、ここで学んだWebサービス開発の基本が役立つように仕上げています。

本チュートリアルでは『Ruby on Rails』を題材にしています。これはWebサービス開発の基本を学ぶ上で、これ以上ふさわしいフレームワークは無いと考えているからです。


## 1.1 前提知識

本チュートリアルはプログラミング言語Rubyとコマンドラインに、HTMLとCSS、そして若干のJavaScriptとSQLを含めた総合的なプロダクト開発のチュートリアルです。前提条件は特にありませんが、プログラミングの学習経験があると良いです。

プログラミング経験が全くない方向けにも、初心者向けプログラミング学習サービス「Progate」と提携し、Webの基礎知識を学べるコースも用意しています。同サービスは環境構築不要かつブラウザ上でコーディング体験ができるため、特にプログラミング未経験者にオススメです。このまま本チュートリアルを読み進めても大丈夫ですが、もし「難しい」と感じたら、下記コースまたはWeb開発パス（Ruby on Rails）で基本を押さえましょう。
