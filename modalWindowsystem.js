const dataset_num = [570,562,600,21,102,130,1301,549,2,120,518,518,24,114,111,3,534,5341,12,1,512,147,586,584,
    502,541,5412,6,101,1011,546,5461,516,515,598,585,4,554,101,572,101,122,599,608,17,561,513,14,510,29,567,556,103,18,537,610,
    519,119,20,576,509,131,159,559,571,5711,569,113,156,136,583,538,575,539,11,15,582,540,529,509,505,19,157,551,
    25,577,5771,26,579,521,5211,148,7,167,506,530,8,155,506,31,22,
    567,514,546,514,113,20,155,101,21,511,25,23,
    582,16,24,13,151,101,14,17,5,];
var openmodal = {};
var modal = {};
var closemodal = {};
const mask = document.querySelector('#mask');
const showKeyframes = {
    opacity: [0, 1],
    visibility: 'visible',
  };
  const hideKeyframes = {
    opacity: [1, 0],
    visibility: 'hidden',
  };
  const options = {
    duration: 800,
    easing: 'ease',
    fill: 'forwards',
  };


for (let i = 0; i < dataset_num.length; i++){
    let openmodal = document.querySelector('#open' + dataset_num[i]);
    let modal = document.querySelector('#modal' + dataset_num[i]);
    let closemodal = document.querySelector('#close' + dataset_num[i]);
    // モーダルウィンドウを開く
    openmodal.addEventListener('click', () => {
        modal.animate(showKeyframes, options);
        mask.animate(showKeyframes, options);
    });
  
  // モーダルウィンドウを閉じる
    closemodal.addEventListener('click', () => {
        modal.animate(hideKeyframes, options);
        mask.animate(hideKeyframes, options);
    });

    // マスクをクリックしてモーダルウィンドウを閉じる
    mask.addEventListener('click', () => {
        closemodal.click();
    });
};
