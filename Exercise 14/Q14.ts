//Exercise14

let guests: String[] = ["Rehana", "Fatima", "Tina"];
for(let i=0; i < guests.length; i++) {
console.log(`Hello ${guests[i]}, you are cordially invited for the birthday dinner of my child.`);
};

//Another way of doing it
let guests1 = ["Rehana", "Fatima", "Tina"];
guests1.forEach(guests1invited => console.log(`Hello ${guests1invited}, you are cordially invited for the birthday dinner of my child.`));