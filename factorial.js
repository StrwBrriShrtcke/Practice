// n * (n - 1) * (n - 2) * ... * 1
function factorial(n) {
    return n === 0
    ? 1
    : n * factorial(n -1);
}

// function nZero(n) {
//     return n === 0
//     ? 1
//     : factorial(n);
// }

display(factorial(5));

// n + (n-1) + (n-2) + ... + 1
// function triangle(n) {
//     return n === 1
//     ? 1
//     : n + triangle(n - 1);
// }

// display(triangle(3));