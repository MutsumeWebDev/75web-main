const slider = document.querySelector('#slider');

const dataset = [
    {
        title: 'むつめ祭ライブ【乃紫さん】',
        img: 'img0-1.jpg',
        url: 'slider_noa.html',
    },
    {
        title: 'むつめ祭トークショー【梶裕貴さん】',
        img: 'img0-2.jpg',
        url: 'slider_talkshow.html',
    },
    {
        title: '埼玉大学ホームカミングデー',
        img: 'HCD.png',
        url: 'HCD.html',
    },
];

for (let i = 0; i < dataset.length; i++){
    const {title, img, url} = dataset[i];
    const content = `<li class="c-archive-item">
                      <a href="${url}" target="">
                        <div class="c-archive-item__thumb">
                          <img alt="${title}" src="img/pageimg/${img}" loading="lazy", decoding="async">
                        </div>
                        <div class="c-archive-item__name">${title}</div>
                      </a>
                    </li>`;
    slider.insertAdjacentHTML('beforeend', content);
}   

//header
const headerAnimation = () =>{
    const header = document.querySelector('#header');
    const scrollAmount = scrollY;
    const viewHeight = document.documentElement.clientHeight;

    if(scrollAmount > viewHeight/3){
        header.classList.add("header__float");
    }
    else{
        header.classList.remove("header__float");
    }
}
window.addEventListener('scroll', headerAnimation);


// for (let i = 0; i < dataset_footer.length; i++){
//     const {title, img, url} = dataset[i];
//     const content = `<div class="footere__content"><a href="${url}"><img src="${img}" alt="${title}"><h2>${title}</h2></a></div>`;
//     slider.insertAdjacentHTML('beforeend', content);
// }
