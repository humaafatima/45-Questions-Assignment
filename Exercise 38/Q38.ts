//Exercise 38
function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

//calling the function
describe_city("Karachi");
describe_city("Lahore");
describe_city("Bern", "Switzerland");
