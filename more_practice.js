// Make a function called sum_list that takes list of numbers and returns
// the sum of the numbers

function sum_list(numbers) {
    return is_null(numbers)
    ? 0
    : head(numbers) + sum_list(tail(numbers));
}

sum_list(list(1, 2, 3, 4));

function sum_list_iter(numbers) {
    function iter(sum, remaining) {
        return is_null(remaining)
        ? sum
        : iter(sum + head(remaining), tail(remaining));
    }
    return iter(0, numbers);
}
    
sum_list_iter(list(1, 2, 3, 4));


// a function called join_list that takes a list of strings and joins them 
// together into megastring

// function join_list(strings) {
//     function iter(joined, remaining) {
//         return is_null(remaining)
//         ? joined
//         : iter(joined + head(remaining), tail(remaining));
//     }
//     return iter("", strings);
// }

// join_list(list("hello", " ", "world"));


// a function every that takes a list of booleans that takes a list of 
// booleans and returns true if every boolean in the list is true

function every(booleans) {
    function iter(tested, remaining) {
        return is_null(remaining) 
        ? tested
        : iter(tested && head(remaining), tail(remaining));
    }
    return iter(true, booleans);
}

every(list(true, false, true));


// function reduce that takes a combiner and a list of stuff and combines them
// together. combiner being a function that takes 2 arguments and returns 
// something

function reduce(initial_value, combiner, a_list) {
    function iter(combined, remaining) {
        return is_null(remaining)
        ? combined
        : iter(combiner(combined, head(remaining)), tail(remaining));
    }
    return iter(initial_value, a_list);
}

reduce(1, (x, y) => x * y, list(2, 3, 4));


//function any that returns true if any of the boolean in a list of booleans is
// true

function any(a_list) {
    return reduce(false, (x, y) => x || y, a_list);
}

any(list(false, false, false));


// a function evens that takes a list of numbers and returns only its even numbers
// in the same order

function is_even(number) {
    return number % 2 === 0;
}

function evens(a_list) {
    return is_null(a_list)
    ? null
    : is_even(head(a_list))
    ? pair(head(a_list), evens(tail(a_list)))
    : evens(tail(a_list));
}

evens(list(1, 2, 3, 4, 5, 6, 7));


// a function only_nums that takes a list of anything and returns only numbers

function only_nums(a_list) {
    return is_null(a_list)
    ? null
    : is_number(head(a_list))
    ? pair(head(a_list), only_nums(tail(a_list)))
    : only_nums(tail(a_list));
}

only_nums(list(1, 4, 7, "hello", "purple"));


// function filter that takes 2 arguments a function predicate which takes 1 argument 
// 1 argument and returns a boolean and a list that filters out elements
// that dont return true

function filter(predicate, a_list) {
    return is_null(a_list)
    ? null
    : predicate(head(a_list))
    ? pair(head(a_list), filter(predicate, tail(a_list)))
    : filter(predicate, tail(a_list));
}

filter(x => x > 0, list(-1, 2, 7, 9, -8));

// a function sum_odds that sums up all the odd numbers in a list, while
// reusing filter and reduce

function sum_odds(a_list) {
    return reduce(0, (x, y) => x + y, filter(x => x % 2 !== 0, a_list));
}

sum_odds(list(1, 2, 3, 4, 5, 6, 7));


// a function greates_length that returns the longest string in a list of 
// strings

function greater_than(a, b) {
    return a > b
    ? a
    : b;
}

function greatest_length(a_list) {
     return reduce(0, greater_than, map(length, a_list));
}

 greatest_length(list("hello", "bye", "no"));




