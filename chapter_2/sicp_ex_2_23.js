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

for_each(x => display(x), list(57, 321, 88));