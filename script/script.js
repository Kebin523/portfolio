// 스크롤이벤트 (top-bar)
function Topbar_Scroll() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".top-bar").addClass("f-top-bar");
    } else {
      $(".top-bar").removeClass("f-top-bar");
    }
  });
}
Topbar_Scroll();