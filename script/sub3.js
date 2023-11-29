// header&footer 연결
$(function() {
  $("#quick-menu").load("s-quickmenu.html");
  $("#header").load("s-header.html");
  $("#footer").load("footer.html");
});

// 이미지 스와이퍼
$(document).ready(function () {
	var swiper = new Swiper(".swiper-container", {
		slidesPerView: 3, // 개수

		loop: true, // 슬라이드 반복 재생 여부

		centeredSlides: true, // 센터모드
		
		spaceBetween: 50, // 슬라이드 사이 여백

		navigation: {
			// 버튼
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		}
	});
});
