// function that takes a list of arguments and returns a list of
// the squares of the arguments

function square_list(items) {
    return is_null(items) 
           ? null
           : pair(head(items) * head(items), square_list(tail(items)));

}
      
square_list(list(1, 2, 3, 4));

function square_list_2(items) {
  return map(x => x * x, items);
}

square_list_2(list(1, 2, 3, 4));