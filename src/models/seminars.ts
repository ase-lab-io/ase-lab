export type StatusType = 'wanted' | 'preparing' | 'in-progress' | 'finished';

export const STATUS: {
  [key in StatusType]: string;
} = {
  wanted: '募集中',
  preparing: '準備中',
  'in-progress': '進行中',
  finished: '終了済',
} as const;

export type StyleType = 'zoom' | 'hybrid' | 'face-to-face';

export const STYLE: {
  [key in StyleType]: string;
} = {
  zoom: 'オンライン（Zoom）',
  hybrid: 'ハイブリッド',
  'face-to-face': '対面',
} as const;

export interface ISeminar {
  name: string;
  description?: string;
  status: keyof typeof STATUS;
  url: string;
  span: string;
  style: keyof typeof STYLE;
}

export const seminars: ISeminar[] = [
  {
    name: 'CanSatゼミ',
    description:
      " 宇宙技術の教育を目的として始まったCanSat競技ですが、宇宙開発をするにあたって最も重要なことを学ぶことの出来る場だと認識しています。また、チームで宇宙開発をする時には｢構造｣、｢回路｣、｢プログラミング｣など系に分かれた開発を行うことが多いと思いますが、この本では全ての系について基本を理解することができます！何でもできるようになりたい！というアツい方は特に飛び込んで見て欲しいです！",
    status: 'wanted',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHemaPwNiQ7bEQu6z_VywbmiyExFgTl08Pg&usqp=CAU',
    span: '9月上旬頃～',
    style: 'zoom(宿題多め？)',
  },
  {
    name: '電磁気学入門',
    description:
      "電磁気学入門ということで、大学で電磁気学をまだ履修してない方でも参加できるような内容にしたいと考えています。ベクトル解析などの電磁気学で使用する数学の勉強から入ろうと思っているので、初学者の方でも気軽に参加していただけると嬉しいです！！",
    status: 'wanted',
    url: 'https://twitter.com/ASE_lab_/status/1557705893545799682/photo/1',
    span: '8月下旬～',
    style: 'zoom',
  },
  {
    name: '電子回路設計',
    description:
      "ものの設計における電子回路とは、動かすためのプログラムと実際に動く構造系の架け橋になる重要な分野です。制作をされている方はもちろんそうでない方も大歓迎です！",
    status: 'wanted',
    url: 'https://images-na.ssl-images-amazon.com/images/I/71dO80D6gcL.jpg',
    span: '8月下旬～',
    style: 'zoom',
  },
  {
    name: '宇宙ビジネス',
    description:
      "宇宙ビジネスに興味はあるが、自分で時間を作ってそれらを追うのは難しいという方も週に1度ゼミで時間をとって仲間とニュース記事を読みませんか？また、普段から宇宙関連のニュース記事を読んでいて、仲間と記事の背景等を洞察して議論したいという方も大歓迎です。",
    status: 'wanted',
    url: 'https://twitter.com/ASE_lab_/status/1554804273749250049/photo/1',
    span: '8月下旬～',
    style: 'zoom(一部対面も併用)',
  },
  {
    name: '宇宙法 入門',
    description:
      "教材を中心に宇宙法の理解を深めます。また、今後自分たちで学習を進めるための足がかりとなるゼミ内容にしたいです。予備知識の有無は問いませんので、宇宙法が少しでも気になっていたら、ぜひ、ご参加を！",
    status: 'in-progress',
    url: 'https://images-na.ssl-images-amazon.com/images/I/81QQOTHOiSL.jpg',
    span: '8月中旬～',
    style: 'zoom',
  },  
  {
    name: '天文検定',
    description:
      '天文宇宙検定の対策をする予定です。星空宇宙天文検定(星検)も視野に入れています！事前知識は不要で、検定を受ける受けないも自由です。 天文系の検定、一緒にチャレンジしませんか？興味のある方はぜひ！',
    status: 'in-progress',
    url: '/img/seminars/tenmon-uchu-kentei.webp',
    span: '調整中',
    style: 'zoom',
  },
  {
    name: '宇宙の物理',
    description:
      'このゼミでは、地球に最も近い恒星、太陽から、ブラックホールや遠方の銀河まで、宇宙に浮かぶ様々な天体や現象について数式や物理を用いて学習していきます。天文学の基礎となる様々な法則や理論を自分たちの手で分析することで、天文学というものの理解を深めていきましょう。',
    status: 'in-progress',
    url: 'https://images-na.ssl-images-amazon.com/images/I/81XAjp79rRL.jpg',
    span: '1月~',
    style: 'hybrid',
  },
  {
    name: '軌道力学2nd',
    description:
      '皆さんお待ちかね、軌道力学2周目がいよいよ始まります。まず写真の本を買ってみましょう。とにかく面白いです。書いてある内容は複雑で面白いのに、使っている数学のハードルが低いので、とても理解しやすい！この良書を使って、授業・ディスカッション・質問タイムなどを通して基礎の基礎から軌道力学を学んでいきます。軌道力学は私も初心者なので恐れることなかれ。ゆくゆくは、皆さん、軌道計算マスターになることでしょう。',
    status: 'in-progress',
    url: '/img/seminars/kidorikigaku2.webp',
    span: '4月~7月',
    style: 'zoom',
  },
  {
    name: '流体力学',
    description:
      '宇宙工学に絡む流体力学に関して、めちゃめちゃ範囲が広いです。ぶっちゃけ、最初の基礎のとことか理解してなくてもCFDは扱えます。なので、基礎からやりたい人も、CFDのシミュレーションだけやりたい人でも参加できるようにします！ 前半は、基礎と圧縮性流体を扱い、後半はCFD使いながら解析していこうと思っていて、こちらはCAD講座と連携して、CADで作ったものを解析することにする予定です。',
    status: 'in-progress',
    url: 'https://shop38-makeshop.akamaized.net/shopimages/jsmebooks/0000000000352.jpg',
    span: '4月中旬~',
    style: 'zoom',
  },
  {
    name: '宇宙システム入門',
    description:
      '使う教材が宇宙システムの初学者対象らしいので、内容は入門者向けになる気がします！（復習したい方もどうぞ！） 多分、間にテスト期間も挟むので、うまく調整しながら頑張りましょう！',
    status: 'in-progress',
    url: 'https://images-na.ssl-images-amazon.com/images/I/41F1M118NXL._SX337_BO1,204,203,200_.jpg',
    span: '4月中旬~',
    style: 'zoom',
  },
  {
    name: '画像処理2nd',
    description:
      '皆さんお待ちかね、画像処理ゼミ2周目です。楽しく勉強しましょう。',
    status: 'preparing',
    url: 'https://images-na.ssl-images-amazon.com/images/I/41FCF736uWL._SX352_BO1,204,203,200_.jpg',
    span: '未定',
    style: 'zoom',
  },
  {
    name: '天文学',
    description:
      '隔週ずつのゼミとなります。2週間の2コマのうち、チャンネルでのアンケートで関心が深い方の内容をピックアップしてお届けします。内容によってはディスカッションや調査などを行い、積極的な学びの場を作っていきたいと思っています。 まだゼミに参加できていないという方も予習なしで気楽に参加できるゼミとなっています！どうぞご参加ください！ ',
    status: 'finished',
    url: '/img/seminars/astronomy.webp',
    span: '4月下旬~',
    style: 'zoom',
  },
  {
    name: '衛星データ解析',
    status: 'finished',
    url: 'https://www.tellusxdp.com/cmn/img/ogp.jpg',
    span: '4月下旬~',
    style: 'zoom',
  },
  {
    name: '宇宙工学入門 -[体験版]-',
    description:
      '宇宙工学入門ゼミから3回分を抜粋した体験版です！',
    status: 'finished',
    url: 'https://images-na.ssl-images-amazon.com/images/I/51rZrV0V8IL._SX357_BO1,204,203,200_.jpg',
    span: '6月中旬~',
    style: 'zoom',
  },
  {
    name: '軌道力学',
    description:
      '円錐曲線の運動から、軌道遷移、簡単なランベルト問題、スイングバイなどまでの基本的な運動を扱うことを一緒に頑張ってくれるメンバーを募集します！',
    status: 'finished',
    url: 'https://www.nippyo.co.jp/shop/img/books/temp/07557.jpg',
    span: '1月~3月',
    style: 'hybrid',
  },
  {
    name: '画像処理',
    description:
      '画像処理はあらゆる理工系分野において使われる技術であって、この本はその最初の基礎固めによく読まれる本です。楽しく勉強することができればいいなと思っています。',
    status: 'finished',
    url: 'https://images-na.ssl-images-amazon.com/images/I/41FCF736uWL._SX352_BO1,204,203,200_.jpg',
    span: '1月~4月',
    style: 'zoom',
  },
  {
    name: '物理数学',
    description:
      'もう履修済みの内容も直観的な理解がなければ、いつか忘れてしまいます。しかし、数式や法則を直観的に捉えることができれば、常識として認識できるため、体に染みつけることができます。早いうちに完全な理解と知識の構築を行い、次の学年に生かしていきましょう。',
    status: 'finished',
    url: 'https://images-na.ssl-images-amazon.com/images/I/51oYFb4Ri4L._SX321_BO1,204,203,200_.jpg',
    span: '12月~5月',
    style: 'hybrid',
  },
  {
    name: 'space-english',
    description:
      "It may sometimes be specialized, but you can think of it as an opportunity to speak English! Everyone's welcome! I am looking forward to your participation!",
    status: 'finished',
    url: 'https://image.freepik.com/free-vector/colorful-galaxy-background-with-astronaut_52683-307.jpg',
    span: 'April ~June',
    style: 'zoom',
  },
  {
    name: '宇宙工学入門',
    description:
      '初学者向けの教材を使い，宇宙空間からロケット・衛星について幅広く学んでいきます！幅広い分野の入門的内容を扱っていく予定です．',
    status: 'finished',
    url: 'https://images-na.ssl-images-amazon.com/images/I/51rZrV0V8IL._SX357_BO1,204,203,200_.jpg',
    span: '4月中旬~',
    style: 'zoom',
  },
  {
    name: 'ゼロから始めるCAD',
    description:
      '前半は簡単な操作の説明や製作など、後半はロケットエンジンなど自分が興味あるものを作製、オプションでCFD(数値流体力学)を用いた解析をします。ゼロから始めるので好きなタイミングで参加していただいて大丈夫です！',
    status: 'finished',
    url: '/img/seminars/zerocad.webp',
    span: '4月中旬~6月',
    style: 'zoom',
  },
];
