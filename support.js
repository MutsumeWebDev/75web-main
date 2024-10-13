const support = document.querySelector('#support');

const dataset = [
    {
        title: 'テーマ',
        img: 'img0-1.jpg',
        url: '',
    },
];
for (let i = 0; i < dataset.length; i++){
    const {title, img, url} = dataset[i];
    const content = `<li class="support__ad"><a href="${url}"><img class="ad__img" href="${img}" alt="${title}"></li>`;
    support.insertAdjacentHTML('beforeend', content);
} 