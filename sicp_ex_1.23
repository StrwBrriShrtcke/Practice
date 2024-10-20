function square(x) {
    return x * x;
}

function new_smallest_divisor(n) {
    return new_find_divisor(n, 2);
}

function old_smallest_divisor(n) {
    return old_find_divisor(n, 2);
}

function next(n) {
    return n === 2
    ? 3
    : n + 2;
}

function new_find_divisor(n, test_divisor) {
    return square(test_divisor) > n
           ? n
           : divides(test_divisor, n)
           ? test_divisor
           : new_find_divisor(n, next(test_divisor));
}

function old_find_divisor(n, test_divisor) {
    return square(test_divisor) > n
           ? n
           : divides(test_divisor, n)
           ? test_divisor
           : old_find_divisor(n, test_divisor + 1);
}

function divides(a, b) {
    return b % a === 0;
}

// display(smallest_divisor(1009)); 
// display(smallest_divisor(1013)); 
// display(smallest_divisor(1019)); 
// display(smallest_divisor(10007)); 
// display(smallest_divisor(10009)); 
// display(smallest_divisor(10037)); 
// display(smallest_divisor(100003)); 
// display(smallest_divisor(100019)); 
// display(smallest_divisor(100043)); 
// display(smallest_divisor(1000003)); 
// display(smallest_divisor(1000033)); 
// display(smallest_divisor(1000037)); 

function time_function(f) {
    const start_time = get_time();
    f();
    return get_time() - start_time;
}

function is_new_function_2_times_faster(n) {
    const new_function_time = time_function(() => 
    new_smallest_divisor(n));
    const old_function_time = time_function(() => 
    old_smallest_divisor(n));
    // return math_floor(math_abs(((new_function_time * 2 - 
    //old_function_time) / old_function_time * 100))) < 50;
    return (new_function_time / old_function_time);
}

is_new_function_2_times_faster(1000037);

// when testing for whether the new function is 2 times faster than the 
// old function, the result ranges from 0 to 2. Could possibly be due to 
// other factors such as network and machine.

