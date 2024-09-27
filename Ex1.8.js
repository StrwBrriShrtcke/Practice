
function abs(x) {
    return x >= 0 ? x : - x;
}

function square(x) {
    return x * x;
}

function is_good_enough(guess, newGuess) {
    return abs(-guess + newGuess) / guess < 0.0001;
}

function improve(guess, x) {
    return ((x / (guess * guess) + (guess * 2))) / 3;
}

function sqrt_iter(guess, x) {
    const newGuess = improve(guess,x);
    return is_good_enough(guess, newGuess)
          ? guess
          : sqrt_iter(newGuess, x);
}


display(sqrt_iter(1, 8)); // 2
display(sqrt_iter(1, 27)); // 3
display(sqrt_iter(1, 64)); // 4
display(sqrt_iter(1, 125)); // 5
display(sqrt_iter(4, 4096)); // 5
