
function abs(x) {
    return x >= 0 ? x : - x;
}

function is_good_enough(guess, newGuess) {
    return abs(-guess + newGuess) / guess < 0.00000001;
}

function improvedCube(guess, x) {
    return (x / (guess * guess) + (guess * 2)) / 3;
}

function cube_iter(guess, x) {
    const newGuess = improvedCube(guess,x);
    return is_good_enough(guess, newGuess)
          ? guess
          : cube_iter(newGuess, x);
}

function cube(x) {
    return cube_iter(1, x);
}

display(cube(8)); // 2
display(cube(27)); // 3
display(cube(64)); // 4
display(cube(125)); // 5
display(cube(4096)); // 16
