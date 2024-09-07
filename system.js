const slider = document.querySelector('#slider');

const dataset = [
    {
        title: 'テーマ',
        img: 'character_mutsumechan.png',
        url: '',
    },
    {
        title: '乃紫さんライブ',
        img: 'character_mutsumechan.png',
        url: '',
    },
    {
        title: '梶裕貴さんトークショー',
        img: 'character_mutsumechan.png',
        url: '',
    },
    {
        title: 'ホームカミングデー',
        img: 'character_mutsumechan.png',
        url: '',
    },
];
for (let i = 0; i < dataset.length; i++){
    const {title, img, url} = dataset[i];
    const content = `<div class="slider${i}"><a href="${url}"><img src="${img}" alt="${title}"><h2>${title}</h2></a></div>`;
    slider.insertAdjacentHTML('beforeend', content);
}

//header & menubar
const header = document.querySelector('#header');