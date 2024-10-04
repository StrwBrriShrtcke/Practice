function duplicate_string(s, n) {
    function iter(r, counter) {
        return counter >= n 
        ? s
        :s + iter(r, counter + 1);
    }
    return n === 0 ? "" : iter(s, 1);
}

display(duplicate_string("a", 5));
display(duplicate_string("hah", 2));
display(duplicate_string("abcd", 0));
display(duplicate_string("", 10));