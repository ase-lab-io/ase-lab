import { $t } from 'src/boot/i18n';
export interface IArticleProps {
  img: string;
  title: string;
  bodyDigest: string;
  date: string;
  url: string;
}

export const articles: IArticleProps[] = [
  {
    img: '/img/laughing_max.webp',
    title: $t('articles.person1.title'),
    bodyDigest: $t('articles.person1.digest'),
    date: '2022/04/23',
    url: 'https://note.com/ase_lab_/n/nb899b1739d39',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/80067536/rectangle_large_type_2_fe2fcccac357a2fbe53ca3aa8183e129.jpeg',
    title: $t('articles.person2.title'),
    bodyDigest: $t('articles.person2.digest'),
    date: '2022/06/05',
    url: 'https://note.com/ase_lab_/n/nd873fcb66048',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/82287733/rectangle_large_type_2_0ff0e012818c4ca826bbd090d4f2355d.jpeg',
    title: $t('articles.person3.title'),
    bodyDigest: $t('articles.person3.digest'),
    date: '2022/07/09',
    url: 'https://note.com/ase_lab_/n/nb85dc1be333f',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/86050214/rectangle_large_type_2_bd20eea8c3cdf1920ae5fa8034f5e80a.jpeg',
    title: $t('articles.person4.title'),
    bodyDigest: $t('articles.person4.digest'),
    date: '2022/09/03',
    url: 'https://note.com/ase_lab_/n/n257e02a41d76',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/91650285/rectangle_large_type_2_5bc8804c6cc339be7f0066147f95f3d1.png',
    title: $t('articles.person5.title'),
    bodyDigest: $t('articles.person5.digest'),
    date: '2022/10/09',
    url: 'https://note.com/ase_lab_/n/n2f0c02416e3e',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/90685888/rectangle_large_type_2_49767739b162c9a3458f0f084623e60d.jpeg',
    title: '〜地方メンバーの声〜#5（濵田莉来さん編）〜',
    bodyDigest:
      '大学二年生の濵田莉来と申します。岐阜大学の工学部、電気電子・情報工学科、応用物理コースに通っています。理学と工学の中間みたいな内容を勉強していて、電気電子コースなので電気回路...',
    date: '2022/11/10',
    url: 'https://note.com/ase_lab_/n/nc83a6bb0a31d',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/91860062/rectangle_large_type_2_725b7582c151bdc4d92d2b2aa541eb1a.jpeg',
    title:
      '【宇宙ビジネス×大学生】インターン生って何するの？　#1 ～輸送システム編～',
    bodyDigest:
      '阿部：それでは早速、皆さんがインターンを始めたきっかけとか、インターンでの経験とか、将来どうしていきたいかとか、宇宙開発に対する期待や思いを聞いていきたいと思います。 では、...',
    date: '2022/11/24',
    url: 'https://note.com/ase_lab_/n/n25b330c5ff46',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/93835557/rectangle_large_type_2_715c2a5daefb1ee101653f678547b6a5.jpeg',
    title: '〜地方メンバーの声　#6(塩田恭平君編)〜',
    bodyDigest:
      '九州大学工学部の量子物理工学科[1]というところに所属してます、学部二年の塩田恭平と申します。大学で勉強していることについてですが、自分たちの大学は二年の後期から学科...',
    date: '2022/12/23',
    url: 'https://note.com/ase_lab_/n/n5937a4acb783',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/97683299/rectangle_large_type_2_2c2e163bb20d20d330c1e9c56f84270c.png',
    title: '団体創設一周年記念企画！　団体創設秘話　〜前編〜',
    bodyDigest:
      '海外や全国各地から宇宙好きメンバーが集うASE-Lab.。団体は先月の12日に無事一周年を迎えることができました！！そこで今回は、団体一周年を記念して特別企画！題して、「団体創立秘話」です！！！...',
    date: '2023/02/12',
    url: 'https://note.com/ase_lab_/n/ne64cc4cd347d',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/98340947/rectangle_large_type_2_2dd63c9ff076a571ae8ee57c6121e3cd.png',
    title: '団体創設一周年記念企画！　団体創設秘話　〜後編〜',
    bodyDigest:
      'そうだね。それで本田とかに、「あべま宇宙系のサークル入ってるんだから、そこの友達とか誘えば、来るんじゃない？」って言われて。今まではみんなで一緒のテーマに取り組んでいたけど、...',
    date: '2023/02/19',
    url: 'https://note.com/ase_lab_/n/neeaabf82815f',
  },
  {
    img: 'https://assets.st-note.com/production/uploads/images/98902924/rectangle_large_type_2_91cbc9605e039b2c4e0b7c49d96db32d.png',
    title: '～代表の声　#8 (阿部舞哉君編)～',
    bodyDigest:
      '早稲田大学基幹理工学部機械科学・航空宇宙学科2年の阿部舞哉です。今は機械工学に近いことをやっています。学部2年で専門科目に入ったばっかりなので、基本的には四力（流体力学、...',
    date: '2023/02/27',
    url: 'https://note.com/ase_lab_/n/nc91544ce6673',
  },
];
