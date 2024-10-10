const support = document.querySelector('#support');

const dataset = [
    {
        title: 'テーマ',
        img: 'img0-1.jpg',
        url: '',
    },
    {
        title: '乃紫さんライブ',
        img: 'img0-1.jpg',
        url: 'slider_noa.html',
    },
    {
        title: '梶裕貴さんトークショー',
        img: 'img0-2.jpg',
        url: 'slider_talkshow.html',
    },
    {
        title: 'ホームカミングデー',
        img: 'img0-1.jpg',
        url: '',
    }
];
for (let i = 0; i < dataset.length; i++){
    const {title, img, url} = dataset[i];
    const content = `<li class="support__ad"><a href="${url}"><img class="ad__img" href="${img}" alt="${title}"></li>`;
    support.insertAdjacentHTML('beforeend', content);
} 