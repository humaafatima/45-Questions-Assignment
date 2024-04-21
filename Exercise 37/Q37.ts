function make_shirt (size: string = "Large", printMessage: string = "I love TypeScript") {
console.log(`creating a ${size} shirt with the ${printMessage} print on shirt`);
}
//calling a function with bydefault values
make_shirt();

//calling a function with Medium size and default message
make_shirt("Medium")

//calling a function with different size and different message
make_shirt("Small", "I love programming")