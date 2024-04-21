//Exercise 17
//Creating a guest list array
var guests = ["Rehana", "Fatima", "Tina"];
//Guest who is not coming
var notComing = guests[2];
console.log("".concat(notComing, ", is not able to come to the birthday dinner party."));
//Removing the guests who is not coming and replacing her with new one
guests.splice(2, 1, 'Amna');
console.log("I have arranged a bigger dinner table so I am inviting three more guests.");
//Adding a new guest in the begining of the array
guests.unshift("Hina");
//Trying to find out the middle index of the array
var middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, 'Ayesha');
//Adding the guest in the end of the array
guests.push("Alishba");
guests.forEach(function (saveGuest) {
    console.log("".concat(saveGuest, " you are cordially invited for the birthday dinner of my child."));
});
//Informing our guests that we can only invite two persons for the party
console.log("Sorry, now we can only invite two persons for the dinner because the dinner table couldn't arrive on time.");
//Removing guests through while loop until two guests remain 
while (guests.length > 2) {
    var removeGuest = guests.pop();
    console.log("Sorry, ".concat(removeGuest, " I can not invite you to dinner party."));
}
//Inviting the last two guests now
console.log("Invitations to our last two guests");
guests.forEach(function (lasttwo) {
    console.log("".concat(lasttwo, " you are still invited for the birthday dinner of my child."));
});
//Removing the last two guests and printing the empty list
guests.pop();
guests.pop();
console.log("Here is our empty list now", guests);
