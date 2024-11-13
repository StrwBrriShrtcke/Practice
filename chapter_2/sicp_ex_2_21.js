// My attempt at making square_list more efficient as i realised that 
// in the current square_list function, it evaluates head(items) twice.
// But here i ran into an issue where in the final iteration head(items)
// would evaluate head(null) which is not a pair and hence stops evaluating
// and returns an error

function square_list(items) {
    const element = head(items);
    display(element);
    return is_null(items)
           ? null
           : pair(element * element, square_list(tail(items)));
}

square_list(list(1, 2, 3, 4));

// function that takes a list of arguments and returns a list of
// the squares of the arguments
      
function square_list_1(items) {
    return is_null(items)
           ? null
           : pair(head(items) * head(items, square_list(tail(items)));
}
square_list_1(list(1, 2, 3, 4));

// function square_list defined in terms of map

function square_list_2(items) {
  return map(x => x * x, items);
}

square_list_2(list(1, 2, 3, 4));