//Function that checks the whether the the integer n is a prime number, and 
// the time taken to evaluate this
function square(x) {
    return x * x;
}

function smallest_divisor(n) {
    return find_divisor(n, 2);
}

function find_divisor(n, test_divisor) {
    return square(test_divisor) > n
           ? n
           : divides(test_divisor, n)
           ? test_divisor
           : find_divisor(n, test_divisor + 1);
}
function divides(a, b) {
    return b % a === 0;
}

function is_prime(n) {
    return n === smallest_divisor(n);
}

function timed_prime_test(n) {
    display(n);
    return start_prime_test(n, get_time());
}

function start_prime_test(n, start_time) {
    return is_prime(n)
          ? report_prime(get_time() - start_time)
          : false;
}

function next_odd(n) {
    return n % 2 === 0
    ? n + 1
    : n;
}

function report_prime(elapsed_time) {
    display(" *** ");
    display(elapsed_time);
    return true;
}



// Function for searching for the first 3 prime 
// numbers in a range of numbers
function search_for_prime(start, end) {
    function first_three_prime(primes, counter, test_number) {
        return counter === 3 || test_number > end 
        ? primes
        : is_prime(test_number)
        ? first_three_prime(counter <= 1
            ? primes + stringify(test_number) + " " 
            : primes + stringify(test_number), 
              counter + 1, test_number + 2)
        : first_three_prime(primes,counter, test_number + 2);
    }
    return first_three_prime("", 0, next_odd(start));
}


display(search_for_prime(1000, 2000));//1009, 1013, 1019
display(search_for_prime(10000, 20000));//10007, 10009, 10037
display(search_for_prime(100000, 200000));//100003, 100019, 100043
display(search_for_prime(1000000, 2000000));//1000003, 1000033, 1000037
display(search_for_prime(100, 105));//" 101, 103"

// Function that calculates time taken to execute another function
function time_function(f) {
    const start_time = get_time();
    f();
    return get_time() - start_time;
}

// Function that checks if the time taken for calculating the first 
// 3 prime numbers for a range of 1000000 to 2000000 takes sqrt 10 
// times longer than calculating for a range of 100000 to 200000 
// with a tolerance of 50
function is_order_of_growth_log(first_start, first_end, second_start, second_end) {
    const first_number = time_function(() => 
    search_for_prime(first_start, first_end));
    const second_number = time_function(() => 
    search_for_prime(second_start, second_end));
    return math_floor(math_abs(((first_number * math_sqrt(10) - 
    second_number) / second_number * 100))) < 50;
}

is_order_of_growth_log(100000, 200000, 1000000, 2000000);


