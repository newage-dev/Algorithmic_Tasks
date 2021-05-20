function checkYuGiOh(n) {
  let converted_n = +n;

  if(Number.isNaN(converted_n)) {
    return `Invalid parameter: ${n}`;

  } else {
    let numbers = [], i = 1;

    while(i <= n) {
      numbers.push(i);
      i++;
    }

    numbers = numbers.map(number => {
      if(number % 2 === 0) {
        if(number % 3 === 0) {
          if(number % 5 === 0) {
            return number = "yu-gi-oh";
          } else {
            return number = "yu-gi";
          }
        } else {
          if(number % 5 === 0) {
            return number = "yu-oh";
          } else {
            return number = "yu";
          }
        }
      } else if(number % 3 === 0) {
        if(number % 5 === 0) {
          return number = "gi-oh";
        } else {
          return number = "gi";
        }
      } else if(number % 5 === 0) {
        return number = "oh";
      } else { 
        return number; 
      }
    })

    return numbers;
  }
}

// checkYuGiOh("fizzbuzz is meh")
// checkYuGiOh(10)
// checkYuGiOh(true)
// checkYuGiOh({ temp : 25 })
// checkYuGiOh("45")