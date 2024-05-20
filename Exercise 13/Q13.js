"use strict";
//Exercise13
let myFavCars = ["Toyota Hilux", "Civic", "Kia Sportage", "Toyota Corolla", "Suzuki Cultus"];
myFavCars.forEach(cars => {
    switch (cars) {
        case "Toyota Hilux":
            console.log(`${myFavCars[0]} is a big spacious car.`);
            break;
        case "Civic":
            console.log(`${myFavCars[1]} is a beautiful and spacious car.`);
            break;
        case "Kia Sportage":
            console.log(`${myFavCars[2]} is a beautiful and spacious car.`);
            break;
        case "Toyota Corolla":
            console.log(`${myFavCars[3]} is an old brand with new look.`);
            break;
        case "Suzuki Cultus":
            console.log(`${myFavCars[4]} is a small but luxurious car.`);
            break;
    }
});
