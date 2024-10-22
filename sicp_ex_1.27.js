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

// function fermat_test(n) {
//     function try_it(a) {
//         return a === n
//         ? true
//         : try_it(expmod(a, n, n) + 1) === a + 1;
//     }
//     return try_it(1);
// }

// function fermat_test(n) {
//     function try_it(a) {
//         return a === n || expmod(a, n, n) === a
//         ? true
//         : try_it(a + 1);
//     }
//     return try_it(2);
// }

function fermat_test(n) {
    function try_it(a) {
        return a === n || expmod(a, n, n) === a && try_it(a + 1);
    }
    return try_it(2);
}

//fermat_test(561);
//fermat_test(6);

// function carmichael_number(n) {
//     function test_carmichael_number(exp, counter) {
//         return counter === n 
//         ? true 
//         : counter > 1 && exp !== 1
//     }
// }

display(fermat_test(5));
display(fermat_test(561));
display(fermat_test(1105));
display(fermat_test(1729));
display(fermat_test(2465));
display(fermat_test(2821));
display(fermat_test(6601));
// Carmichael numbers
//561, 1105, 1729, 2465, 2821, and 6601