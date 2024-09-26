function abs(c) {
    return c > 0
    ? c
    : -c;
}

function div(a, b) {
    return b === 0
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

function mod2(x, y) {
    return x === 0 || y === 0
    ? 0
    : x - (div(x, y) * y);
}

display(mod2(13, 5));   // 3
display(mod2(13, -5));  // 3
display(mod2(-13, 5));  // -3
display(mod2(-13, -5)); // -3
display(mod2(3, 5));    // 3
display(mod2(3, -5));   // 3
display(mod2(-3, 5));   // -3
display(mod2(-3, -5));  // -3



function mod(a, b) {
    return b === 0
    ? 'error'
    : abs(b) > abs(a) 
    ? a
    : a < 0 && b > 0
    ? - (mod(a+b, b))
    : b < 0
    ? mod(a, -b)
    : a < 0 && b < 0
    ?- ((mod(a-b, b)))
    : mod(a-b, b);
}
    

display(mod(13, 5));   // 3
display(mod(13, -5));  // 3
display(mod(-13, 5));  // -3
display(mod(-13, -5)); // -3
display(mod(3, 5));    // 3
display(mod(3, -5));   // 3
display(mod(-3, 5));   // -3
display(mod(-3, -5));  // -3