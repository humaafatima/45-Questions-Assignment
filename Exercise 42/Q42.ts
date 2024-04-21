//Exercise 42
//Define a function with an array to store magicians names
function show_magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]) {
    return magicians.map(name => `The Great ${name}`);
}

let magician_names = ["Eric", "Amun", "Harry", "Danial"];

let great_magicians = make_great(magician_names);

console.log(great_magicians);