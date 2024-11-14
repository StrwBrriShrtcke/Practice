// square_list defined such that head(items) only gets evaluated once

function square_list(items) {
     if (is_null(items)) {
         return null;
     } 
     else {
         const element = head(items);
         return pair(element * element, square_list(tail(items)));
     }
}

display(square_list(list(1, 2, 3, 4)));

// function that takes a list of arguments and returns a list of
// the squares of the arguments
      
function square_list_1(items) {
    return is_null(items)
           ? null
           : pair(head(items) * head(items), square_list(tail(items)));
}
square_list_1(list(1, 2, 3, 4));

// function square_list defined in terms of map

function square_list_2(items) {
  return map(x => x * x, items);
}

square_list_2(list(1, 2, 3, 4));