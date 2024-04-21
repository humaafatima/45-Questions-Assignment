//Define a function with an array to store magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Eric", "Amun", "Harry", "Danial"];
//Making a copy of original array of magicians
var copy_magician_names = magician_names.slice();
//Modify the copied array to add The Great with their names
var copy_great_magicians = make_great(copy_magician_names);
show_magicians(magician_names);
show_magicians(copy_great_magicians);
