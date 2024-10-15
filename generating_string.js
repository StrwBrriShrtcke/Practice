//Funciton of fib
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



//Function of Pascal
function pascal_triangle(row, column) {
        return column === row || column === 1 || row <= 2
        ? 1
        : column > row || column < 1 || row < 1
        ? "out of bounds"
        : pascal_triangle(row - 1, column) +  pascal_triangle(row - 1, column - 1);
}

// display(pascal_triangle(3, 3));
// display(pascal_triangle(3, 2));
// display(pascal_triangle(3, 1));

// display(fib(0));
// display(fib(1));
// display(fib(2));
// display(fib(3));
// display(fib(4));
// display(fib(5));
//generate period 50 times
// function fiftyperiods() {
//     function iter(period, n) {
//         return n === 0
//         ? period
//         : iter(period + ".", n - 1);
//     }
//     return iter(".", 50);
// }    

// fiftyperiods();



//generate period n times
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



//generate 0 to n with spacings
// function generate_to_n_with_spacing(n) {
//     function iter(string, counter) {
//         return counter === n
//         ? string
//         : counter < 1
//         ? iter(string + stringify(counter), counter + 1)
//         : iter(string + " " + stringify(counter), counter + 1);
//     }
//     return iter("", 0);
// }

// generate_to_n_with_spacing(5);


// generate fib with space
// function generate_fib_with_space(sequence_of_fib) {
//     function iter(sequence, counter) {
//         return counter === sequence_of_fib
//         ? sequence
//         : counter < 1
//         ? iter(sequence + stringify(fib(counter)), counter + 1)
//         : iter(sequence + " " + stringify(fib(counter)), counter + 1);
//     }
//     return iter("", 0);
// }

// display(generate_fib_with_space(5));



// generate pascal with space
function generate_pascal_with_space_row(row, column) {
    function iter(sequence, counter) {
        return counter > row 
        ? sequence
        : counter < 2
        ? iter(sequence + stringify(pascal_triangle(row, counter)), counter + 1)
        : iter(sequence + " " + stringify(pascal_triangle(row, counter)), counter + 1);
    }  
    return iter("", 1);
}



function pascal_n_rows(row, column) {
    function iter(sequence, counter) {
        return counter > row
        ? sequence
        : iter(display(generate_pascal_with_space_row(counter, column)), counter + 1);
    }
    return iter("", 1);
}

pascal_n_rows(8, 0);

