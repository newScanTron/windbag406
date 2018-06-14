"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ProteinPower() {
    return React.createElement(
        "div",
        { className: "MenuItem col-md-8 col-sm-12 ", id: "proteinPower" },
        React.createElement(
            "div",
            { className: "row" },
            React.createElement(
                "div",
                { className: "col-md-12 col-sm-12" },
                React.createElement(
                    "span",
                    null,
                    React.createElement(
                        "h2",
                        null,
                        "PROTEIN POWER",
                        React.createElement("br", null),
                        React.createElement(
                            "small",
                            null,
                            " A fully customizable low-carb meal."
                        )
                    )
                )
            ),
            React.createElement(
                "p",
                { className: "col-md-5 col-sm-5" },
                React.createElement(
                    "span",
                    null,
                    "PICK YOUR PROTEIN"
                ),
                React.createElement("br", null),
                "Italian Chicken Breast 9.99",
                React.createElement("br", null),
                "Certified Angus Beef Patty 9.99",
                React.createElement("br", null),
                "Pesto Tuna Fillet 11.99",
                React.createElement("br", null),
                "Blackened Tuna Fillet 11.99",
                React.createElement("br", null),
                "Black Bean Patty 9.99",
                React.createElement("br", null)
            ),
            React.createElement(
                "p",
                { className: "col-md-7 col-sm-7" },
                React.createElement(
                    "span",
                    null,
                    React.createElement("br", null)
                ),
                "Two of the following sides are included with your protein. A low-carb salad, seasonal mixed vegetables , cottage cheese, celery or soup.",
                React.createElement("br", null),
                "Add $1 for each additional side."
            )
        )
    );
}

var Menu = function (_React$Component) {
    _inherits(Menu, _React$Component);

    function Menu(props) {
        _classCallCheck(this, Menu);

        return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));
    }

    _createClass(Menu, [{
        key: "CreateMenu",
        value: function CreateMenu() {
            var _this2 = this;

            return this.props.menuList.menuCat.map(function (val) {

                if (val["name"].toLowerCase() == "protein power") return React.createElement(
                    "div",
                    { className: "row" },
                    ProteinPower()
                );

                return React.createElement(
                    "div",
                    { id: val["name"], className: "row MenuCat " },
                    React.createElement(
                        "h1",
                        { className: "CatTitle" },
                        val["name"].toUpperCase()
                    ),
                    val["header"] && React.createElement(
                        "i",
                        null,
                        val["header"]
                    ),
                    _this2.CreateMenuItem(val)
                );
            });
        }
    }, {
        key: "CreateMenuItem",
        value: function CreateMenuItem(val) {
            return val.items.map(function (v) {
                var classes = "";
                var temp = v["desc"].toString();
                var name = v["name"].toString().trim();
                var price = v["price"].toString();

                var splitPrice = price.split(" ");
                var addOnPrice = "";

                if (splitPrice.length > 1 && splitPrice[0] != "sm") {
                    price = splitPrice[0];
                    for (var i = 1; i < splitPrice.length; i++) {
                        if (splitPrice[i]) addOnPrice += " " + splitPrice[i];
                    }
                }

                var split = name.split(" ");
                var secondLine = "";

                if (name.length > 25) {
                    name = split[0] + " " + split[1];
                    for (var i = 2; i < split.length; i++) {
                        if (split[i]) secondLine += " " + split[i];
                    }
                }

                if (temp.length > 130) classes = "SmallText";

                return React.createElement(
                    "div",
                    { key: v["name"], className: "MenuItem col-md-4 col-sm-6", itemProp: "MenuItem" },
                    React.createElement(
                        "h4",
                        null,
                        name.toUpperCase(),
                        React.createElement(
                            "b",
                            null,
                            price.toUpperCase(),
                            splitPrice.length > 0 && React.createElement(
                                "small",
                                null,
                                addOnPrice
                            )
                        ),
                        secondLine.length > 0 && React.createElement(
                            "span",
                            null,
                            React.createElement("br", null),
                            secondLine.toUpperCase()
                        )
                    ),
                    React.createElement(
                        "p",
                        { className: classes },
                        temp
                    )
                );
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { id: this.props.id, className: "MenuCat" },
                    this.CreateMenu()
                ),
                " "
            );
        }
    }]);

    return Menu;
}(React.Component);

function RenderMenu(menuName) {
    //var list = JSON.parse(menus);
    var menu = brunch;
    switch (menuName.dataset.name.toLowerCase()) {
        case "brunch":
            console.log('we made a brunch switch');
            menu = brunch;
            break;
        case "bar":
            menu = bar;
            console.log('we made a bar switch');
            break;
        case "kids":
            menu = kids;
            console.log('we made a kids switch');
            break;
        default:
            menu = main;

    }

    ReactDOM.render(React.createElement(Menu, { menuList: menu }), document.getElementById("menuContent"));
    document.getElementById("menuTitle").innerHTML = menuName.dataset.name.toUpperCase() + " MENU";
}

var bar = {
    "name": "bar",
    "menuCat": [{
        "name": "specialty drinks",
        "header": "",
        "items": [{
            "name": "The Autumn Aquavit",
            "desc": "Montgomery's Skadi Aquavit, Prosecco, Cranberry, Bitters, & Simple Syrup.",
            "price": "7"
        }, {
            "name": "Bordello Pear",
            "desc": "Montgomery's Quick Silver Vodka, Pear Nectar, Muddled Ginger, & Honey.",
            "price": "7"
        }, {
            "name": "Chocolate Huckletini",
            "desc": "Willies's Huckleberry Cream Liquor, Kahlua, ½ & ½, Chocolate Syrup.",
            "price": "7"
        }, {
            "name": "Red Delicious",
            "desc": "Cold Spring's Huckleberry Vodka, Cold Spring's Lemon Vodka, Pama, 360° Red Apple, Cranberry, & Lemon",
            "price": "7"
        }, {
            "name": "Pumpkin Spice",
            "desc": "Rum Chata, Frangelico, Graham Cracker Rim, Freshly grated Nutmeg.",
            "price": "8"
        }, {
            "name": "Salted Carmel White Russian",
            "desc": "Head Frame's High Ore Vodka, Kahlua, ½ & ½, Salted Rim, & Caramel.",
            "price": "7"
        }, {
            "name": "Maker's Manhattan",
            "desc": "Maker's Mark, Sweet Vermouth, Bitters, & Bordeaux Cherry.",
            "price": "8"
        }, {
            "name": "\"The Bag\" Bloody or Caesar",
            "desc": "Signature House Bloody Mix, Tito's Vodka, & Seasonal Garnish.",
            "price": "7"
        }]
    }, {
        "name": "moscow mules",
        "header": "Served in a Copper Mug with Hand-Squeezed Lime and Ginger Beer",
        "items": [{
            "name": "The Classic",
            "desc": "Head Frame's High Ore Vodka",
            "price": "7"
        }, {
            "name": "The Skinny",
            "desc": "Head Frame's High Ore Vodka, Diet Ginger Beer.",
            "price": "7"
        }, {
            "name": "the Nordic Mule",
            "desc": "Montgomery's Skadi Aquavit & Lemon.",
            "price": "7"
        }, {
            "name": "The HuckleBerry",
            "desc": "Bozeman Cold Spring Huck",
            "price": "7"
        }, {
            "name": "The Butte Buck",
            "desc": "Head Frame's Never Sweat Whiskey.",
            "price": "7"
        }, {
            "name": "The Gold Rush",
            "desc": "Gulch Distiller's Flintlock Rum, Pear Nectar.",
            "price": "7"
        }]
    }, {
        "name": "hot",
        "header": "",
        "items": [{
            "name": "Outlaw Cider",
            "desc": "Bulleit Bourbon, Maple Syrup, Apple Cider, Lemon.",
            "price": "7"
        }, {
            "name": "Dirty Chai",
            "desc": "Flintlock Rum, Chai Tea, Cream, Honey, Orange Peel.",
            "price": "7"
        }, {
            "name": "Ancho's Angel",
            "desc": "Ancho Chili infused Destroying Angel Whiskey, Hot Chocolate, Whip Cream, Grated Mexican Chocolate.",
            "price": "7"
        }, {
            "name": "Irish Coffee",
            "desc": "Never Sweat Whiskey, Orphan Girl Cream, coffee.",
            "price": "7"
        }]
    }]
};

var kids = {
    "name": "kids",
    "menuCat": [{
        "name": "",
        "header": "All meals are served with a complimentary beverage.",
        "items": [{
            "name": "grilled cheese",
            "desc": "Chicken & green chilies rolled in a flour tortilla covered in a blend of cheese & enchilada sauce.  Served with chip strips, shredded lettuce, tomatoes, olives, red salsa & sour cream.",
            "price": "4.95"
        }, {
            "name": "jr. chicken strip basket",
            "desc": "A half portion of our fresh chicken tenderloins, served with ranch dressing and fries.",
            "price": "4.95"
        }, {
            "name": "pub mac & cheese",
            "desc": "Shell pasta smothered in cheese sauce.",
            "price": "4.95"
        }]
    }]
};

var starters = {
    "name": "starters",
    "header": "",
    "items": [{
        "name": "big dorothy's signature nachos",
        "desc": "Your choice of chicken, bacon, or beet on top of house made chips topped with onions, black beans, tomatoes, olives, shredded cheddar and our soon to be famous cheese sauce.  Add Jalapeños for 75¢. Sub Brisket 1.75",
        "price": "10.99"
    }, {
        "name": "brothel bites",
        "desc": "Our own house-made enchiladas sliced into bites, deep-fried & served with our enchilada sauce, sour cream, & salsa.",
        "price": "8.99"
    }, {
        "name": "sweet fries",
        "desc": "Seasoned sweet fries with roasted red pepper aioli.",
        "price": "5.99"
    }, {
        "name": "gigantic pretzel",
        "desc": "A pretzel the size of a large pizza! Served with a variety of mustards & our cheese sauce.",
        "price": "12.99"
    }, {
        "name": "filibuster fries",
        "desc": "Our house fries topped with our secret fry seasoning.",
        "price": "5.99"
    }, {
        "name": "jameson bbq bacon wrapped shrimp",
        "desc": "Six jumbo shrimp wrapped in bacon & covered in jameson BBQ sauce.",
        "price": "10.99"
    }, {
        "name": "chips & cheese",
        "desc": "House-made tortilla chips served with our signature cheese sauce.",
        "price": "5.99"
    }, {
        "name": "spicy pub pickles",
        "desc": "Crisp dill pickles with a dash of zesty spices dipped in beer batter & fried.  Served with Jameson Black Barrel Mustard & honey mustard.",
        "price": "6.99"
    }, {
        "name": "blackfoot river cheese curds",
        "desc": "Wisconsin sharp cheddar cheese curds fried in Blackfoot River Amber batter & served with ranch.",
        "price": "8.99"
    }]
};

var pubBreakfast = {
    "name": "pub breakfast",
    "header": "",
    "items": [{
        "name": "granny's breakfast",
        "desc": "Two eggs cooked either poached or scrambled, Served with your choice of bacon, ham steak, or sausage.  Served with home fries and your choice toast or English muffin.",
        "price": "8.99"
    }, {
        "name": "chicken fried steak",
        "desc": "Certified Angus Beef Chicken Fried Steak served with scrambled or poached eggs, home fries, & your choice of an English muffin or toast.  Served with Dorothy's secret gravy.",
        "price": "10.99"
    }, {
        "name": "eggs Benedict",
        "desc": "An English muffin topped with basted egg, ham steak, & hollandaise sauce.",
        "price": "9.99"
    }, {
        "name": "biscuits & gravy",
        "desc": "House-made biscuits & gravy served with home fries.",
        "price": "8.99"
    }, {
        "name": "park avenue French toast",
        "desc": "Park Avenue bakery bread transformed into French Toast topped with powered sugar & candied bacon.",
        "price": "9.99"
    }, {
        "name": "west coast bene",
        "desc": "An English muffin topped with a basted egg, bacon, avocados, caramelized onions, tomatoes, & finished with hollandaise sauce.",
        "price": "11.99"
    }, {
        "name": "the old bag",
        "desc": "A pretzel roll topped with sausage, scrambled eggs, & melted cheddar cheese.  Served with hollandaise dipping sauce & home fries.",
        "price": "10.99"
    }, {
        "name": "breakfast brat",
        "desc": "A pretzel roll topped with a Guinness soaked brat, scrambled eggs, caramelized onions, & melted cheddar cheese.  Served with hollandaise dipping sauce & home fries.",
        "price": "10.99"
    }, {
        "name": "perfect pesto",
        "desc": "Grilled sourdough topped with fresh pesto, ham steak, bacon, scrambled eggs, & melted pepper jack.  Served with home fries.",
        "price": "9.99"
    }]
};

var soupSalad = {
    "name": "soups & salads",
    "header": "house-made soup 2.49 cup, 3.99 bowl",
    "items": [{
        "name": "house salad",
        "desc": "Mixed green, tomatoes, cucumbers, carrots, onion & your choice of dressing.  Add grilled or crispy chicken for 2.99.  Add tuna 4.95.  Served with a dinner roll.",
        "price": "sm 3.99 lg 6.99"
    }, {
        "name": "the greek isle",
        "desc": "Your choice of gyro meat or grilled chicken on a bed of romaine lettuce topped with Kalamata olives, red onions, cucumbers, tomatoes, & feta crumbles.  Served with feta vinaigrette &amp pita bread.",
        "price": "10.99"
    }, {
        "name": "ceasar salad",
        "desc": "Crisp romaine lettuce with red onions, croutons, Parmesan cheese, & our house-made Caesar.  Add grilled or crispy chicken for 2.99.  Add tuna 4.95.  Served with a dinner roll.",
        "price": "sm 3.99 lg 6.99"
    }, {
        "name": "buffalo chicken salad",
        "desc": "Seasonal greens with grilled or crispy chicken, red onions, tomatoes, carrots, bleu cheese crumbles, & croutons.  Served with a dinner roll.",
        "price": "9.99"
    }, {
        "name": "kicking kale",
        "desc": "Tender baby Kale topped with crunchy green apples, dried sweetened cranberries, toasted sunflower seeds, & grilled or fried chicken.  Served with poppy seed vinaigrette & a dinner roll.",
        "price": "10.99"
    }, {
        "name": "chips & chicken",
        "desc": "Your choice of seasoned beef or chicken topped with cheddar cheese, tomatoes, onions, olives, black beans, red salsa, sour cream & ranch.  Served on mixed greens & garnished with tortilla strip chips.",
        "price": "9.99"
    }, {
        "name": "Chinatown chicken",
        "desc": "Mixed greens & Nappa cabbage mixed with water chestnuts, carrots, bell peppers, grilled or crispy chicken, & zesty Mandarin sauce.  Served with fried won tons.",
        "price": "9.99"
    }, {
        "name": "salad dressings",
        "desc": "Ranch, Bleu Cheese, Oil & Vinegar, 1000 Island, Balsamic Vinaigrette, Italian, Oriental, Feta Vinaigrette, or Poppy Seed Vinaigrette.",
        "price": ""
    }]
};

var favorites = {
    "name": "big dorothy's favorites",
    "header": "",
    "items": [{
        "name": "chicken enchilada",
        "desc": "Chicken & green chilies rolled in a flour tortilla covered in a blend of cheese & enchilada sauce.  Served with chip strips, shredded lettuce, tomatoes, olives, red salsa & sour cream.",
        "price": "9.99"
    }, {
        "name": "chicken strip platter",
        "desc": "Strips of chicken tenderloins with light,  aking breading served with coleslaw and your choice of side.",
        "price": "9.99"
    }, {
        "name": "blackfoot river fish & chips",
        "desc": "12 oz. of cod dipped in our house-made Blackfoot River Amber Beer Batter, fried & served with our tarter sauce, coleslaw, & your choice of side.",
        "price": "12.99"
    }, {
        "name": "beer battered fish tacos",
        "desc": "Cod dipped in our house-made Blackfoot River Amber Beer Batter topped with cheddar cheese, chili lime sour cream, cabbage, tomatoes, & black olives. Served with salsa, sour cream, & your choice of side.",
        "price": "12.99"
    }, {
        "name": "jimmy the greek's gyro",
        "desc": "A warm pita topped with seasoned beef, lettuce, tzatziki sauce, tomatoes, & feta cheese. Served with your choice of side.",
        "price": "10.49"
    }]
};

var protein = {
    "name": "protein power",
    "header": "",
    "items": []
};

var sandwiches = {
    "name": "sandwiches",
    "header": "Served with fries, chips, or soup. Add sweet or Filibuster fries for an additional 59¢. Add a pretzel bun for 75¢. Start our with a house salad for only $1.99.",
    "items": [{
        "name": "french dip",
        "desc": "Thinly sliced roast beef with melted Swiss on a Park Avenue demi baguette served with au jus.",
        "price": "9.99 Double beef for 1.99"
    }, {
        "name": "Reuben",
        "desc": "Thinly sliced corned beef, Swiss cheese, & sauerkraut on your choice of wheat, sourdough, or rye. Served with 1000 Island.",
        "price": "9.49"
    }, {
        "name": "BLT",
        "desc": "Bacon, Lettuce, & tomato on your choice of wheat, sourdough, or rye with mayo. Add cheddar, Swiss, pepper jack, or mozzarella for 50¢",
        "price": "8.99 Double Bacon 1.99"
    }, {
        "name": "1/2 sandwich & a side",
        "desc": "1/2 of a French Dip, Reuben, or BLT with choice of side.",
        "price": "6.99"
    }, {
        "name": "buffalo chicken sando",
        "desc": "Crispy chicken dipped in our buffalo sauce & topped with bleu cheese crumbles. Served on a pretzel bun. ",
        "price": "10.99"
    }, {
        "name": "capital city club",
        "desc": "Black forest ham, turkey, bacon, lettuce, cheddar cheese & tomato on pita bread with mayo.",
        "price": "10.99"
    }, {
        "name": "black & bleu chicken",
        "desc": "Grilled or fried chicken, peppered bacon & bleu cheese crumbles. Served on a pretzel bun.",
        "price": "10.99"
    }, {
        "name": "jameson bbq beef brisket",
        "desc": "Certified Angus Beef Brisket topped with coleslaw. Served on a pretzel bun.",
        "price": "12.99"
    }]
};

var wings = {
    "name": "wings",
    "header": "All wings are served with carrots, celery & your choice of ranch or bleu cheese dressings. Wings are served on a bed of our fresh made chips.",
    "bonePrice": "on the bone (8) 10.99",
    "lessPrice": "boneless (10) 9.99",
    "desc": "BREADED IN BEER, BACON & TABASCO! TOSS YOUR WINGS IN THE FOLLOWING SAUCES:",
    "items": [{
        "name": "buffalo",
        "desc": "Traditional",
        "price": ""
    }, {
        "name": "JAMESON BBQ",
        "desc": "Jameson Irish Whiskey infused in our house BBQ",
        "price": ""
    }, {
        "name": "DRUNKEN CHICKEN",
        "desc": "A tangy Asian sauce.",
        "price": ""
    }, {
        "name": "JAMESON BLACK BARREL MUSTARD",
        "desc": "House-made mustard sauce infused with our favorite whiskey",
        "price": ""
    }, {
        "name": "HABANERO PLUM",
        "desc": "A sweet plum sauce with habanero flakes",
        "price": ""
    }, {
        "name": "DEATH BY CHICKEN",
        "desc": "You think you have the Gizzards? Caution our hottest sauce!",
        "price": ""
    }, {
        "name": "HONEY SOY",
        "desc": "A traditional soy sauce infused with honey",
        "price": ""
    }]
};

var burgers = {
    "name": "burgers",
    "header": "An ALL FRESH ½ pound Certified Angus Beef Burgers served on fresh Park Avenue Buns with your choice of fries, soup, potato chips. Add sweet or Filibuster fries for an additional 59¢. Add a pretzel bun for 75¢. Start our with a house salad for only $1.99.",
    "items": [{
        "name": "CLASSIC BURGER",
        "desc": "Add cheddar, Swiss, mozzarella, or pepper jack for 50¢.",
        "price": "9.99"
    }, {
        "name": "MAC & CHEESE BURGER",
        "desc": "Topped with bacon chunks & pub mac & cheese.",
        "price": "10.99"
    }, {
        "name": "Rankin bacon cheese",
        "desc": "Topped with bacon & cheddar cheese.",
        "price": "10.99"
    }, {
        "name": "BULLOCK BURGER",
        "desc": "Topped with bacon & crumbled bleu cheese.",
        "price": "10.99"
    }, {
        "name": "ROCKING RACICOT BURGER",
        "desc": "Topped with jalapeños, pepper jack, & sriracha mayo. Served on a pretzel bun.",
        "price": "10.99"
    }, {
        "name": "black beam",
        "desc": "Where’s the beef? Not here. A black bean burger topped with melted pepper jack cheese.",
        "price": "9.99"
    }, {
        "name": "GULCH BURGER",
        "desc": "Topped with Certified Angus Beef Brisket, Jameson BBQ sauce, grilled onions, & bleu cheese crumbles.",
        "price": "12.99"
    }, {
        "name": "MUSHROOM SWISS BURGER",
        "desc": "Topped with mushrooms & Swiss.",
        "price": "10.99"
    }]
};

var mac = {
    "name": "pub Mac & cheese",
    "header": "ALL MAC & CHEESE ARE MADE TO ORDER.  Start out with a small house salad for 1.99. Add soup, chips, or fries for 1.49. Add sweet or Filibuster fries for 1.99. All Mac & Cheese served with a dinner roll.",
    "items": [{
        "name": "classic",
        "desc": "Shell pasta smothered in cheese sauce.",
        "price": "7.49"
    }, {
        "name": "rocky crab mac",
        "desc": "Shell pasta smothered in cheese sauce with Rock Crab.  Double the crab for 3.99.",
        "price": "11.49"
    }, {
        "name": "black forest ham & broccoli",
        "desc": "Shell pasta smothered in cheese sauce with black forest ham & broccoli",
        "price": "9.49"
    }, {
        "name": "southern fried chicken mac",
        "desc": "Shell pasta smothered in cheese sauce with fried chicken & bacon.",
        "price": "10.99"
    }, {
        "name": "mansfield mac",
        "desc": "Shell pasta smothered in cheese sauce with roasted rep peppers, caramelized onions, & sausage.",
        "price": "10.99"
    }, {
        "name": "buffalo chicken mac",
        "desc": "Shell pasta smothered in cheese sauce with buffalo fried chicken & bacon.",
        "price": "11.49"
    }]
};

var sweets = {
    "name": "sweets",
    "header": "",
    "items": [{
        "name": "funnel Fries",
        "desc": "If your favorite food at the fair is funnel cake this dessert is for you! Funnel cakes cut into fries & topped with a caramel, chocolate drizzle. Add a scoop of Ice Cream for .99¢",
        "price": "5.99"
    }, {
        "name": "last chance cookie",
        "desc": "A giant chocolate chip cookie topped with three scoops of Ice Cream with a drizzle of chocolate & caramel.",
        "price": "6.99"
    }]
};

var main = '{ "name": "main","header": "", "menuCat": [ ' + JSON.stringify(starters) + ', ' + JSON.stringify(favorites) + ',' + JSON.stringify(protein) + ', ' + JSON.stringify(soupSalad) + ', ' + JSON.stringify(sandwiches) + ', ' + JSON.stringify(wings) + ', ' + JSON.stringify(burgers) + ', ' + JSON.stringify(mac) + ', ' + JSON.stringify(sweets) + ']}';
var main = JSON.parse(main);

var brunch = '{"name": "brunch", "header" : "Saturday & Sunday 10am to 1pm", "menuCat": [ ' + JSON.stringify(starters) + ',' + JSON.stringify(pubBreakfast) + ', ' + JSON.stringify(soupSalad) + ', ' + JSON.stringify(favorites) + ',' + JSON.stringify(protein) + ', ' + JSON.stringify(sandwiches) + ', ' + JSON.stringify(wings) + ', ' + JSON.stringify(burgers) + ', ' + JSON.stringify(sweets) + ']}';
var brunch = JSON.parse(brunch);