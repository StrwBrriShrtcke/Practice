

// function fib(n) {
//     return fib_iter(1, 0, 0, 1, n);
// }
// function fib_iter(a, b, p, q, count) {
//     return count === 0
//           ? b
//           : count % 2 === 0
//           ? fib_iter(a,
//                       b, p * p + q * q, 2 * p * q + q * q, 
//                       count / 2)
//           : fib_iter(b * q + a * q + a * p,
//                       b * p + a * q,
//                       p,
//                       q,
//                       count - 1);
// }

// display(fib(0));
// display(fib(1));
// display(fib(3));
// display(fib(8));
// display(fib(9));
// display(fib(10));

// function generate_fib(n) {
//     function n_times(n, count) {
//         return count === 0
//         ? stringify(0)
//         : n_times(stringify(fib(n - 1)) + " ", count - 1);
//     }
//     return n_times(n, n);
// }

// generate_fib(6);

// stringify(fib(6)) + " ";

//generate . 50 times
// function fiftyperiods() {
//     function iter(period, n) {
//         return n === 0
//         ? period
//         : iter(period + ".", n - 1);
//     }
//     return iter(".", 50);
// }    

// fiftyperiods();

//generate . n times
// function nperiods(n) {
//     function iter(period, n) {
//         return n === 0
//         ? period
//         : iter(period + ".", n - 1);
//     }
//     return iter("", n);
// }    

// nperiods(5);


//generate 0 to n

// function generate_to_n(n) {
//     function iter(string, counter) {
//         return counter === n
//         ? string
//         : iter(string + stringify(counter), counter + 1);
//     }
//     return iter("", 0);
// }

// generate_to_n(5);


function generate_to_n_with_spacing(n) {
    function iter(string, counter) {
        return counter === n
        ? string
        : counter < 1
        ? iter(string + stringify(counter), counter + 1)
        : iter(string + " " + stringify(counter), counter + 1);
    }
    return iter("", 0);
}

generate_to_n_with_spacing(5);


// generate fib with space


// generate pascal with space


