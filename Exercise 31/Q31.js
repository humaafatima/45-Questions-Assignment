"use strict";
//Exercise 31
//First Version
let userNames = ["Samreen", "Zaid", "Abeer", "Admin", "Hina"];
if (userNames.length == 0) {
    console.log("We need to find more users");
}
else {
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see the status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thanks for logging in again.`);
        }
    });
}
;
//Second Version
for (let i = 0; i < 5; i++) {
    userNames.pop();
}
if (userNames.length == 0) {
    console.log("Our array is empty, we need to find more users");
}
else {
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see the status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thanks for logging in again.`);
        }
    });
}
;
console.log(userNames);
