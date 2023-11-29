// header&footer 연결
$(function() {
  $("#quick-menu").load("quickmenu.html");
  $("#header").load("header.html");
  $("#footer").load("footer.html");
});

// 스크롤이벤트 (퀵메뉴)
function Quickmenu_Scroll() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 200) {
      $(".menu-bar").css('display','block');
    }
    else {
      $(".menu-bar").css('display','none');
    }
  });
}
Quickmenu_Scroll();

// main1 비디오 스와이퍼
$(document).ready(function () {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1, // 개수

    loop: true, // 슬라이드 반복 재생 여부

    spaceBetween: 50, // 여백

    centeredSlides: true, // 센터모드

    autoplay: {
      // 자동 슬라이드
      delay: 15000, // 시간
      disableOnInteraction: false // 자동 재생
    },

    navigation: {
      // 버튼
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },

    pagination: {
      // 호출
      el: ".swiper-pagination",
      clickable: true // 버튼 클릭
    }
  });
});

// main2 이미지 효과
AOS.init();

// main3 마우스 hover 효과
$(document).ready(function () {
  $(".slide-buttons li:nth-child(1)").on("mouseenter", function () {
    $(".slide-buttons li.active").removeClass("active");
    $(".hero-center-section.show").removeClass("show");
    $(".hero-center-section:nth-child(1)").addClass("show");
    $(".slide-buttons li:nth-child(1)").addClass("active");
  });
  
  $(".slide-buttons li:nth-child(2)").on("mouseenter", function () {
    $(".slide-buttons li.active").removeClass("active");
    $(".hero-center-section.show").removeClass("show");
    $(".hero-center-section:nth-child(2)").addClass("show");
    $(".slide-buttons li:nth-child(2)").addClass("active");
  });
  
  $(".slide-buttons li:nth-child(3)").on("mouseenter", function () {
    $(".slide-buttons li.active").removeClass("active");
    $(".hero-center-section.show").removeClass("show");
    $(".hero-center-section:nth-child(3)").addClass("show");
    $(".slide-buttons li:nth-child(3)").addClass("active");
  });
  
  $(".slide-buttons li:nth-child(4)").on("mouseenter", function () {
    $(".slide-buttons li.active").removeClass("active");
    $(".hero-center-section.show").removeClass("show");
    $(".hero-center-section:nth-child(4)").addClass("show");
    $(".slide-buttons li:nth-child(4)").addClass("active");
  });
  
  $(".slide-buttons li:nth-child(5)").on("mouseenter", function () {
    $(".slide-buttons li.active").removeClass("active");
    $(".hero-center-section.show").removeClass("show");
    $(".hero-center-section:nth-child(5)").addClass("show");
    $(".slide-buttons li:nth-child(5)").addClass("active");
  });
  
  $(".slide-buttons li:nth-child(6)").on("mouseenter", function () {
    $(".slide-buttons li.active").removeClass("active");
    $(".hero-center-section.show").removeClass("show");
    $(".hero-center-section:nth-child(6)").addClass("show");
    $(".slide-buttons li:nth-child(6)").addClass("active");
  });
  $(".slide-buttons li:nth-child(1)").trigger("mouseenter");
});