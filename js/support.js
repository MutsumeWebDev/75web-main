const support = document.querySelector('#support');

const dataset_support = [
    {
        title: 'tamron',
        img: 'tamron_img.png',
        url: null,
    },
    {
        title: 'community.com',
        img: 'communitydotcom_img.png',
        url: 'https://office7f.com/',
    },
    {
        title: 'rakusyou',
        img: 'rakusyou_left_img.png',
        url: null,
    },
    {
        title: 'rakusyou',
        img: 'rakusyou_right_img.png',
        url: null,
    },
    {
        title: 'mainishikomunetto',
        img: 'mainishikomunetto_img.png',
        url: null,
    },
    {
        title: 'mynavi',
        img: 'mynavi_img.png',
        url: null,
    },
    {
        title: 'ecos',
        img: 'ecos_img.png',
        url: 'https://www.eco-s.co.jp/recruit/new/',
    },
    {
        title: 'orgin',
        img: 'orgin_img.png',
        url: null,
    },
    {
        title: 'sunrize',
        img: 'sunrize_img.png',
        url: 'https://www.p-world.co.jp/saitama/sunrise.htm',
    },
    {
        title: 'urawa',
        img: 'urawa_img.png',
        url: null,
    },
    {
        title: 'shikakunooohara',
        img: 'shikakunooohara_img.png',
        url: null,
    },
    {
        title: 'risoukagakukougyou',
        img: 'risoukagakukougyou_img.png',
        url: 'https://mypage.3030.i-webs.jp/riso2026/applicant/login/baitai-entry/entrycd/MTM',
    },
    {
        title: 'annmortorschool',
        img: 'annmortorschool_img.png',
        url: null,
    },
    {
        title: 'nihonnjidousyakikou',
        img: 'nihonnjidousyakikou_img.png',
        url: null,
    },
    {
        title: 'apple',
        img: 'apple_img.png',
        url: 'https://www.apamanshop.com/sp/shop/11002402/',
    },
    {
        title: 'funawahonntenn',
        img: 'funawahonntenn_img.png',
        url: null,
    },
    {
        title: 'katayama',
        img: 'katayama_img.png',
        url: null,
    },
    {
        title: 'interart',
        img: 'interart_img.png',
        url: null,
    },
    {
        title: 'collegeyard',
        img: 'collegeyard_img.png',
        url: null,
    },
    {
        title: 'kotowaza',
        img: 'kotowaza_img.png',
        url: null,
    },
    {
        title: 'rojers',
        img: 'rojers_img.png',
        url: 'https://www.rogers.co.jp/',
    },
    {
        title: 'enplus',
        img: 'enplus_img.png',
        url: 'https://recruit.enplas.co.jp/',
    },
    {
        title: 'takawakikisokouji',
        img: 'takawakikisokouji_img.png',
        url: 'https://www.takawaki.co.jp/',
    },
    {
        title: 'saitamarisonabank',
        img: 'saitamarisonabank_img.png',
        url: null,
    },
    {
        title: 'qurlsystems',
        img: 'qurlsystems_img.png',
        url: 'https://quart.jp/pcsetup.pdf',
    },
    {
        title: 'saidaidoorianimalhospital',
        img: 'saidaidoorianimalhospital_img.png',
        url: 'https://www.saidaidori-ah.jp/',
    },
    {
        title: 'syoeiann',
        img: 'syoeiann_img.png',
        url: null,
    },
    {
        title: 'tsujimoto',
        img: 'tsujimoto_img.png',
        url: 'https://www.instagram.com/mentsujimoto/',
    },
    {
        title: 'matsunagahifuka',
        img: 'matsunagahifuka_img.png',
        url: null,
    },
    {
        title: '7-11',
        img: '7-11_img.png',
        url: null,
    },
    {
        title: 'enomoto',
        img: 'enomoto_img.png',
        url: null,
    },
    // {
    //     title: null,
    //     img: null,
    //     url: null,
    // },
];
let content_support;
for (let i = 0; i < dataset_support.length; i++){
    const {title, img, url} = dataset_support[i];
    if(url !== null){    
        content_support = `<a class ="support__ad" href="${url}"><img class="ad__img" src="img/ad_data/${title}/${img}" alt="${title}"></a>`
    }
    else{
        content_support = `<div class="support__ad"><img class="ad__img" src="img/ad_data/${title}/${img}" alt="${title}"></div>`
    }
    support.insertAdjacentHTML('beforeend', content_support);
}

