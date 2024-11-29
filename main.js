new Swiper(".swiper-container", {
  loop: true,
  autoHeight: true,
  autoplay: {
    delay: 4000,
  },
  speed: 500,
  effect: "fade",
});

$(function () {
  // ウィンドウがスクロールされるたびに実行される関数
  $(window).scroll(function () {
    // ".js-scroll"というクラスを持つすべての要素に対して処理を行う
    $(".js-scroll").each(function () {
      // 対象となる要素のページの上からの位置を取得
      var targetOffset = $(this).offset().top;
      // ウィンドウの高さを取得
      var windowHeight = $(window).height();
      // 現在のスクロール位置 + ウィンドウの高さを計算
      var scrollPosition = $(window).scrollTop() + windowHeight;

      // 現在のスクロール位置が対象となる要素の位置を超えた場合
      if (scrollPosition > targetOffset) {
        // 要素に"js-active"というクラスを追加
        $(this).addClass("js-active");
      }
    });
  });
});
