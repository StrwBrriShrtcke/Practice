function duplicate_string(s, n) {
    function iter(s, counter) {
        return counter === n 
        ? s
        :iter(display(s), counter + 1);
    }
    return iter("a", 0);
}

display(duplicate_string("a", 1));