var current_users = ["Ali", "Anila", "talha", "Nida", "Rabiya"];
var new_users = ["Shan", "Inaya", "Naila", "Nida", "Talha"];
new_users.forEach(function (checkNewUser) {
    var our_condition = (current_users.some(function (currentAlreadyUser) { return currentAlreadyUser.toLowerCase() === checkNewUser.toLowerCase(); }));
    if (our_condition) {
        console.log("sorry ".concat(checkNewUser, " is already taken"));
    }
    else {
        console.log("This Username ".concat(checkNewUser, " is available"));
    }
});
