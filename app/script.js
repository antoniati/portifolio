// Menu Toggle - OPEN and CLOSE MENU
var MenuToggle = {
    open: function() {
      var hamburger = document.querySelector('.menu-toggle');
      hamburger.classList.toggle('open');
      var navContent = document.querySelector(".nav-content")
      navContent.classList.toggle("open")
      var contentRight = document.querySelector(".nav-content-right")
      contentRight.classList.toggle("open")
      var menuList = document.querySelector(".menu-list")
      menuList.classList.toggle("open")
    }
  };


  // Swiper - SLIDE SHOW CARDS SERVICES
  const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 7000,
    },
    // pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });