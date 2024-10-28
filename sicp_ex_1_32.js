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
        : iter(next(a), sum + term(a));
    }
    return iter(a, 0);
}

// function accumulate(combiner, null_value, term, a, next, b) {
//     function iter(a, accumulated_value) {
//         display(accumulated_value);
//         return a > b
//         ? accumulated_value
//         : iter(next(a), combiner(accumulated_value, term(a)));
//     }
//     return iter(a, null_value);
// }

function accumulate_recur(combiner, null_value, term, a, next, b) {
    display(term);
    return a > b
    ? null_value
    : combiner(null_value, 
    accumulate_recur(combiner, 
    term(a), 
    term, 
    next(a), 
    next, 
    b));
}

// 1 + 2 + 3 + ...+ 10
display(accumulate_recur((sum, value) => {
    //display(sum);
    //display(value);
    return sum + value;
    
}, 
    0, 
    x => x, //term
    1, 
    x => x + 1, 
    10));
// 10 * 20 * 30 *...* 100
//display(accumulate((product, value) => product * value, 1, x => x, 10, x => x + 10, 100));
// "2468101214161820"
//display(accumulate((string, value) => string + value, "", stringify,
//2, x => x + 2, 20));
//100 - 1 - 2 - 3 -... - 10
// display(accumulate_recur((x, y) =>  x - y, 100, x => x, 1,
// x => x + 1, 10));