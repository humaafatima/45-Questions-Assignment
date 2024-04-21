//Making array of countries and printing it in its original order
let countriesToVisit: string[] = ["Brazil", "London", "Australia", "Zambia", "Palestine"];
console.log("original order:", countriesToVisit);

//Now printing the countries list copy in alphabetical order
console.log("Alphabetical Order:", [...countriesToVisit].sort());

//the array is in still original order
console.log("Original order:",  countriesToVisit);

//print the list copy in reverse order
console.log("Reverse order:",  [...countriesToVisit].reverse());

//the array is in still original order
console.log("Original order:",  countriesToVisit);

//Now printing the original array in reverse order
console.log("Original Order Reversed:", countriesToVisit.reverse());

//Now printing the original array in its original order
console.log("Original Order:", countriesToVisit.reverse());

//print the original array in alphabetical order
console.log("Alphabetical Order:", countriesToVisit.sort());

//Changing the original array in reverse alphabetical order again
console.log("Alphabetical Order Reversed:", countriesToVisit.reverse());




