
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 160
                }, 1000);
                return false;
            }
        }
    });
    var stickyTop = $('#menuContent').offset().top;
    // $(window).on( 'scroll', function(){
    //       if ($(window).scrollTop() >= stickyTop) {
    //           $('#menuNav').css({display: "block", top: "0px"});
    //       } else {
    //           $('#menuNav').css({display: "none", top: "0px"});
    //       }
    //   });
    $('#imageThing').parallax();
});


document.getElementById("content").addEventListener("load", loadFun);

function loadFun() {
    RenderMenu(document.getElementById("mainMenu"));
}

const seven68 = 768;

// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

function dropdown() {
    document.getElementById("innerNav").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        console.log("no .dropbtn");
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

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
    if (document.body.clientWidth < seven68) {
        hideByClass("MenuCat");
    }
    else {
        showByClass("MenuCat");
    }

}

// function show(ele) {
//     console.log(typeof ele);
//     if (document.body.clientWidth > seven68)
//         return;

//     if (typeof ele == 'string')
//         console.log("we are a string");
//     var dataId = ele.dataset.id;
//     var kids = document.getElementsByClassName("MenuCat");
//     for (var i = 0; i < kids.length; ++i) {
//         var item = kids[i];
//         var styleVar = item.style;
//         if (item.id == dataId) {
//             if (styleVar.display == "block" || !styleVar.display) {
//                 styleVar.display = "none";
//             }
//             else {
//                 styleVar.display = "block";
//             }
//         }
//         else
//             styleVar.display = "none";
//     }
// }


