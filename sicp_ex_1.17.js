function sum(x) {
    return x + x;
}

function is_even(n) {
    return n % 2 === 0;
}

function mult_iter(b, n) {
    function iter(a, b, n) {
        return n === 0
        ? a
        : is_even(n)
        ? iter(a, sum(b), n / 2) 
        : (iter(a + b, b, n - 1)); 
    }
    return iter(0, b, n);
}

display(mult_iter(3, 10)); //30
display(mult_iter(10, 3)); //30
display(mult_iter(3, 3));  //9
display(mult_iter(10, 0)); //0
display(mult_iter(0, 10)); //0
display(mult_iter(2, 14)); //28