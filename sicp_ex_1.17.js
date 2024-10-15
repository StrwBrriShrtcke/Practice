function double(x) {
    return x + x;
}

function is_even(n) {
    return n % 2 === 0;
}

function halve(x) {
    return x / 2;
}

function mult_fast(a, b) {
    return b === 0 || a === 0
    ? 0
    : is_even(b)
    ? double(mult_fast(a, halve(b))) 
    : a + mult_fast(a, b - 1); 
}

display(mult_fast(3, 8));  //24
display(mult_fast(3, 10)); //30
display(mult_fast(10, 3)); //30
display(mult_fast(3, 3));  //9
display(mult_fast(10, 0)); //0
display(mult_fast(0, 10)); //0
display(mult_fast(2, 14)); //28


// function fast_expt(b, n) {
//     return n === 0
//           ? 1
//           : is_even(n)
//           ? square(fast_expt(b, n / 2))
//           : b * fast_expt(b, n - 1);
// }




