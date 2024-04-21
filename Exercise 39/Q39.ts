//Exercise 39
//creating a funtion which returns the value in a string
function city_country(city: string, country: string) : string{
    return `${city}, ${country}`;
}


//calling a function and printing the returned value
console.log(city_country("Ottawa", "Canada"));
console.log(city_country("Kabul", "Afghanistan"));
console.log(city_country("Baghdad", "Iraq"));
