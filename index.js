const kelvin = 293;
//kelvin weather is const as 293

const celsius = kelvin - 273;

//kelvin was - by 273 and used as celsius

let fahrenheit = celsius * (9 / 5) + 32;

// an equation operator is used and as well as to let value
fahrenheit = Math.floor(fahrenheit);

// mathe.floor method is used

console.log(`The temperature is ${fahrenheit} degree fahtenheit.`);
