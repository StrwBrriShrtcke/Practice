function abs(x) {
    return x >= 0 ? x : - x;
}

function square(x) {
    return x * x;
}

function is_good_enough(guess, newGuess) {
    return abs(-guess + newGuess) / guess < 0.00001;
}

function average(x, y) {
    return (x + y) / 2;
}

function improve(guess, x) {
    return average(guess, x / guess);
}

function sqrt_iter(guess, x) {
    const newGuess = improve(guess,x);
    return is_good_enough(guess, newGuess)
          ? guess
          : sqrt_iter(newGuess, x);
}




// is_good_enough is not effective for finding the square roots of very 
// small numbers because its condition is satisfied once the difference 
// between radicand and our guess is less than 0.001. This means that for
// numbers smaller than 0.001 our guess will likely satisfy the 
// is_good_enough condition and be computed as the square root of the 
// radicand despite being inaccurate.

// display(sqrt_iter(0.001, 0.0002)); //0.01414...
// display(sqrt_iter(0.01, 0.005)); //0.0707
// display(sqrt_iter(0.02, 0.003)); //0.05477...
// display(sqrt_iter(0.03, 0.0009)); // 0.03
// display(sqrt_iter(0.001, 0.000678)); //0.0260384

// when trying to find the sqrt of 0.0002, the above function computes the
// answer as the guess as the final answer as the difference between the
// radicant and each of the above guesses is less than 0.001 as the number
// is very small, hence making it ineffective for finding the square roots 
// of very small numbers.


display(sqrt_iter(2, 16));
// display(sqrt_iter(10000, 345345345345345)); // 18583469...
// display(sqrt_iter(10000, 678678678678678)); // 26051462...

// const change_of_guess = abs(new_guess - old_guess);
// const fraction_of_guess = change_of_guess / old_guess;


function parent() {
  const someData = 5 + 5;
  return 2 + childThatProcessesSomeData(someData);
}

function childThatProcessesSomeData(someDataThatINeed) {
  // Do something with someDataThatINeed
  return someDataThatINeed + 1;
}


// function parent() {
//   const someData = 5 + 5;
//   return 2 + is_good_enough(someData);
// }

// function is_good_enough(someDataThatINeed) {
//   // Do something with someDataThatINeed
//   return someDataThatINeed + 1;
// }
