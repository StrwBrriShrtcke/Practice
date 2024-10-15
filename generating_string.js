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
