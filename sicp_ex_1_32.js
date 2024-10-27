// Product function
function product_iter(term, a, next, b) {
    function iter(a, product) {
        return a > b
        ? product
        : iter(next(a), term(a) * product);
    }
    return iter(a, 1);
}

// Sum function
function sum_iter(term, a, next, b) {
    function iter(a, sum) {
        return a > b
        ? sum
        : iter(next(a), term(a) + sum);
    }
    return iter(a, 0);
}
