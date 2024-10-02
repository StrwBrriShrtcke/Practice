function abs(x) {
    return x > 0
    ? x
    : -x;
}

// function div(a, b) {
//     return a === 0
//     ? 0
//     : b > a && a > 0
//     ? 0
//     : abs(a) < b
//     ? 0
//     : a < 0
//     ? -(1 + div(-a - b, b))
//     : b < 0
//     ? div(-a, -b)
//     :1 + div(a-b, b);
// }

function div(a, b) {
    return a === 0 || b === 0
    ? 'divide by zero error'
    : b > a && a > 0
    ? 0
    : abs(a) < b
    ? 0
    : a < 0
    ? -(1 + div(-a - b, b))
    : b < 0
    ? div(-a, -b)
    :1 + div(a-b, b);
}

display(div(16, 3));
display(div(16, -3));
display(div(-16, 3));
display(div(-16, -3));
display(div(2, 3));
display(div(2, -3));
display(div(-2, 3));
display(div(-2, -3));
display(div(0, 3));
display(div(3, 0));