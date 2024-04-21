//Exercise 30
let userNames = ["Samreen", "Zaid", "Abeer", "Rubina", "Admin"];

userNames.forEach(oneUser => {
    if(oneUser === "Admin") {
        console.log(`Hello ${oneUser}, would you like to see the status report?`);
    
}

else {
    console.log(`Hello ${oneUser}, thanks for logging in again`);
}})
