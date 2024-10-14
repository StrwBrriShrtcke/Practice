function fib(n) {
    return n <= 1
    ? n
    : fib(n - 1) + fib(n - 2);
}

function prove(n) {
    return math_round(fib(n)) === 
    math_round(math_pow(((1 + math_sqrt(5)) / 2), n) / math_sqrt(5))
    ? true
    : false;
}

prove(9);