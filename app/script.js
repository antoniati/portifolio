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

  // JavaScript to handle modal functionality
  document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("openModal");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
      modal.style.display = "block";
    }

    span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });