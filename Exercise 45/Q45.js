"use strict";
//Defining a function with car object in it
function create_car(manufacturer, model, ...options) {
    //Initialize a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    //Add additional options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}
//Call the function to create a car object
let my_car = create_car("Toyota", "Corolla", "color: Black", "Sunroof: True");
console.log(my_car);
