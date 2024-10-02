// $('#slider').slick({
//   autoplay: true,//自動的に動き出すか。初期値はfalse。
//   infinite: true,//スライドをループさせるかどうか
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
//   nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
//   dots: false,//下部ドットナビゲーションの表示
// });
$(function () {
  $("#slider").slick({
    arrows: false,
    autoplay: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "7%",
    dots: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 900, // 399px以下のサイズに適用
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});