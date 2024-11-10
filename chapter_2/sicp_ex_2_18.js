function reverse_list(list1) {
    function iter(remaining, reversed) {
        return is_null(remaining)
        ? reversed
        : iter((tail(remaining)), pair(head(remaining), reversed));
    }
  return iter(list1, list());
}




reverse_list(list(1, 4, 9, 16, 25)); 




