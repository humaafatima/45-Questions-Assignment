9; //Exercise3
var fullname = ("huma Fatima");
console.log(fullname.toUpperCase());
console.log(fullname.toLowerCase());
//changing the name into titlecase
console.log(fullname.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
