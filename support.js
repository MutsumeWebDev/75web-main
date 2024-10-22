const support = document.querySelector('#support');

const dataset_support = [
    {
        title: '株式会社タムロン',
        img: '株式会社タムロン_img.png',
        url: '',
    },
    {
        title: '株式会社コミュニティコム',
        img: '株式会社コミュニティコム_img.png',
        url: 'https://office7f.com/',
    },
    {
        title: '楽笑',
        img: '楽笑_左_img.png',
        url: '',
    },
    {
        title: '楽笑',
        img: '楽笑_右_img.png',
        url: '',
    },
    {
        title: '毎日コムネット',
        img: '毎日コムネット_img.png',
        url: '',
    },
    {
        title: '株式会社エコス',
        img: '株式会社エコス_img.png',
        url: 'https://www.eco-s.co.jp/recruit/new/',
    },
    {
        title: '株式会社オリジン',
        img: '株式会社オリジン_img.png',
        url: '',
    },
    {
        title: '株式会社エンプラス',
        img: '株式会社エンプラス_img.png',
        url: '',
    },
    {
        title: '理想科学工業株式会社',
        img: '理想科学工業株式会社_img.png',
        url: '',
    },
    {
        title: 'アンモータースクール',
        img: 'アンモータースクール_img.png',
        url: '',
    },
    {
        title: '日本自動機構株式会社',
        img: '日本自動機構株式会社_img.png',
        url: '',
    },
    {
        title: '株式会社アップル',
        img: '株式会社アップル_img.png',
        url: '',
    },
    {
        title: '舟和本店浦和工場',
        img: '舟和本店浦和工場_img.png',
        url: '',
    },
    {
        title: 'ことわざ検定協会',
        img: 'ことわざ検定協会_img.png',
        url: '',
    },
    {
        title: 'ロヂャース',
        img: 'ロジャース_img.png',
        url: '',
    },
    {
        title: '株式会社高脇基礎工事',
        img: '株式会社高脇基礎工事_img.png',
        url: '',
    },
    {
        title: '埼玉りそな銀行',
        img: '埼玉りそな銀行_img.png',
        url: '',
    },
    {
        title: '株式会社カールシステムズ',
        img: '株式会社カールシステムズ_img.png',
        url: 'https://quart.jp/pcsetup.pdf',
    },
    {
        title: '埼大通りどうぶつ病院',
        img: '埼大通りどうぶつ病院_img.png',
        url: 'https://www.saidaidori-ah.jp/',
    },
    {
        title: '資格の大原',
        img: '資格の大原_img.png',
        url: '',
    },
    {
        title: '松栄庵',
        img: '松栄庵_img.png',
        url: '',
    },
    {
        title: '株式会社アストライズ(つけ麺処辻もと)',
        img: '株式会社アストライズ_img.png',
        url: 'https://www.instagram.com/mentsujimoto/',
    },
    {
        title: '松永皮膚科・内科',
        img: '松永皮フ科内科_img.png',
        url: '',
    },
    {
        title: 'セブンイレブン埼玉下大久保',
        img: 'セブンイレブンさいたま下大久保店_img.png',
        url: '',
    },
    {
        title: '',
        img: '',
        url: '',
    },
];
for (let i = 0; i < dataset_support.length; i++){
    const {title, img, url} = dataset_support[i];
    console.log("div");
    const content = `<a class ="support__ad" href="${url}"><img class="ad__img" src="img/広告データ/${title}/${img}" alt="${title}"></a>`;
    support.insertAdjacentHTML('beforeend', content);
} 