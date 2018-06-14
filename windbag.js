"use strict";

function _classCallCheck(e, a) {
  if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
}

function _possibleConstructorReturn(e, a) {
  if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return !a || "object" != typeof a && "function" != typeof a ? e : a
}

function _inherits(e, a) {
  if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
  e.prototype = Object.create(a && a.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : e.__proto__ = a)
}

function ProteinPower() {
  return React.createElement("div", {
    className: "MenuItem col-md-8 col-sm-12 ",
    id: "proteinPower"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-md-12 col-sm-12"
  }, React.createElement("span", null, React.createElement("h2", null, "PROTEIN POWER", React.createElement("br", null), React.createElement("small", null, " A fully customizable low-carb meal.")))), React.createElement("p", {
    className: "col-md-5 col-sm-5"
  }, React.createElement("span", null, "PICK YOUR PROTEIN"), React.createElement("br", null), "Cage Free, Hormone Free Chicken Breast 10.49 -or- Certified Angus Beef Patty 10.49", React.createElement("br", null), "Beyond Burger (Veggie) 11.99", React.createElement("br", null)), React.createElement("p", {
    className: "col-md-7 col-sm-7"
  }, React.createElement("span", null, React.createElement("br", null)), "Two of the following sides are included with your protein:", React.createElement("br", null), "A low-carb salad, steamed broccoli, cottage cheese, celery or soup.", React.createElement("br", null), "Add $1 for each additional side.")))
}

function RenderMenu(e) {
  var a = brunch;
  switch (e.dataset.name.toLowerCase()) {
    case "brunch":
      a = brunch;
      break;
    case "bar":
      a = bar;
      break;
    case "kids":
      a = kids;
      break;
    default:
      a = main
  }
  ReactDOM.render(React.createElement(Menu, {
    menuList: a
  }), document.getElementById("menuContent")), document.getElementById("menuTitle").innerHTML = e.dataset.name.toUpperCase() + " MENU"
}
var _createClass = function() {
    function e(e, a) {
      for (var r = 0; r < a.length; r++) {
        var s = a[r];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
      }
    }
    return function(a, r, s) {
      return r && e(a.prototype, r), s && e(a, s), a
    }
  }(),
  Menu = function(e) {
    function a(e) {
      return _classCallCheck(this, a), _possibleConstructorReturn(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e))
    }
    return _inherits(a, e), _createClass(a, [{
      key: "CreateMenu",
      value: function() {
        var e = this;
        return this.props.menuList.menuCat.map(function(a) {
          var r = a.name.toLowerCase().replace(/ /g, "");
          return r = r.replace(/'/g, "").replace(/&/g, ""), "protein power" == a.name.toLowerCase() ? React.createElement("div", {
            className: "row"
          }, ProteinPower()) : React.createElement("div", {
            id: r,
            className: "row MenuCat"
          }, React.createElement("h1", {
            className: "CatTitle"
          }, a.name.toUpperCase()), a.header && React.createElement("i", null, a.header), e.CreateMenuItem(a))
        })
      }
    }, {
      key: "CreateMenuItem",
      value: function(e) {
        return e.items.map(function(e) {
          var a = "",
            r = e.desc.toString(),
            s = e.name.toString().trim(),
            i = e.price.toString();

          var t = i.split(" "),
            c = "";
          if (t.length > 1 && "$sm" != t[0]) {
            i = t[0];
            for (var n = 1; n < t.length; n++) t[n] && (c += " " + t[n])
          }
          var o = s.split(" "),
            d = "";
          if (s.length > 25) {
            s = o[0] + " " + o[1];
            for (var n = 2; n < o.length; n++) o[n] && (d += " " + o[n])
          }
          return r.length > 130 && (a = "SmallText"), React.createElement("div", {
            key: e.name,
            className: "MenuItem col-md-4 col-sm-6 col-xs-12",
            itemProp: "MenuItem"
          }, React.createElement("h4", null, s.toUpperCase(), React.createElement("b", null, i.toUpperCase(), t.length > 0 && React.createElement("small", null, c)), d.length > 0 && React.createElement("span", null, React.createElement("br", null), d.toUpperCase())), React.createElement("p", {
            className: a
          }, r))
        })
      }
    }, {
      key: "render",
      value: function() {
        return React.createElement("div", {
          className: "row"
        }, React.createElement("div", {
          id: this.props.id,
          className: "MenuCat"
        }, this.CreateMenu()), " ")
      }
    }]), a
  }(React.Component),
  bar = {
    name: "bar",
    menuCat: [{
      name: "specialty drinks",
      header: "",
      items: [{
        name: "The Autumn Aquavit",
        desc: "Montgomery's Skadi Aquavit, Prosecco, Cranberry, Bitters, & Simple Syrup.",
        price: "7"
      }, {
        name: "Bordello Pear",
        desc: "Montgomery's Quick Silver Vodka, Pear Nectar, Muddled Ginger, & Honey.",
        price: "7"
      }, {
        name: "Chocolate Huckletini",
        desc: "Willies's Huckleberry Cream Liquor, Kahlua, ½ & ½, Chocolate Syrup.",
        price: "7"
      }, {
        name: "Red Delicious",
        desc: "Cold Spring's Huckleberry Vodka, Cold Spring's Lemon Vodka, Pama, 360° Red Apple, Cranberry, & Lemon",
        price: "7"
      }, {
        name: "Pumpkin Spice",
        desc: "Rum Chata, Frangelico, Graham Cracker Rim, Freshly grated Nutmeg.",
        price: "8"
      }, {
        name: "Salted Carmel White Russian",
        desc: "Head Frame's High Ore Vodka, Kahlua, ½ & ½, Salted Rim, & Caramel.",
        price: "7"
      }, {
        name: "Maker's Manhattan",
        desc: "Maker's Mark, Sweet Vermouth, Bitters, & Bordeaux Cherry.",
        price: "8"
      }, {
        name: '"The Bag" Bloody or Caesar',
        desc: "Signature House Bloody Mix, Tito's Vodka, & Seasonal Garnish.",
        price: "7"
      }]
    }, {
      name: "moscow mules",
      header: "Served in a Copper Mug with Hand-Squeezed Lime and Ginger Beer",
      items: [{
        name: "The Classic",
        desc: "Head Frame's High Ore Vodka",
        price: "7"
      }, {
        name: "The Skinny",
        desc: "Head Frame's High Ore Vodka, Diet Ginger Beer.",
        price: "7"
      }, {
        name: "the Nordic Mule",
        desc: "Montgomery's Skadi Aquavit & Lemon.",
        price: "7"
      }, {
        name: "The HuckleBerry",
        desc: "Bozeman Cold Spring Huck",
        price: "7"
      }, {
        name: "The Butte Buck",
        desc: "Head Frame's Never Sweat Whiskey.",
        price: "7"
      }, {
        name: "The Gold Rush",
        desc: "Gulch Distiller's Flintlock Rum, Pear Nectar.",
        price: "7"
      }]
    }, {
      name: "hot",
      header: "",
      items: [{
        name: "Outlaw Cider",
        desc: "Bulleit Bourbon, Maple Syrup, Apple Cider, Lemon.",
        price: "7"
      }, {
        name: "Dirty Chai",
        desc: "Flintlock Rum, Chai Tea, Cream, Honey, Orange Peel.",
        price: "7"
      }, {
        name: "Ancho's Angel",
        desc: "Ancho Chili infused Destroying Angel Whiskey, Hot Chocolate, Whip Cream, Grated Mexican Chocolate.",
        price: "7"
      }, {
        name: "Irish Coffee",
        desc: "Never Sweat Whiskey, Orphan Girl Cream, coffee.",
        price: "7"
      }]
    }]
  },
  kids = {
    name: "kids",
    menuCat: [{
      name: "",
      header: "All meals are served with a complimentary beverage.",
      items: [{
        name: "grilled cheese",
        desc: "Chicken & green chilies rolled in a flour tortilla covered in a blend of cheese & enchilada sauce.  Served with chip strips, shredded lettuce, tomatoes, olives, red salsa & sour cream.",
        price: "4.95"
      }, {
        name: "jr. chicken strip basket",
        desc: "A half portion of our fresh chicken tenderloins, served with ranch dressing and fries.",
        price: "4.95"
      }, {
        name: "pub mac & cheese",
        desc: "Shell pasta smothered in cheese sauce.",
        price: "4.95"
      }]
    }]
  },
  starters = {
    name: "starters",
    header: "",
    items: [{
      name: "brothel bites",
      desc: "Our own house-made enchiladas sliced into bites, deep-fried & served with our enchilada sauce, sour cream, & salsa.",
      price: "9.49"
    }, {
      name: "BEER CHEESE NACHOS",
      desc: "Tri-color tortilla chips topped with our house-made beer cheese, onions, black beans, tomatoes, olives, & shredded cheddar & your choice of grilled chicken, bacon, or ground beef. Add guacamole 1.79 Add Jalapeños .79 ",
      price: "12.99"
    },{
      name: "BBQ BRISKET NACHOS",
      desc: "Tri-color tortilla chips topped with house-made beer cheese, red onions, BBQ sauce, shredded cheddar & Certified Angus Beef Brisket. Add guacamole 1.79 Add Jalapeños .79",
      price: "13.99"
    },{
      name: "gigantic pretzel",
      desc: "A pretzel the size of a large pizza! Served with a variety of mustards & our cheese sauce.",
      price: "12.99"
    }, {
      name: "CHIPS & CHEESE",
      desc: "House-made tortilla chips served with our signature cheese sauce.",
      price: "5.99"
    }, {
      name: "PUB POUTINE",
      desc: "Our house fries topped with silky brown gravy & creamy cheese curds. Add chicken 3.49 Add Brisket 3.49 Add Bacon 1.99",
      price: "10.49"
    },  {
      name: "spicy pub pickles",
      desc: "Crisp dill pickles with a dash of zesty spices dipped in beer batter & fried. Served with sweet hot mustard & ranch.",
      price: "6.99"
    }, {
      name: "blackfoot river cheese curds",
      desc: "Wisconsin white cheddar cheese curds fried in Blackfoot River Amber batter & served with ranch.",
      price: "8.99"
    },{
      name: "ARTICHOKE SPINACH DIP",
      desc: "House-made artichoke spinach dip served with pita bread, celery, & carrots. ",
      price: "10.99"
    }]
  },
  flatbreads = {
    name: "flatbreads",
    header: "11-inch artisan flatbreads",
    items: [{
      name: "SUNDRIED TOMATO PESTO",
      desc: "Topped with fresh pesto, sundried tomatoes, fresh basil, roasted garlic, prosciutto, & melted mozzarella. ",
      price: "11.99"
    }, {
      name: "PESTO CHICKEN",
      desc: "Topped with fresh pesto, grilled chicken, bacon, & mozzarella.",
      price: "11.99"
    }]
  },
  pubBreakfast = {
    name: "pub breakfast",
    header: "",
    items: [{
      name: "granny's breakfast",
      desc: "Two eggs cooked either poached or scrambled, Served with your choice of bacon, ham steak, or sausage.  Served with home fries and your choice toast or English muffin.",
      price: "8.99"
    }, {
      name: "chicken fried steak",
      desc: "Certified Angus Beef Chicken Fried Steak served with scrambled or poached eggs, home fries, & your choice of an English muffin or toast.  Served with Dorothy's secret gravy.",
      price: "10.99"
    }, {
      name: "eggs Benedict",
      desc: "An English muffin topped with basted egg, ham steak, & hollandaise sauce.",
      price: "9.99"
    }, {
      name: "biscuits & gravy",
      desc: "House-made biscuits & gravy served with home fries.",
      price: "8.99"
    }, {
      name: "park avenue French toast",
      desc: "Park Avenue bakery bread transformed into French Toast topped with powered sugar & candied bacon.",
      price: "9.99"
    }, {
      name: "west coast bene",
      desc: "An English muffin topped with a basted egg, bacon, avocados, caramelized onions, tomatoes, & finished with hollandaise sauce.",
      price: "11.99"
    }, {
      name: "the old bag",
      desc: "A pretzel roll topped with sausage, scrambled eggs, & melted cheddar cheese.  Served with hollandaise dipping sauce & home fries.",
      price: "10.99"
    }, {
      name: "breakfast brat",
      desc: "A pretzel roll topped with a Guinness soaked brat, scrambled eggs, caramelized onions, & melted cheddar cheese.  Served with hollandaise dipping sauce & home fries.",
      price: "10.99"
    }, {
      name: "perfect pesto",
      desc: "Grilled sourdough topped with fresh pesto, ham steak, bacon, scrambled eggs, & melted pepper jack.  Served with home fries.",
      price: "9.99"
    }]
  },
  soupSalad = {
    name: "soups & salads",
    header: "house-made soup 2.49 cup, 3.99 bowl",
    items: [{
      name: "house salad",
      desc: "Mixed greens, tomatoes, cucumbers, carrots, croutons, onion & your choice of dressing. Add grilled or crispy chicken for 3.49. Large salad is served with a dinner roll.",
      price: "sm 3.99 lg 6.99"
    }, {
      name: "the greek isle",
      desc: "Your choice of gyro meat or grilled chicken on a bed of mixed greens topped with Kalamata olives, red onions, cucumbers, tomatoes, & feta crumbles.  Served with feta vinaigrette & pita bread.",
      price: "11.49"
    }, {
      name: "buffalo chicken salad",
      desc: "Seasonal greens with crispy or grilled chicken, red onions, tomatoes, carrots, bleu cheese crumbles, & croutons.  Served with a dinner roll.",
      price: "10.99"
    }, {
      name: "STRAWBERRY CHICKEN SALAD",
      desc: "Fresh spinach with your choice of grilled or fried chicken, strawberries, walnuts, red onions, and feta cheese. Served with Strawberry Vinaigrette. ",
      price: "11.99"
    }, {
      name: "salad dressings",
      desc: "Ranch, Bleu Cheese, Oil & Vinegar, 1000 Island, Balsamic Vinaigrette, Italian, Oriental, Feta Vinaigrette, or Poppy Seed Vinaigrette.",
      price: ""
    }]
  },
  pubDinners = {
    name: "Pub Dinners",
    header: "A Selection of our favorite pub dinners. Available after 4PM Dinner entrées are served with your choice of soup or salad.",
    items: [{
      name: "STEAK FINGER PLATTER",
      desc: "A generous portion of sirloin steak hand-breaded and fried. Served with fires, coleslaw & garlic toast.",
      price: "12.99"
    }, {
      name: "CHICKEN FRIED STEAK",
      desc: "Certified Angus Beef Chicken Fried Steak served with mashed potatoes",
      price: "12.99"
    }, {
      name: "HOMESTYLE BUFFALO MEATLOAF",
      desc: "House-Made meatloaf made with fresh American Bison served with mashed potatoes.",
      price: "14.99"
    }]
  },
  favorites = {
    name: "big dorothy's favorites",
    header: "",
    items: [{
      name: "chicken enchilada",
      desc: "Chicken & green chilies rolled in a flour tortilla covered in a blend of cheeses & enchilada sauce. Served with chip strips, shredded lettuce, tomatoes, olives, red salsa & sour cream. Add Guacamole for 1.79",
      price: "9.99"
    }, {
      name: "chicken strip platter",
      desc: "Strips of chicken tenderloins with light, flaky breading served with coleslaw and your choice of side.",
      price: "9.99"
    }, {
      name: "blackfoot river fish & chips",
      desc: "12 oz. of cod dipped in our house-made Blackfoot River Amber Beer Batter, fried & served with our tarter sauce, coleslaw, & your choice of side.",
      price: "14.99   1/2 - 10.99"
    }, {
      name: "beer battered fish tacos",
      desc: "Cod dipped in our house-made Blackfoot River Amber Beer Batter topped with cheddar cheese, chili lime sour cream, cabbage, tomatoes, & black olives. Served with salsa, sour cream, & your choice of side. Add Guacamole for 1.79",
      price: "12.99"
    }, {
      name: "jimmy the greek's gyro",
      desc: "A warm pita topped with seasoned beef, lettuce, tzatziki sauce, tomatoes, & feta cheese. Served with your choice of side.",
      price: "10.99"
    }]
  },
  protein = {
    name: "protein power",
    header: "",
    items: []
  },
  sandwiches = {
    name: "sandwiches",
    header: "Served with fries, chips, or soup. Add sweet potato fries or Filibuster fries for an additional 59¢. Add a pretzel bun for 75¢. Start our with a house salad for only $1.99.",
    items: [{
      name: "french dip",
      desc: "Thinly sliced roast beef with melted Swiss on a Park Avenue demi baguette served with au jus.",
      price: "9.99 Double beef for 1.99"
    }, {
      name: "Reuben",
      desc: "Thinly sliced corned beef, Swiss cheese, 1000 Island & sauerkraut on your choice of wheat, sourdough, or rye.",
      price: "9.49"
    }, {
      name: "BLT",
      desc: "Bacon, Lettuce, & tomato on your choice of wheat, sourdough, or rye with mayo. Add cheddar, Swiss, pepper jack, or mozzarella for 50¢",
      price: "9.49 Double Bacon 1.99"
    }, {
      name: "1/2 sandwich & a side",
      desc: "½ of any of the above sandwiches with choice of side. Only available until 4pm.",
      price: "6.99"
    }, {
      name: "buffalo chicken sando",
      desc: "Crispy or grilled chicken dipped in our buffalo sauce & topped with bleu cheese crumbles. Served on a pretzel bun. ",
      price: "11.49"
    }, {
      name: "capital city club",
      desc: "Black forest ham, turkey, bacon, lettuce, cheddar cheese & tomato on pita bread with mayo.",
      price: "11.49"
    }, {
      name: "black & bleu chicken",
      desc: "Grilled or fried chicken, peppered bacon & bleu cheese crumbles. Served on a pretzel bun.",
      price: "10.99"
    }, {
      name: "jameson bbq beef brisket",
      desc: "Certified Angus Beef Brisket topped with coleslaw. Served on a pretzel bun.",
      price: "12.99"
    }, {
      name: "philly",
      desc: "Thinly sliced roast beef, grilled onions & peppers served on a hoagie and smothered with our signature cheese sauce. Double roast beef for 1.99",
      price: "10.99"
    }]
  },
  wings = {
    name: "wings",
    header: "All wings are served with carrots, celery & your choice of ranch or bleu cheese dressings. Wings are served on a bed of our fresh made chips.",
    bonePrice: "on the bone (8) 10.99",
    lessPrice: "boneless (10) 10.99",
    desc: "BREADED IN BEER, BACON & TABASCO! TOSS YOUR WINGS IN THE FOLLOWING SAUCES:",
    items: [{
      name: "buffalo",
      desc: "Traditional buffalo sauce",
      price: ""
    }, {
      name: "JAMESON BBQ",
      desc: "Jameson Irish Whiskey infused in our house BBQ",
      price: ""
    }, {
      name: "DRUNKEN CHICKEN",
      desc: "A tangy Asian sauce.",
      price: ""
    }, {
      name: "HABANERO PLUM",
      desc: "A sweet plum sauce with habanero flakes",
      price: ""
    }, {
      name: "DEATH BY CHICKEN",
      desc: "You think you have the Gizzards? Caution our hottest sauce!",
      price: ""
    }, {
      name: "garlic parmesan",
      desc: "A mild parmesan sauce infused with GARLIC.",
      price: ""
    }]
  },
  burgers = {
    name: "burgers",
    header: "ALL FRESH 1⁄2 pound Certified Angus Beef Burgers served on Le bread Totra Roll served with your choice of fries, soup, potato chips. Add a Pretzel Bun for 75¢. Add sweet or Filibuster fries for an additional 59¢. Start out with a salad for only 1.99 more. Add a Gluten Free Bun for 1.25.",
    items: [{
      name: "CLASSIC BURGER",
      desc: "Add cheddar, Swiss, mozzarella, or pepper jack for 50¢.",
      price: "10.49"
    }, {
    name: "MAC & CHEESE BURGER",
      desc: "Topped with bacon chunks & pub mac & cheese.",
      price: "11.99"
    }, {
      name: "Rankin bacon cheese",
      desc: "Topped with bacon & cheddar cheese.",
      price: "11.49"
    }, {
      name: "ROCKING RACICOT BURGER",
      desc: "Topped with jalapeños, pepper jack, & sriracha mayo. Served on a pretzel bun.",
      price: "11.99"
    }, {
      name: "GULCH BURGER",
      desc: "Topped with Certified Angus Beef Brisket, Jameson BBQ sauce, grilled onions, & bleu cheese crumbles.",
      price: "13.99"
    }, {
      name: "MUSHROOM SWISS BURGER",
      desc: "Topped with mushrooms & Swiss.",
      price: "11.49"
    }, {
      name: "POUTINE BURGER",
      desc: "Topped with silky brown gravy & cheese curds.",
      price: "13.49"
    }, {
      name: "BEYOND BURGER",
      desc: "100 % vegetable based. Add your choice of cheese .50.",
      price: "13.49"
    }]
  },
  mac = {
    name: "pub Mac & cheese",
    header: "ALL MAC & CHEESES ARE MADE TO ORDER Start out with a small house salad for 1.99. Add soup, chips, or fries for 1.49. Add sweet or Filibuster fries for 1.99. All Mac & Cheeses are served with a dinner roll. Add Gluten Free Pasta for 2.99",
    items: [{
      name: "classic",
      desc: "Shell pasta smothered in cheese sauce.",
      price: "8.49"
    }, {
      name: "rocky crab mac",
      desc: "Shell pasta smothered in cheese sauce with Rock Crab.  Double the crab for 3.99.",
      price: "13.99"
    }, {
      name: "black forest ham & broccoli",
      desc: "Shell pasta smothered in cheese sauce with black forest ham & broccoli",
      price: "9.99"
    }, {
      name: "southern fried chicken mac",
      desc: "Shell pasta smothered in cheese sauce with fried chicken & bacon.",
      price: "10.99"
    }, {
      name: "buffalo chicken mac",
      desc: "Shell pasta smothered in cheese sauce with buffalo fried chicken & bacon.",
      price: "10.99"
    },{
      name: "brisket mac",
      desc: "Shell pasta smothered in cheese sauce with Certified BBQ Brisket, bacon, red onions, & BBQ sauce",
      price: "13.99"
    }, {
      name: "CHEESEBURGER mac",
      desc: "Shell pasta smothered in cheese sauce with seasoned ground beef & tomatoes.",
      price: "10.99"
    }]
  },
  sweets = {
    name: "sweets",
    header: "",
    items: [{
      name: "funnel Fries",
      desc: "If your favorite food at the fair is funnel cake this dessert is for you! Funnel cakes cut into fries & topped with a caramel, chocolate drizzle.",
      price: "5.99"
    }, {
      name: "FRIED CHEESECAKE",
      desc: "House-made cheesecake, crusted & fired. Ask your server about our seasonal varieties.",
      price: "6.99"
    }]
  },
  main = '{ "name": "main","header": "", "menuCat": [ ' + JSON.stringify(starters) + ", " + JSON.stringify(favorites) + "," + JSON.stringify(protein) + ", " + JSON.stringify(soupSalad) + ", " + JSON.stringify(sandwiches) + ", " + JSON.stringify(wings) + ", " + JSON.stringify(burgers) + ", " + JSON.stringify(mac) + ", " + JSON.stringify(sweets) + "]}",
  main = JSON.parse(main),
  brunch = '{"name": "brunch", "header" : "Saturday & Sunday 10am to 1pm", "menuCat": [ ' + JSON.stringify(starters) + "," + JSON.stringify(pubBreakfast) + ", " + JSON.stringify(soupSalad) + "," + JSON.stringify(protein) + ", " + JSON.stringify(favorites) + ", " + JSON.stringify(sandwiches) + ", " + JSON.stringify(wings) + ", " + JSON.stringify(burgers) + ", " + JSON.stringify(sweets) + "]}",
  brunch = JSON.parse(brunch);
