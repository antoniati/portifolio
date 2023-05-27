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