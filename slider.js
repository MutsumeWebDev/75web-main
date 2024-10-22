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
        breakpoint: 900, // 799px以下のサイズに適用
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});