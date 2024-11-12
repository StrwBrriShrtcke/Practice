
function plus_curried(x) {	    
    return y => x + y;
}
function brooks_curried(func, a_list)


brooks_curried(list(plus_curried, 3, 4));