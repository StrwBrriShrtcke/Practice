function square(x) {
    return x * x;
}

function is_even(n) {
    return n % 2 === 0;
}

function expmod(base, exp, m) {
    return exp === 0
           ? 1
           : is_even(exp)
           ? square(expmod(base, exp / 2, m)) % m
           : (base * expmod(base, exp - 1, m)) % m;
}

function random(n) {
    return math_floor(math_random() * n);
}

function fermat_test(n) {
    function try_it(a) {
        return a === n
        ? true
        : try_it(expmod(a, n, n) + 1) === a + 1
    }
    return try_it(1)
}

fermat_test(561);

// function carmichael_number(n) {
//     function test_carmichael_number(exp, counter) {
//         return counter === n 
//         ? true 
//         : counter > 1 && exp !== 1
//     }
// }

//display(carmichael_number(5));
//display(carmichael_number(561));
//display(carmichael_number(1105));
// display(carmichael_number(1729));
// display(carmichael_number(2465));
// display(carmichael_number(2821));
// display(carmichael_number(6601));
// Carmichael numbers
//561, 1105, 1729, 2465, 2821, and 6601