function square(x) {
    return x * x;
}

function is_even(n) {
    return n % 2 === 0;
}

function expn_iter(b, n) {
    function iter(a, b, n) {
        return n === 0
        ? a
        : is_even(n)
        ? iter(a, square(b), n / 2) 
        : iter(a * b, b, n - 1); 
    }
    return iter(1, b, n);
}

display(expn_iter(3, 10)); //59049
display(expn_iter(10, 3));//1000
display(expn_iter(3, 3));//1000
display(expn_iter(10, 0)); // 1
display(expn_iter(0, 10)); //0
display(expn_iter(2, 14)); //16384



