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


// function give_prompt(n) {
//     return parse_int(prompt(n), 10);
// }

// function answer() {
//     function convert_to_number() {
//         return give_prompt("Choose a positive integer!");
//     }
//     return math_floor(math_random() * convert_to_number()) + 1;
// }

// const a = answer();

// function guess() {
//     return give_prompt("Take a guess!");
// }
// const g = guess();
// function check(g) {
//     return a === g
//     ? display("Congratulations you win!")
//     : g < a
//     ? check(give_prompt("Oh no! That's a little bit too low, try again."))
//     : check(give_prompt("Oh no! That's a little bit too high, try again."));
// }
// check(g);

function start_game() {
    function give_prompt(n) {
        return parse_int(prompt(n), 10);
    }
    
    function get_upper_bound() {
        const start = give_prompt("Choose a positive integer!");
        return math_floor(math_random() * start) + 1;
    }
    
    const upper_bound = get_upper_bound();
    
    const first_guess = give_prompt("Take a guess!");
    
    function check(guess, counter) {
        return upper_bound === guess
        ? display("Congratulations you win! You took " + stringify(counter) + " tries")
        : guess < upper_bound
        ? check(give_prompt("Oh no! That's a little bit too LOW, try again."), counter + 1)
        : check(give_prompt("Oh no! That's a little bit too HIGH, try again."), counter + 1);
    }
    check(first_guess, 1);
}

start_game();

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
 