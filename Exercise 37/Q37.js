function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love TypeScript"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(printMessage, " print on shirt"));
}
//calling a function with bydefault values
make_shirt();
//calling a function with Medium size and default message
make_shirt("Medium");
//calling a function with different size and different message
make_shirt("Small", "I love programming");
