// function throwdie() {
//     return math_floor(math_random() * 6) + 1;
// }
// function test_throw_die(counter) {
//     function test(counter) {
//         const n = throwdie();
//         display(stringify(n) + " | " + stringify(counter));
//         return counter === 1
//         ? true
//         : n < 1  || n >= 7
//         ? false
//         : test(counter - 1);
//     }
//     return test(counter);
// }
// test_throw_die(1000);

// function two_digit() {
//     return math_floor(math_random() * 89) + 10;
// }

// function test_two_digit(counter) {
//     function test(counter) {
//         const n = two_digit();
//         display(stringify(n) + " | " + stringify(counter));
//         return counter === 1
//         ? true
//         : n < 10  || n >= 100 
//         ? false
//         : test(counter - 1);
//     }
//     return test(counter);
// }
// test_two_digit(2000);



function answer() {
    function convert_to_number() {
    return parse_int(prompt("Choose a positive integer!"), 10);
}
  return math_floor(math_random() * convert_to_number()) + 1;
}

const a = answer();

function guess() {
    return parse_int(prompt("Take a guess!"), 10);
}
const g = guess();
function check(g) {
    return a === g
    ? display("Congratulations you win!")
    : g < a
    ? check(parse_int(prompt("Oh no! That's a little bit too low, try again."), 10))
    : check(parse_int(prompt("Oh no! That's a little bit too high, try again."), 10));
}
check(g);

// function test_onetoten(counter) {
//     function test(counter) {
//         const n = one_to_ten();
//         display(stringify(n) + " | " + stringify(counter));
//         return counter === 1
//         ? true
//         : n < 1  || n >= 11
//         ? false
//         : test(counter - 1);
//     }
//     return test(counter);
// }
// test_onetoten(1000);
 