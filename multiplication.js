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

// function wholeNumber(n){
//     return n % 3 === 0
//     ? 'true'
//     : 'false';
// }





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

//function  isLeapYear(year){
    //return year % 400 === 0 || 
    //(year % 100 !== 0 && year % 4 === 0);
//
//function div(a, b){
    //
//



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

// function mul(a, b) {
//     function iter_mul(sum, counter) {
//         return counter > math_abs(b)
//         ? sum
//         : b < 0
//         ? iter_mul(sum - a, counter + 1)
//         : iter_mul(sum + a, counter + 1);
//     }
//     return iter_mul(0, 1);
    
// }


function mul2(a, b) {
    function iter_mul(sum, counter) {
        return counter > math_abs(b)
        ? sum
        : iter_mul(sum + a, counter + 1);
    }
    return b < 0 ? - iter_mul(0, 1) : iter_mul(0, 1);
    
}

display(mul2(2, 4));
display(mul2(-2, 4));
display(mul2(2, -4));
display(mul2(-2, -4));
display(mul2(0, -4));
display(mul2(-2, 0));






      