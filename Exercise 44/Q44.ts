//Exercise 44
function makeSandwich(...ingridents: string[]) {
    console.log("Making a sandwich with the following items: \n");
    ingridents.forEach(singleingrident => console.log(singleingrident));

    console.log("\"Enjoy your sandwich with your favourite ingriedents");
}

makeSandwich("chicken cubes", "salad leaf", "cucumber", "Mayo");

makeSandwich("chicken", "salad leaf", "cucumber", "chilli sauce", "potato", "Mayo");
