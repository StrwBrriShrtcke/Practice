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

function timed_prime_test(n, times) {
    display(n);
    return start_prime_test(n, times, get_time());
}

function start_prime_test(n, times, start_time) {
    return fast_is_prime(n, times)
          ? report_prime(get_time() - start_time)
          : false;
}

function report_prime(elapsed_time) {
    display(" *** ");
    display(elapsed_time);
    return true;
}

display(timed_prime_test(1009, 1));
// display(timed_prime_test(1013, 50));
// display(timed_prime_test(1019, 50));
// display(timed_prime_test(10007, 50));
// display(timed_prime_test(10009, 50));
// display(timed_prime_test(10037, 50));
// display(timed_prime_test(100003, 50));
// display(timed_prime_test(100019, 50));
// display(timed_prime_test(100043, 50));
// display(timed_prime_test(1000003, 50));
// display(timed_prime_test(1000033, 50));
display(timed_prime_test(1000037, 1));

// The time taken to evaluate to evaluate 1009 is 0ms while time taken to 
// evaluate 1000037 is 1ms. With the limited data we currently have, 
// we are unable to conclude that using fermat_test has logn growth.