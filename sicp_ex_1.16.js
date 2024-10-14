function is_even(n) {
    return n % 2 === 0;
}

function expn_iter(b, n) {
    function iter(a, b, n) {
        return n === 1
        ? a
        : is_even(n)
        ? iter(b * b, a, n / 2)
        : a * iter(b * b, a, n - 1);
    }
    return iter(1, b, n);
}

expn_iter(4, 3);