// create a function that is similar to predeclared for_each

function abs(x) {
    return x >= 0 ? x : - x;
}

function map(fun, items) {
    return is_null(items)
           ? null
           : pair(fun(head(items)), 
                  map(fun, tail(items)));
}

function for_each_imp(fun, items) {
    function iter(element, remaining) {
        return is_null(remaining)
        ? 1
        : iter(fun(head(remaining)), tail(remaining));
    }
    return iter(1, items);
}

display(for_each_imp(x => display(x), list(57, 321, 88)));