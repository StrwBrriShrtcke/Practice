                        // && !
// function eitherOr(a, b){
//     return a
//     ? !b
//     : b;
// }

// function eitherOr(a, b){
//     return (a && !b) || (!a && b);
// }



// display(eitherOr(false, true)); // true
// display(eitherOr(true, false)); // true
// display('\n');
// display(eitherOr(true, true)); // false
// display(eitherOr(false, false)); // false
    
    
//     function isHeteroCouple(gender1, gender2) {
//     return gender1 !== gender2;
// }

                        // % : ?

// returns a string that is one of the following:
// 'Divisible by 3.'
// 'Divisible by 5.'
// 'Divisible by both 3 and 5.'
// 'Not divisible by 3 nor 5.'
// function getDivisiblityBy3or5(n) {
//     return (n % 3 === 0) && (n % 5 === 0)
//     ? 'Divisible by both 3 and 5'
//     : n % 3 === 0
//     ? 'Divisible by 3'
//     : n % 5 === 0
//     ? 'Divisible by 5'
//     : 'Not divisible by 3 nor 5';
// }

// getDivisiblityBy3or5(3); // 'Divisible by 3.'
// getDivisiblityBy3or5(9); // 'Divisible by 3.'

// getDivisiblityBy3or5(5); // 'Divisible by 5.'
// getDivisiblityBy3or5(10); // 'Divisible by 5.'

// getDivisiblityBy3or5(15); // 'Divisible by both 3 and 5.'
// getDivisiblityBy3or5(30); // 'Divisible by both 3 and 5.'

// getDivisiblityBy3or5(4); // 'Not divisible by 3 nor 5.'
// getDivisiblityBy3or5(8); // 'Not divisible by 3 nor 5.'

                        //ABSOLUTE NUMBER

// function wholeNumber(n){
//     return n % 3 === 0
//     ? 'true'
//     : 'false';
// }

                        // %

// function isLeapYear(year) {
//     return year % 400 === 0
//     ? true
//     : year % 100 === 0
//     ? false
//     : year % 4 === 0;
// }



// function isLeapYear(year){
//     return (year % 4 === 0 && year % 100 !== 0)
//     || (year % 400 === 0 && year % 4 === 0);
// }

// function isLeapYear(year){
//     return (year % 100 !== 0 || year % 400 === 0) 
//     && year % 4 === 0;
// }

// // a*b + a*c === a*(b+c)

// function  isLeapYear(year){
//     return year % 400 === 0 || 
//     (year % 100 !== 0 && year % 4 === 0);
// }

                        // PYRAMID

// function pyramid(b){
//     return b === 1
//     ? 1
//     :(b * b) + pyramid(b-1);
// }

// pyramid(4);

                        // MULTIPLICATION

// function mult(a, b){
//     return b === 0
//     ? 0
//     :a + mult(a, b -1);
// }
// mult(3,-4);


// function mult(a, b){
//     return b===0
//     ? 0
//     : a < 0 && b > 0
//     ? a + mult(a, b- 1)
//     : a < 0 && b < 0
//     ? - a + mult(-a, -b-1)
//     : b + mult(b, a - 1);
// }
// mult(-3,-4);


// function mult1(a, b) {
//     return b === 0 
//     ? 0
//     : b < 0
//     ? -a + mult1(a, b + 1)
//     : a + mult1(a, b - 1);
// }

// display(mult1(3, 4));
// display(mult1(3, -4)); 
// display(mult1(-3, 4));
// display(mult1(-3, -4));

function mult2(a, b) {
    return b === 0 
    ? 0
    : b < 0
    ? mult2(-a, -b)
    : a + mult2(a, b - 1);
}

// display(mult2(3, 4));
// display(mult2(3, -4));
// display(mult2(-3, 4));
// display(mult2(-3, -4));

                        // DIVISION

// function div(a, b){
//     return b === 0
//     ? 0
//     :a + div(a, b -1);
// }
// div(3,-4);





// function conditional(predicate, then_clause, else_clause) {		    
//     return predicate ? then_clause : else_clause;
// }

// function abs(x) {
//     return x >= 0 ? x : - x;
// }

// function square(x) {
//     return x * x;
// }

// function is_good_enough(guess, x) {
//     return abs(square(guess) - x) < 0.001;
// }

// function average(x, y) {
//     return (x + y) / 2;
// }

// function improve(guess, x) {
//     return average(guess, x / guess);
// }

// function sqrt_iter(guess, x) {
//     return conditional(is_good_enough(guess, x),
//                       guess,
//                       sqrt_iter(improve(guess, x),
//                                  x));
// }

// sqrt_iter(3, 25);


// function conditional(predicate, then_clause, else_clause) {		    
//     return predicate ? then_clause : else_clause;
// }

// conditional(2 === 3, 0, 5);

// function abs(x) {
//     return x >= 0 ? x : - x;
// }

// function square(x) {
//     return x * x;
// }

// function is_good_enough(guess, x) {
//     return abs(square(guess) - x) < 0.001;
// }

// function average(x, y) {
//     return (x + y) / 2;
// }

// function improve(guess, x) {
//     return average(guess, x / guess);
// }

// function sqrt_iter(guess, x) {
//     return is_good_enough(guess, x)
//           ? guess
//           : sqrt_iter(improve(guess, x), x);
// }

// function sqrt(x) {
//     return sqrt_iter(1, x);
// }

// sqrt(5);
      