// n * (n - 1) * (n - 2) * ... * 1
// function factorial(n) {
//     return n === 0
//     ? 1
//     : n * factorial(n -1);
// }


// display(factorial(5));

// n + (n-1) + (n-2) + ... + 1
// function triangle(n) {
//     return n === 1
//     ? 1
//     : n + triangle(n - 1);
// }

// display(triangle(3));



function triangle(n) {
    function  triangle_iter(product, counter) {
        return counter > n
             ? product
             : triangle_iter(product + counter,
                          counter + 1);
    }
     return triangle_iter(0, 1);
}
triangle(9);
                       
                     