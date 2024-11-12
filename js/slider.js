$(function () {
  $("#slider").slick({
    arrows: false,
    autoplay: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "10%",
    dots: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024, // 480〜767px以下のサイズに適用
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 540, // 〜430px以下のサイズに適用
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});