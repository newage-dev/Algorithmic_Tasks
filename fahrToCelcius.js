function convertFahrToCelcius(fahrenheit) {
    let fahr_converted = +fahrenheit;
    
    if(Number.isNaN(fahr_converted)) {
      return Array.isArray(fahrenheit) ?
        `${fahrenheit} is not a valid number but a/an array.` :
        `${fahrenheit} is not a valid number but a/an ${typeof fahrenheit}.`;
    }
    
    let celcius = (fahr_converted - 32) * (5 / 9);
    return celcius.toFixed(4);
}
  
  
// convertFahrToCelcius([1,2,3]);
// convertFahrToCelcius(0);
// convertFahrToCelcius("0");
// convertFahrToCelcius("hgsd");
// convertFahrToCelcius("0.544");
// convertFahrToCelcius(undefined);
// convertFahrToCelcius(null);
// convertFahrToCelcius({ "temp" : 0 });