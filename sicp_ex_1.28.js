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

display(test_all(34));
display(test_all(100));
display(test_all(35));
display(test_all(1105));
display(test_all(2821));
display(test_all(43));
display(test_all(5));
display(test_all(1009));
display(test_all(13));
display(test_all(561));
