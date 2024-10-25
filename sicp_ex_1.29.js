function sum(term, a, next, b) {
    return a > b
           ? 0
           : term(a) + sum(term, next(a), next, b);
}

const cube = x => x * x * x;

function simpson_integral(f, a, b, n) {
    const h = (b - a) / n;
    const multiple_of_y = k => k === 0 || k === n 
    ? 1 : k % 2 === 0 ? 2 : 4;
    return (h / 3) * sum(k => f(a + k * h) * multiple_of_y(k), 
    0, 
    k => k + 1, 
    n);
    //k => k + 1 is an anonymous function 
}

display(simpson_integral(cube, 0, 1, 100));
display(simpson_integral(cube, 0, 1, 1000));