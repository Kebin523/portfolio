// header&footer 연결
$(function() {
  $("#quick-menu").load("s-quickmenu.html");
  $("#header").load("s-header.html");
  $("#footer").load("footer.html");
});

// 썸네일 슬라이더
var sliderThumbnail = new Swiper(".slider-thumbnail", {
	slidesPerView: 6,
	spaceBetween: 10,
	slideToClickedSlide: true,
	watchSlidesProgress: true
	// loop: true,
});

//메인 슬라이더
var slider = new Swiper(".slider", {
	// loop: true,
	centeredSlides: true,
	slidesPerView: "auto", // 한 슬라이드에 보여줄 갯수
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	thumbs: {
		swiper: sliderThumbnail
	}
});

// 탭메뉴
const tabItem = document.querySelectorAll(".tab__item");
const tabContent = document.querySelectorAll(".tab__content");

tabItem.forEach((item, index) => {
  
  item.addEventListener("click", (e) => {
   
    e.preventDefault(); // a 
    
    tabContent.forEach((content) => {

      content.classList.remove("active");
    });

    tabItem.forEach((content) => {
     
      content.classList.remove("active");
    });

    tabItem[index].classList.add("active");
    tabContent[index].classList.add("active");
  });
});