// function throwdie() {
//     return math_floor(math_random() * 6) + 1;
// }

function two_digit() {
    return math_floor(math_random() * 89) + 10;
}

function test_two_digit() {
    function test(counter) {
        const n = two_digit();
        return counter === 0
        ? true
        : n < 10  || n >= 100 
        ? false
        : test(counter - 1);
    }
    return test(1000);
}
test_two_digit();