// header&footer 연결
$(function() {
  $("#quick-menu").load("s-quickmenu.html");
  $("#header").load("s-header.html");
  $("#footer").load("footer.html");
});

// 지역 카테고리 스와이퍼
$(document).ready(function () {
	var swiper = new Swiper(".first-swiper", {
		slidesPerView: 5, // 개수
		
		slidesPerGroup : 5, // 그룹으로 묶을 개수

		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		}
	});
});

// 스토어 이미지 스와이퍼
$(document).ready(function () {
	var swiper = new Swiper(".second-swiper", {
		// loop: true,

		centeredSlides: true,

		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},

		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		}
	});
});
