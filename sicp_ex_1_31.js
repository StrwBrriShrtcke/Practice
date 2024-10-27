// Defining Factorial
function product_iter(term, a, next, b) {
    function iter(a, product) {
        return a > b
        ? product
        : iter(next(a), term(a) * product);
    }
    return iter(a, 1);
}

function factorial(b) {
    return product_iter(x => x, 1, a => a + 1, b);
}

// factorial(7);

// approximate pi
// function approximate_pi_1(n) {
//     display("numerator");
//     const numerator = 2 * product_iter(x => x * x, 4, a => a + 2, n);
//     display("denominator");
//     const denominator = product_iter(x => x * x, 3, a => a + 2, n);
//     return n % 2 !== 0
//     ? (numerator * (n + 1) / denominator) * 4
//     : (numerator / (denominator * (n + 1))) * 4;
// }
// display(approximate_pi_1(99));
// display(approximate_pi(18));
// display(approximate_pi(19));
// display(approximate_pi(20));

// approximating pi using a recursive process
function product_recur(term, a, next, b) {
    return a > b
    ? 1
    : term(a) * product_recur(term, next(a), next, b);
}

// Approximating pi using an iterative process
function approximate_pi(n) {
    function get_fraction(i) {
        const numerator = (1 + math_floor(i / 2)) * 2;
        const denominator = i % 2 === 0 ? numerator - 1 : numerator + 1;
        return numerator / denominator;
    }
    display(product_iter(get_fraction, 1, i => i + 1, n) * 4);
    return product_recur(get_fraction, 1, i => i + 1, n) * 4;
}

approximate_pi(99);
