// SICP JS 1.2.6

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
        return expmod(a, n, n) === a;
    }
    return try_it(1 + math_floor(math_random() * (n - 1)));
}

function fast_is_prime(n, times) {
    return times === 0
           ? true
           : fermat_test(n)
           ? fast_is_prime(n, times - 1)
           : false;
}

function timed_prime_test(n) {
    display(n);
    return fast_is_prime(n, get_time());
}

display(timed_prime_test(1009));
display(timed_prime_test(1013));
display(timed_prime_test(1019));
display(timed_prime_test(10007));
display(timed_prime_test(10009));
display(timed_prime_test(10037));
display(timed_prime_test(100003));
display(timed_prime_test(100019));
display(timed_prime_test(100043));
display(timed_prime_test(1000003));
display(timed_prime_test(1000033));
display(timed_prime_test(1000037));