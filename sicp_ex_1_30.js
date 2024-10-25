function sum(term, a, next, b) {
    return a > b
           ? 0
           : term(a) + sum(term, next(a), next, b);
}

function sum_iter(term, a, next, b) {
    function iter()
}