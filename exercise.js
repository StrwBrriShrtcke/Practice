function recursive(n) { 
    return n < 3
    ? n
    : recursive(n - 1) + 2 * recursive(n - 2) + 3 * recursive(n - 3);
  
}


display(recursive(0));
display(recursive(1));
display(recursive(2));
display(recursive(3));
display(recursive(4));
display(recursive(5));

// f(n−1)+2f(n−2)+3f(n−3)


// function fib(n) {
//     return n === 0
//           ? 0
//           : n === 1
//           ? 1
//           : fib(n - 1) + fib(n - 2);
// }

// fib(6);