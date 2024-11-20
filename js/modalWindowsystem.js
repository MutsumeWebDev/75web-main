const dataset_num = [540,570,562,600,21,102,130,1301,549,2,120,5,518,518,24,114,111,3,534,5341,12,1,512,147,586,584,
    502,541,5412,6,101,1011,546,5461,516,511,515,598,585,4,554,101,572,101,122,599,608,17,561,513,14,510,29,567,556,103,18,537,610,
    519,119,20,576,509,28,602,
    // 701,702,703,704,705,706,707,708,
    1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010,
    1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020,
    1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030,
    1031, 1032, 1033, 1034,
    13,16,550,131,159,514,566,559,571,5711,564,569,501,113,156,136,583,538,575,539,11,15,582,529,509,505,19,157,551,
    25,577,5771,26,579,521,5211,148,7,167,506,530,8,155,506,31,22,
    567,20,155,101,21,511,25,23,582,16,24,13,151,101,14,17,5,];
var openmodal = {};
var modal = {};
var closemodal = {};
console.log(dataset_num)
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
