var userNames = ["Samreen", "Zaid", "Abeer", "Admin", "Hina"];
userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some users");
}
else {
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see the status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thanks for logging in again"));
        }
    });
}
