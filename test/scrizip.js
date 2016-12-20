function bodyLoad() {
	//document.getElementById("menuContent").style.display = "none";
	// var kids = document.getElementsByClassName("contentDiv");
	// for (var i = 0; i < kids.length; ++i) {
	//   var item = kids[i];
   //
	//   item.style.display = "none";
	// }
   $('#imageThing').parallax();
   $('#favoritesImage').parallax();
   $('#soupSaladImage').parallax();
   $('#sandwichesImage').parallax();
   $('#wingsImage').parallax();
   $('#burgersImage').parallax();
   $('#macImage').parallax();

}


function display(da) {
	var kids = document.getElementsByClassName("contentDiv");
	for (var i = 0; i < kids.length; ++i) {
	  var item = kids[i];  //
		var curr = item.id + "Content";

	  if ((da.id + "Content") == item.id) {
		   	item.style.display = "block";
	  }
	  else {
		  item.style.display = "none";
	  }
	}
}
