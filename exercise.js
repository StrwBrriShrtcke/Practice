// function recursive_function(n) { 
//     return n < 3
//     ? n
//     : recursive_function(n - 1) + 2 * recursive_function(n - 2) 
//     + 3 * recursive_function(n - 3);
// }


// display(recursive_function(0)); //0
// display(recursive_function(1)); //1
// display(recursive_function(2)); //2
// display(recursive_function(3)); //4
// display(recursive_function(4)); //11
// display(recursive_function(5)); //25


function iterative_function(n) {
    function iter(a, b, c, counter) {
        //  display("a:" + stringify(a) + " b:" + stringify(b) + " c:" + stringify(c) 
        //  + " counter:" + stringify(counter));
        return counter < 1
        ? c
        : iter(a + 2 * b + 3 * c, a, b, counter - 1);
    }
    return iter(2, 1, 0, n);
}

display(iterative_function(0)); //0
display(iterative_function(1)); //1
display(iterative_function(2)); //2
display(iterative_function(3)); //4
display(iterative_function(4)); //11
display(iterative_function(5)); //25

// f(n−1)+2f(n−2)+3f(n−3)


// function fib(n) {
//     return n === 0
//           ? 0
//           : n === 1
//           ? 1
//           : fib(n - 1) + fib(n - 2);
// }

// fib(6);