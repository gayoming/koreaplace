//menu
$(function () {
  //menu
  $("nav .left>li").hover(function () {
    $(" .out_menu > ul").stop().slideToggle();
    $(".box1").stop().slideToggle();
  });
  //tapmenu
  $(".tab_button > li").click(function () {
    var idx = $(this).index();

    $(this).addClass("on").siblings().removeClass("on");

    $(".tab_area .tab_cont")
      .eq(idx)
      .addClass("on")
      .siblings(".tab_cont")
      .removeClass("on");
  });

  //main slide
  $(".slider").bxSlider();
  $(".bxslider").bxSlider({
    minSlides: 5,
    maxSlides: 5,
    slideWidth: 500,
    slideMargin: 40,
    ticker: true,
    speed: 20000,
    tickerHover: true,
  });

  //mobile main slide
  $(".bxslider2").bxSlider({
    nextSelector: "#slider-next",
    prevSelector: "#slider-prev",
    nextText: "→",
    prevText: "←",
  });

  //footer 공지사항
  var ticker = function () {
    timer = setTimeout(function () {
      $("#ticker li:first").animate({ marginTop: "-25px" }, 400, function () {
        $(this).detach().appendTo("ul#ticker").removeAttr("style");
      });
      ticker();
    }, 2000);
  };

  //4 마우스를 올렸을 때 기능 정지
  var tickerover = function () {
    $("#ticker").mouseover(function () {
      clearTimeout(timer);
    });
    $("#ticker").mouseout(function () {
      ticker();
    });
  };
  tickerover();

  ticker();
});

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    speed: 3000,
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 3000)}s`;
    },
  },
});
//inputbox
function Close() {
  document.querySelector(".inputbox").style.display = "none";
  document.querySelector(".blackbox").style.display = "none";
}
function Open() {
  document.querySelector(".inputbox").style.display = "block";
  document.querySelector(".blackbox").style.display = "block";
}

//scroll event
gsap.registerPlugin(ScrollTrigger);
gsap.to(".grid", {
  scrollTrigger: {
    trigger: ".grid>div",
    // toggleActions: "restart none reverse none",
  },
  y: -150,
  duration: 1,
});
gsap.to(".grid-h1", {
  scrollTrigger: {
    trigger: ".grid-h1",
    // toggleActions: "restart none reverse none",
  },
  y: -180,
  duration: 1,
});
gsap.to(".main_slide", {
  scrollTrigger: {
    trigger: ".main_slide",
    // toggleActions: "restart none reverse none",
  },
  y: -180,
  duration: 1,
});
gsap.to(".main_slide2", {
  scrollTrigger: {
    trigger: ".main_slide2",
    // toggleActions: "restart none reverse none",
  },
  y: -150,
  duration: 1,
});

//hotplace hover effect
function hoverEffect(element) {
  let img = element.querySelector("img");
  let h3 = element.querySelector("h3");

  if (event.type === "mouseover") {
    img.style.transform = "scale(1.1)";
    h3.style.opacity = "1";
  } else if (event.type === "mouseout") {
    img.style.transform = "scale(1)";
    h3.style.opacity = "0";
  }
}

function kk(element) {
  if (event.type === "mouseover") {
    element.style.transform = "translateY(-20px)";
    element.style.transition = "0.5s";
    element.style.boxShadow = "0 0 10px #67deff";
  } else if (event.type === "mouseout") {
    element.style.transform = "translateY(0)";
    element.style.boxShadow = "0 0 5px #b8b8b8";
  }
}

//top button
const topB = document.querySelector(".fix-right-menu");

topB.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

let fixMenu = document.querySelector(".fix-right-menu");
let observer2 = new IntersectionObserver((c) => {
  c.forEach((j) => {
    if (j.isIntersecting) {
      fixMenu.style.bottom = "330px";
      fixMenu.style.right = "10px";
    } else {
      fixMenu.style.bottom = "10px";
      fixMenu.style.right = "10px";
    }
  });
});

let ftr = document.querySelector("footer");
observer2.observe(ftr);

//mobile nav menu
function toggleMenu() {
  let ul = document.querySelector(".mobile_menu > ul");
  ul.style.display = ul.style.display === "none" ? "block" : "none";
}
