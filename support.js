const support = document.querySelector('#support');

const dataset_support = [
    {
        title: 'tamron',
        img: 'tamron_img.png',
        url: '',
    },
    {
        title: 'community.com',
        img: 'communitydotcom_img.png',
        url: 'https://office7f.com/',
    },
    {
        title: 'rakusyou',
        img: 'rakusyou_left_img.png',
        url: '',
    },
    {
        title: 'rakusyou',
        img: 'rakusyou_right_img.png',
        url: '',
    },
    {
        title: 'mainishikomunetto',
        img: 'mainishikomunetto_img.png',
        url: '',
    },
    {
        title: 'mynavi',
        img: 'mynavi_img.png',
        url: '',
    },
    {
        title: 'ecos',
        img: 'ecos_img.png',
        url: 'https://www.eco-s.co.jp/recruit/new/',
    },
    {
        title: 'orgin',
        img: 'orgin_img.png',
        url: '',
    },
    {
        title: 'sunrize',
        img: 'sunrize_img.png',
        url: '',
    },
    {
        title: 'urawa',
        img: 'urawa_img.png',
        url: '',
    },
    {
        title: 'shikakunooohara',
        img: 'shikakunooohara_img.png',
        url: '',
    },
    {
        title: 'risoukagakukougyou',
        img: 'risoukagakukougyou_img.png',
        url: '',
    },
    {
        title: 'annmortorschool',
        img: 'annmortorschool_img.png',
        url: '',
    },
    {
        title: 'nihonnjidousyakikou',
        img: 'nihonnjidousyakikou_img.png',
        url: '',
    },
    {
        title: 'apple',
        img: 'apple_img.png',
        url: '',
    },
    {
        title: 'funawahonntenn',
        img: 'funawahonntenn_img.png',
        url: '',
    },
    {
        title: 'katayama',
        img: 'katayama_img.png',
        url: '',
    },
    {
        title: 'interart',
        img: 'interart_img.png',
        url: '',
    },
    {
        title: 'collegeyard',
        img: 'collegeyard_img.png',
        url: '',
    },
    {
        title: 'kotowaza',
        img: 'kotowaza_img.png',
        url: '',
    },
    {
        title: 'rojers',
        img: 'rojers_img.png',
        url: '',
    },
    {
        title: 'enplus',
        img: 'enplus_img.png',
        url: '',
    },
    {
        title: 'takawakikisokouji',
        img: 'takawakikisokouji_img.png',
        url: '',
    },
    {
        title: 'saitamarisonabank',
        img: 'saitamarisonabank_img.png',
        url: '',
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
        url: '',
    },
    {
        title: 'tsujimoto',
        img: 'tsujimoto_img.png',
        url: 'https://www.instagram.com/mentsujimoto/',
    },
    {
        title: 'matsunagahifuka',
        img: 'matsunagahifuka_img.png',
        url: '',
    },
    {
        title: '7-11',
        img: '7-11_img.png',
        url: '',
    },
    {
        title: 'enomoto',
        img: 'enomoto_img.png',
        url: '',
    },
    // {
    //     title: '',
    //     img: '',
    //     url: '',
    // },
];
for (let i = 0; i < dataset_support.length; i++){
    const {title, img, url} = dataset_support[i];
    const content = `<a class ="support__ad" href="${url}"><img class="ad__img" src="img/ad_data/${title}/${img}" alt="${title}"></a>`;
    support.insertAdjacentHTML('beforeend', content);
} 