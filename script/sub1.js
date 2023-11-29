// header&footer 연결
$(function() {
  $("#quick-menu").load("s-quickmenu.html");
  $("#header").load("s-header.html");
  $("#footer").load("footer.html");
});

// 이미지 스와이퍼
$(document).ready(function () {
	var swiper = new Swiper(".swiper-container", {
		slidesPerView: 1, // 개수

		loop: true, // 슬라이드 반복 재생 여부
		
		spaceBetween: 50, // 여백

		centeredSlides: true, // 센터모드

		pagination: { // 호출
			el: ".swiper-pagination",
			clickable: true // 버튼 클릭
		}
	});
});
