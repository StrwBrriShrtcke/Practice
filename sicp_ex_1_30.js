function cube(x) {
    return x * x * x;
}

function sum_iter(term, a, next, b) {
    function iter(a, sum) {
        return a > b
        ? sum
        : iter(next(a), term(a) + sum);
    }
    return iter(a, 0);
}

function inc(n) {
    return n + 1;
}
function sum_cubes(a, b) {
    return sum_iter(cube, a, inc, b);
}

sum_cubes(1, 10);