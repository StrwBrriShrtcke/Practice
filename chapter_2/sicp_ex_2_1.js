function numer(x) {
    return head(x);
}
function denom(x) {
    return tail(x);
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function make_rat(n, d) {
    const g = gcd(n, d);
    return d < 0 
    ? make_rat(- n, - d)
    : pair(n / g, d / g);
}

make_rat(4, -6);

//if both num and den is neg make pos, if either den or num is neg, make 
// num neg
