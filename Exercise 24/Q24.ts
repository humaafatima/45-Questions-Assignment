let karachi = "city";
let upperCase = "KARACHI"

console.log("Is Karachi a city?");

console.log(karachi == "city");

console.log("Is Karachi not a city?");
console.log(karachi != "city");

console.log("Is Karachi equal to Karachi after converting to lowercase?")
console.log(upperCase.toLowerCase() == "karachi");

console.log("Is Karachi equal to Karachi after converting to lowercase?")
console.log(upperCase.toLowerCase() == "KARACHI");

let sixty = "sixty";
console.log("Is sixty equal to sixty?");
console.log(sixty == "sixty");

console.log("Is sixty not equal to sixty?")
console.log(sixty != "sixty");

let nine = 9;
let eleven = 11;

console.log("Is nine equal to 9?");
console.log(nine == 9);

console.log("Is nine not equal to 9?");
console.log(nine != 9);

console.log("Is eleven greater than nine?");
console.log(eleven > nine);

console.log("Is eleven less than nine?");
console.log(eleven < nine);

console.log("Is nine less than or equal to eleven?");
console.log(nine <= eleven);

console.log("Is nine greater than or equal to eleven?");
console.log(nine >= eleven);

let student: string = "Huda Amir";
let Grade: number = 4
console.log(student == "Huda Amir" && Grade == 5);

console.log(student == "Huda Amir" || Grade == 5);

let learners: string = ["Abeer", "Sara", "Samina", "Ali"]
console.log("Is Ali in the students list?");
console.log(learners.includes("Ali"));

console.log("Is Ali not in the students list?");
console.log(!learners.includes("Ali"));