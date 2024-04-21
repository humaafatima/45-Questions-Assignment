var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making array of countries and printing it in its original order
var countriesToVisit = ["Brazil", "London", "Australia", "Zambia", "Palestine"];
console.log("original order:", countriesToVisit);
//Now printing the countries list copy in alphabetical order
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
//the array is in still original order
console.log("Original order:", countriesToVisit);
//print the list copy in reverse order
console.log("Reverse order:", __spreadArray([], countriesToVisit, true).reverse());
//the array is in still original order
console.log("Original order:", countriesToVisit);
//Now printing the original array in reverse order
console.log("Original Order Reversed:", countriesToVisit.reverse());
//Now printing the original array in its original order
console.log("Original Order:", countriesToVisit.reverse());
//print the original array in alphabetical order
console.log("Alphabetical Order:", countriesToVisit.sort());
//Changing the original array in reverse alphabetical order again
console.log("Alphabetical Order Reversed:", countriesToVisit.reverse());
