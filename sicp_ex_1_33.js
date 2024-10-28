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
// Relative prime function

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

// Filtered accumulate function
function filtered_accumulate(combiner, null_value, term, a, next, b, 
    filter) {
    function iter(a, accumulated_value) {
        return a > b
        ? accumulated_value
        : filter(a)
        ? iter(next(a), combiner(accumulated_value, term(a)))
        : iter(a + 1, accumulated_value);
    }
    return iter(a, null_value);
}

display(filtered_accumulate((sum, value) => sum  + (value * value), 
0, 
x => x, 
10, 
x => x + 1, 
20, 
is_prime));

display(filtered_accumulate((product, value) => product * value, 
1, 
x => x, 
1, 
x => x + 1, 
10 - 1, 
x => gcd(x, 10) === 1));

// Function that evaluates the product of numbers relatively prime to n 
// and < n
function part_2(n) {
    return filtered_accumulate((product, value) => product * value, 
            1, 
            x => x, 
            1, 
            x => x + 1, 
            n - 1, 
            x => gcd(x, n) === 1);
}
display(part_2(10));
