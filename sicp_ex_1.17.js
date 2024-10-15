function double(x) {
    return x + x;
}

function is_even(n) {
    return n % 2 === 0;
}

function halve(x) {
    return x / 2;
}

function mult_iter(a, b) {
    function iter(a, b) {
        return b === 1
        ? a
        : a === 0 || b === 0
        ? 0
        : is_even(b)
        ? iter(double(a), halve(b)) 
        : a + (iter(a, b - 1)); 
    }
    return iter(a, b);
}

display(mult_iter(3, 8)); //24
display(mult_iter(3, 10)); //30
display(mult_iter(10, 3)); //30
display(mult_iter(3, 3));  //9
display(mult_iter(10, 0)); //0
display(mult_iter(0, 10)); //0
display(mult_iter(2, 14)); //28