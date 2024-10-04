// function duplicate_string(s, n) {
//     function iter(r, counter) {
//         return counter >= n 
//         ? r
//         :iter(r + s, counter + 1);
//     }
//     return iter("", 0);
// }

// display(duplicate_string("a", 5));
// display(duplicate_string("hah", 2));
// display(duplicate_string("abcd", 0));
// display(duplicate_string("", 10));


function duplicate_string_space(s, n) {
    // function iter(result, counter) {
    //     return counter >= n
    //     ? result
    //     : counter < 1 
    //     ? iter(result + s, counter + 1)
    //     : iter(result + " " + s, counter + 1);
    // }
    function iter(result, counter) {
        return counter >= n
        ? result
        : iter(counter < 1 ? result + s : result + " " + s, counter + 1);
    }
    return iter("", 0);
}

display(duplicate_string_space("a", 5));
display(duplicate_string_space("hah", 2));
display(duplicate_string_space("abcd", 0));
display(duplicate_string_space("", 10));


function duplicate_string_with_separator(s, n, sep) {
    function iter(result, counter) {
        return counter >=n
    ? result 
    : iter(counter < 1 ? result + s : result + sep + s, counter + 1);
    
    }
    return iter("", 0);
}
display(duplicate_string_with_separator("a", -1, "/"));