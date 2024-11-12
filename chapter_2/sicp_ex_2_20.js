
function plus_curried(x) {	    
    return y => x + y;
}
plus_curried(1)(2);


// function brooks(a_function, a_list) {
//     function iter(new_list) {
//         return is_null(tail(new_list))
//         ? a_function(head(a_list))(head(new_list))
//         : iter(tail(new_list));
//     }
//     return iter(a_list);
// }

function brooks(a_function, a_list) {
    function iter(new_list, answer) {
        return is_null(new_list)
        ? answer
        : iter(tail(new_list), answer(head(new_list)));
    }
    return iter(a_list, a_function);
}

function brooks2(a_function, a_list) {
    return is_null(a_list) 
    ? a_function
    : brooks2(a_function(head(a_list)), tail(a_list));
}

brooks2(plus_curried, list(3, 4));

function brooks_curried(a_list) {
    return brooks2(head(a_list), tail(a_list));
}


brooks_curried(list(plus_curried, 3, 4));