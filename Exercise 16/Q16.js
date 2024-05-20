"use strict";
//Creating a guest list array
let guests = ["Rehana", "Fatima", "Tina"];
//Guest who is not coming
let notComing = guests[2];
console.log(`${notComing}, is not able to come to the birthday dinner party.`);
//Removing the guests who is not coming and replacing her with new one
guests.splice(2, 1, 'Amna');
console.log("I have arranged a bigger dinner table so I am inviting three more guests.");
//Adding a new guest in the beginning of the array
guests.unshift("Hina");
//Trying to find out the middle index of the array
let middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, 'Ayesha');
//Adding a new guest in the end of the array
guests.push("Alishba");
guests.forEach(saveGuest => {
    console.log(`${saveGuest} you are cordially invited for the birthday dinner of my child.`);
});
