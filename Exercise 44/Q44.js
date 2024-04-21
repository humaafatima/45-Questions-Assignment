function makeSandwich() {
    var ingridents = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingridents[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items: \n");
    ingridents.forEach(function (singleingrident) { return console.log(singleingrident); });
    console.log("\"Enjoy your sandwich with your favourite ingriedents");
}
makeSandwich("chicken cubes", "salad leaf", "cucumber", "Mayo");
makeSandwich("chicken", "salad leaf", "cucumber", "chilli sauce", "potato", "Mayo");
