//Exercise 31
let userNames = ["Samreen", "Zaid", "Abeer", "Admin", "Hina"];

userNames = []
if (userNames.length === 0) {
console.log("We need to find some users");
}

else {
userNames.forEach(oneUser => {
    if(oneUser === "Admin") {
        console.log(`Hello ${oneUser}, would you like to see the status report?`);
    
}

else {
    console.log(`Hello ${oneUser}, thanks for logging in again`);
}})}