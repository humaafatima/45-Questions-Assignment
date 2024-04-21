var userNames = ["Samreen", "Zaid", "Abeer", "Rubina", "Admin"];
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see the status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thanks for logging in again"));
    }
});
