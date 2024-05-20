9//Exercise3
let fullname: string = ("huma Fatima");
console.log(fullname.toUpperCase());
console.log(fullname.toLowerCase());

//changing the name into titlecase
console.log(fullname.replace(/\b\w/g, (char) => char.toUpperCase()));
