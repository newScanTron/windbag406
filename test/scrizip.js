function bodyLoad() {

   $('#imageThing').parallax();
   $('#soupSaladImage').parallax();
   $('#wingsImage').parallax();
   if (document.body.clientWidth < 992)
      hide('none');

}
window.addEventListener('resize', checkSize);
var hasHidden = false;
function hide(displayString) {
   var displayString = "'" + displayString + "'";
   console.log(displayString);
	var kids = document.getElementsByClassName("MenuCat");
	for (var i = 0; i < kids.length; ++i) {
	  var item = kids[i];
     item.style.display = displayString;
	}
   hasHidden = true;
}

function checkSize() {
   if (!hasHidden && (document.body.clientWidth < 992)) {
      hide("none");
   }
   else {
      hide("block");
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
         if (styleVar.display == "block") {
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
