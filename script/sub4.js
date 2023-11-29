// header&footer 연결
$(function() {
  $("#quick-menu").load("s-quickmenu.html");
  $("#header").load("s-header.html");
  $("#footer").load("footer.html");
});

// 카드 뒤집기 효과
$(".flip").click(function () {
	$(this).toggleClass('active');
});