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
