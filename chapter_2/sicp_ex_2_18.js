function reverse_list(list1) {
    function iter(remaining, reversed) {
        return is_null(remaining)
        ? reversed
        : iter((tail(remaining)), pair(head(remaining), reversed));
    }
  return iter(list1, list());
}




reverse_list(list(1, 4, 9, 16, 25)); 


function slow_reverse(this_list) {
    display(this_list);
    return is_null(this_list) 
    ? null
    : append(slow_reverse(tail(this_list)),
             list(head(this_list)));
}

slow_reverse(list(1,2,3,4)); // [4, [3, [2, [1, null]]]]



