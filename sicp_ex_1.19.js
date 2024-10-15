

function fib(n) {
    return fib_iter(1, 0, 0, 1, n);
}
function fib_iter(a, b, p, q, count) {
    return count === 0
          ? b
          : count % 2 === 0
          ? fib_iter(a,
                      b, p * p + q * q, 2 * p * q + q * q, 
                      count / 2)
          : fib_iter(b * q + a * q + a * p,
                      b * p + a * q,
                      p,
                      q,
                      count - 1);
}

display(fib(0));
display(fib(1));
display(fib(3));
display(fib(8));
display(fib(9));
display(fib(10));

