//Exercise15 Replacing a guest with new guest
let guests1 = ["Rehana", "Fatima", "Tina"];

let notComing = guests1[2];
console.log(`${notComing}, is not able to come to the birthday dinner party.`);

guests1.splice(2, 1, 'Amna');
for(let i=0; i < guests1.length; i++) {
    console.log(`${guests1[i]}, you are cordially invited for the birthday dinner of my child.`);
    };


