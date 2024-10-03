function duplicate_string(s, n) {
    function iter(s, counter) {
        return counter === n 
        ? counter
        :iter(display(s), counter + 1);
    }
    return duplicate_string("a", 0);
}

display(duplicate_string("a", 5));