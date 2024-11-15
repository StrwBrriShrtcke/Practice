// create a function that is similar to predeclared for_each

function for_each_1(fun, items) {
    if (!is_null(items)) {
        fun(head(items));
        for_each_1(fun, tail(items));
    } else {
        
    }
}

display(for_each_1(x => display(x), list(57, 321, 88)));