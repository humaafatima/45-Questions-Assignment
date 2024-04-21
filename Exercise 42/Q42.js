//Exercise 42
//Define a function with an array to store magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Eric", "Amun", "Harry", "Danial"];
var great_magicians = make_great(magician_names);
console.log(great_magicians);
