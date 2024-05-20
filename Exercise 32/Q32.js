"use strict";
//Exercise 32
let current_users = ["Ali", "Anila", "TALHA", "Nida", "Rabiya"];
let new_users = ["Shan", "Inaya", "Naila", "NIDa", "Talha"];
new_users.forEach(checkNewUser => {
    let our_condition = (current_users.some(currentAlreadyUser => currentAlreadyUser.toLowerCase() === checkNewUser.toLowerCase()));
    if (our_condition) {
        console.log(`sorry ${checkNewUser} is already taken`);
    }
    else {
        console.log(`This Username ${checkNewUser} is available`);
    }
});
