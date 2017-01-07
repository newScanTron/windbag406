
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  var stickyTop = $('#menuContent').offset().top;
  $(window).on( 'scroll', function(){
        if ($(window).scrollTop() >= stickyTop) {
            $('#menuNav').css({position: "fixed", top: "0px"});
        } else {
            $('#menuNav').css({position: "relative", top: "0px"});
        }
    });
});




function bodyLoad() {

   $('#imageThing').parallax();
   $('#soupSaladImage').parallax();
   $('#wingsImage').parallax();
   if (document.body.clientWidth < 992)
      hideByClass("MenuCat");

}
window.addEventListener('resize', checkSize);

function hideByClass(className) {
	var kids = document.getElementsByClassName(className);
	for (var i = 0; i < kids.length; ++i) {
	  var item = kids[i];
        item.style.display = "none";
	}
}

function showByClass(className) {
	var kids = document.getElementsByClassName(className);
	for (var i = 0; i < kids.length; ++i) {
	  var item = kids[i];
        item.style.display = "block";
	}
}

function checkSize() {
   if (document.body.clientWidth < 992) {
      hideByClass("MenuCat");
   }
   else {
      showByClass("MenuCat");
   }

}

function show(ele) {
   if (document.body.clientWidth > 992)
      return;
   var dataId = ele.dataset.id;
   var kids = document.getElementsByClassName("MenuCat");
	for (var i = 0; i < kids.length; ++i) {
	  var item = kids[i];
     var styleVar = item.style;
     if (item.id == dataId) {
         if (styleVar.display == "block" || !styleVar.display) {
            styleVar.display = "none";
         }
         else {
            styleVar.display = "block";
         }
      }
      else
         styleVar.display = "none";
	}
}
