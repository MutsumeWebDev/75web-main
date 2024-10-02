const slider = document.querySelector('#slider');

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
    },
];

for (let i = 0; i < dataset.length; i++){
    const {title, img, url} = dataset[i];
    const content = `<li class="c-archive-item">
                      <a href="/s/official/page/2nd_album?ima=0000" target="">
                        <div class="c-archive-item__thumb">
                          <img alt="2nd Album「脈打つ感情」SPECIAL SITE" src="${img}">
                        </div>
                        <div class="c-archive-item__name">${title}</div>
                      </a>
                    </li>`;
    slider.insertAdjacentHTML('beforeend', content);
}   

//header
const header = document.querySelector('#header');
const scrollAmount = scrollY;
if(scrollAmount > 150){
    header.classList.add("scrolled");
}
else{
    header.classList.remove("scrolled");
}

//menubar
const menuOpen = document.querySelector('#menu_open');
menuOpen.addEventListener('click', () => {
    menuOpen.classList.add(menu_on);
});

//footer
const footer = document.querySelector('#footer');

const dataset_footer = [
    {
        title: '',
        url: '',
    },
];

// for (let i = 0; i < dataset_footer.length; i++){
//     const {title, img, url} = dataset[i];
//     const content = `<div class="footere__content"><a href="${url}"><img src="${img}" alt="${title}"><h2>${title}</h2></a></div>`;
//     slider.insertAdjacentHTML('beforeend', content);
// }
