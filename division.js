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

// function div(a, b) {
//     return a === 0 || b === 0
//     ? 'divide by zero error'
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






















function div2(a, b) {
    const absB = math_abs(b);
    function iter(remainder, counter) {
        return math_abs(remainder)< absB
        ? counter 
        : iter(math_abs(remainder) - absB, counter + 1);
        
    }
    return b === 0 
    ? error(b, "number cannnot be divided by") 
    : a < 0 && b < 0 
    ? iter(a, 0) 
    : b < 0 ? -(iter(a, 0)) : a < 0 
    ? -(iter(a, 0)) : iter(a, 0);
}

display(div2(16, 3)); //5
display(div2(16, -3)); // -5
display(div2(-16, 3)); // -5
display(div2(-16, -3)); //5
display(div2(2, 3)); //0
display(div2(2, -3)); //0
display(div2(-2, 3)); //0
display(div2(-2, -3)); //0
display(div2(0, 3)); // 0
display(div2(3, 0)); // error