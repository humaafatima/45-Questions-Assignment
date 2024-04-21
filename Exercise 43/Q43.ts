//Exercise 43
//Define a function with an array to store magicians names
function show_magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]) {
    return magicians.map(name => `The Great ${name}`);
}

let magician_names = ["Eric", "Amun", "Harry", "Danial"]

//Making a copy of original array of magicians

let copy_magician_names = magician_names.slice();

//Modify the copied array to add The Great with their names
let copy_great_magicians = make_great(copy_magician_names);

show_magicians(magician_names);

show_magicians(copy_great_magicians);