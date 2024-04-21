//Exercise14
var guests = ["Rehana", "Fatima", "Tina"];
for (var i = 0; i < guests.length; i++) {
    console.log("Hello ".concat(guests[i], ", you are cordially invited for the birthday dinner of my child."));
}
;
//Another way of doing it
var guests1 = ["Rehana", "Fatima", "Tina"];
guests1.forEach(function (guests1invited) { return console.log("Hello ".concat(guests1invited, ", you are cordially invited for the birthday dinner of my child.")); });
