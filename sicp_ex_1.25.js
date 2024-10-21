
function fast_expt(b, n) {
    return n === 0
          ? 1
          : is_even(n)
          ? square(fast_expt(b, n / 2))
          : b * fast_expt(b, n - 1);
}

function expmod(base, exp, m) {
    return fast_expt(base, exp) % m;
}

// function expmod(base, exp, m) {
//     return exp === 0
//           ? 1
//           : is_even(exp)
//           ? square(expmod(base, exp / 2, m)) % m
//           : (base * expmod(base, exp - 1, m)) % m;
// }

function square(x) {
    return x * x;
}

function is_even(n) {
    return n % 2 === 0;
}

function random(n) {
    return math_floor(math_random() * n);
}

function fermat_test(n) {
    function try_it(a) {
        return expmod(a, n, n) === a;
    }
    return try_it(1 + math_floor(math_random() * (n - 1)));
}

function fast_is_prime(n, times) {
    return times === 0
           ? true
           : fermat_test(n)
           ? fast_is_prime(n, times - 1)
           : false;
}

display(fast_is_prime(2, 3));
display(fast_is_prime(3, 3));
display(fast_is_prime(5, 3));
display(fast_is_prime(7, 3));
display(fast_is_prime(11, 3));
display(fast_is_prime(13, 3));
display(fast_is_prime(17, 3));
display(fast_is_prime(47, 3));
display(fast_is_prime(79, 3));
display(fast_is_prime(97, 3));

// The main difference in the code written by Alicia and the original
// code is that in Alicia's code, % is performed once at the end of the 
// evaluation after squaring all the numbers, making it seem more 
// efficient at first. 

// Out of curiosity I decided to test the limitations of Alicia's code
// in which I found that for prime numbers between 2-13, her code works well,
// however starting form 17, there began to be some inconsistencies where her
// code will sometimes evaluate fast_is_prime(17, 3) as true and other times
// as false. In testing even larger prime numbers, I found that Alicia's code 
// consistently returned false.

// When running Alicia's code, I found that in the case of evaluating whether 
// a large number was prime, found that when the program was performing
// the square function, the number had become so large that
// the it had to be represented using bigint. This likely caused 
// inaccuracies when the program is evaluating the square function and 
// evaluating %. Hence causing the Alicia's code to be inaccurate 
// when evaluating whether a large number is prime.

//As such I can conclude that while Alicia's code would work well on small 
// numbers, however it is unable to accurately evaluate wheteher a 
// large number is a prime number. Thus, Alicia's function would not serve 
// well as fast prime tester.