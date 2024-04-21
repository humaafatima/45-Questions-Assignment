//Exercise15 Replacing a guest with new guest
var guests1 = ["Rehana", "Fatima", "Tina"];
var notComing = guests1[2];
console.log("".concat(notComing, ", is not able to come to the birthday dinner party."));
guests1.splice(2, 1, 'Amna');
for (var i = 0; i < guests1.length; i++) {
    console.log("".concat(guests1[i], ", you are cordially invited for the birthday dinner of my child."));
}
;
