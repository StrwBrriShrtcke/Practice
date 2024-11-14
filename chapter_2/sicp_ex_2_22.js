function square(x) {
    return x * x;
}

function square_list(items) {
    function iter(things, answer) {
        display(things);
        return is_null(things) 
              ? answer
              : iter(tail(things), 
                      pair(square(head(things)), 
                          answer));
    }
    return iter(items, null);
}

square_list(list(1, 2, 3, 4));

// In the above function square_list, the order of evaluating the 
// elements are indeed as Louis intended, '1', '2', '3', '4'. However,
// in lines 11 and 12, as square_list continues to evaluate the rest of
// the elements, the elements gets placed at the 'head' of the pair, as
// such the order of the elements would become reverse order of what was
// desired

function square_list_2(items) {
    function iter(things, answer) {
        return is_null(things)
               ? answer
               : iter(tail(things), 
                      pair(answer, 
                           square(head(things))));
    }
    return iter(items, null);
}

square_list_2(list(1, 2, 3, 4));

// In the above function, square_list evaluates to 
// [[[[null, 1], 4], 9], 16]. Since it is neither an empty list nor is 
// its tail a list, it can no longer be considered a list. 


