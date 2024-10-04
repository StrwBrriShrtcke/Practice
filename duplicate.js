function duplicate_string(s, n) {
    function iter(r, counter) {
        return counter >= n 
        ? r
        :iter(r + s, counter + 1);
    }
    return iter("", 0);
}

display(duplicate_string("a", 5));
display(duplicate_string("hah", 2));
display(duplicate_string("abcd", 0));
display(duplicate_string("", 10));