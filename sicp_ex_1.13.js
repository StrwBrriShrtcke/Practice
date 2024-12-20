function fib(n) {
    return n <= 1
    ? n
    : fib(n - 1) + fib(n - 2);
}

const sqrt_of_5 = math_sqrt(5);
const phi = (1 + sqrt_of_5) / 2;

function prove(n) {
    return fib(n) === 
    math_round(math_pow(phi, n) / sqrt_of_5);
}

prove(9);