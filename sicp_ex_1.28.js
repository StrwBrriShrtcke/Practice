function square(x) {
    return x * x;
}

function is_even(n) {
    return n % 2 === 0;
}

function expmod(base, exp, m) {
    if (exp === 0) {
        return 1;
    } else if (is_even(exp)) {
        const exponential_modulo = expmod(base, exp / 2, m);
        // return square(expmod(base, exp / 2, m)) % m;
        if (exponential_modulo === 1 || exponential_modulo === m - 1) {
            return 0;
        } else {
            return square(exponential_modulo) % m;
        }
    } else {
        return (base * expmod(base, exp - 1, m)) % m;
    }
    // return exp === 0
    //       ? 1
    //       : is_even(exp)
    //       ? square(expmod(base, exp / 2, m)) % m
    //       : (base * expmod(base, exp - 1, m)) % m;
}

function fermat_test(n) {
    function try_it(a) {
        return expmod(a, n - 1, n) === 0;
    }
    return try_it(1 + math_floor(math_random() * (n - 1)));
}

// function fast_is_prime(n, times) {
//     return times === 0
//           ? true
//           : fermat_test(n)
//           ? fast_is_prime(n, times - 1)
//           : false;
// }

display(fermat_test(8));
//display(fermat_test(561));
//display(fermat_test(3));
//display(fermat_test(5));