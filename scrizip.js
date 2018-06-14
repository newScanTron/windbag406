$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 160
        }, 1000);
        return !1
      }
    }
  });
  var stickyTop = $('#menuContent').offset().top;
  $('#imageThing').parallax()
});
document.getElementById("content").addEventListener("load", loadFun);

function loadFun() {
  RenderMenu(document.getElementById("mainMenu"))
}
const seven68 = 768;
window.onscroll = function() {
  myFunction()
};
var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky")
  }
}

function dropdown() {
  document.getElementById("innerNav").classList.toggle("show")
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    console.log("no .dropbtn");
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
}

function hideByClass(className) {
  var kids = document.getElementsByClassName(className);
  for (var i = 0; i < kids.length; ++i) {
    var item = kids[i];
    item.style.display = "none"
  }
}

function showByClass(className) {
  var kids = document.getElementsByClassName(className);
  for (var i = 0; i < kids.length; ++i) {
    var item = kids[i];
    item.style.display = "block"
  }
}

function checkSize() {
  if (document.body.clientWidth < seven68) {
    hideByClass("MenuCat")
  } else {
    showByClass("MenuCat")
  }
}
