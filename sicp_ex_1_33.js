function expmod(base, exp, m) {
    if (exp === 0) {
        return 1;
    } else if (exp % 2 === 0) {
        const exponential_modulo = expmod(base, exp / 2, m);
        if (exponential_modulo === 1 || exponential_modulo === m - 1) {
            return 0;
        } else {
            return (exponential_modulo * exponential_modulo) % m;
        }
    } else {
        return (base * expmod(base, exp - 1, m)) % m;
    }
}

function miller_rabin_test(n, a) {
    return expmod(a, n - 1, n) === 0;
}

function test_all(n) {
    function iter_test_all(a) {
        return miller_rabin_test(n, a) && (a === n - 2 || 
        iter_test_all(a + 1));
    }
    return iter_test_all(2); 
}

display(test_all(4));

// function accumulate(combiner, null_value, term, a, next, b) {
//     function iter(a, accumulated_value) {
//         return a > b
//         ? accumulated_value
//         : iter(next(a), combiner(accumulated_value, term(a)));
//     }
//     return iter(a, null_value);
// }
function filtered_accumulate(combiner, null_value, term, a, next, b, 
    filter) {
    function iter(a, accumulated_value) {
        return a > b
        ? accumulated_value
        : !filter(a)
        ? iter(a + 1, accumulated_value)
        : iter(next(a), combiner(accumulated_value, term(a)));
    }
    return iter(a, null_value);
}

display(filtered_accumulate((sum, value) => sum + value, 0, x => x, 10, x => x + 1, 30, test_all));