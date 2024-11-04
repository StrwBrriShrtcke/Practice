function pair(x, y) {
    return m => m(x, y);
}
function head(z) {
    return z((p, q) => p);
}

const x = pair(1, 2);
head(x);

function tail(z) {
    return z((p, q) => q);
}

const y = pair(1, 2);
tail(y);