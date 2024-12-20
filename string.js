// -----------------------------------------------------------------
// Function estimates the number of characters first, then counts 
// -----------------------------------------------------------------

function estimate_length_of(s) {
    function iter(counter) {
        display(counter);
        return is_undefined(char_at(s, counter))
        ? counter
        : iter(counter * 2 + 1);
    }
    return iter(0);
}

function true_length(s) {
    function iter(counter) {
        return is_undefined(char_at(s, counter))
        ? counter 
        : iter(counter + 1);
    }
    return estimate_length_of(s) === 0 ? iter(0) 
    : iter(math_floor((estimate_length_of(s)) / 2));
}

//display(estimate_length_of("idjdjdjdjdjdjdjkdkdkdkdkdkdkdkkdkdkdkdkdkdkdkdkkdkdkdkdkdkkdkdkdkdkd"));
//display(true_length("hello"));
//display(true_length(""));
//display(true_length(" "));
//display(true_length("one two three four")); //18
//display(true_length("Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo habitant vitae condimentum nisl nisi diam ornare. Litora in ex sodales hendrerit quis finibus maecenas dignissim. Gravida ad vel tempus vestibulum curabitur sollicitudin. Iaculis aliquam congue interdum ullamcorper mi massa inceptos. Amet egestas a, risus ultrices torquent himenaeos.Ad habitant porta finibus a praesent libero ullamcorper senectus. Litora nibh suspendisse aliquet hac parturient nec. Egestas nisi sollicitudin semper ipsum eget magna facilisis dignissim justo. Natoque velit sodales dolor donec a porta aliquet lacus. Venenatis nibh maecenas posuere pulvinar vestibulum dignissim purus. Pretium ullamcorper lectus fermentum nam justo, quam etiam nibh. Scelerisque curabitur ultricies ipsum sagittis viverra.")); //786

// --------------------------------------------------------------
// Word counter
// --------------------------------------------------------------

function word_count(string) {
    function space(counter, no_of_space) {
        return is_undefined(char_at(string, counter))
        ? no_of_space + 1
        : char_at(string, counter) === " "
        ? space(counter + 1, no_of_space + 1)
        : space(counter + 1, no_of_space);
    }
    return space(0, 0);
}
display(word_count("Hi How Are You?"));
display(word_counter("It's always good to bring a slower friend with you on a hike. If you happen to come across bears, the whole group doesn't have to worry. Only the slowest in the group do. That was the lesson they were about to learn that day."));

// ----------------------------------------------------------------
// Counting a string one character at a time
// ----------------------------------------------------------------

function length1(s) {
    function iter(counter) {
        return is_undefined(char_at(s, counter))
        ? counter 
        : iter(counter + 1);
    }
    return iter(0);
}

display(length1("hello"));

// function length2(s) {
//     function iter10(counter) {
//         return is_undefined(char_at(s, counter))
//         ? counter 
//         : iter10(counter + 10);
//     }
//     function iter1(counter) {
//         return is_undefined(char_at(s, counter))
//         ? counter 
//         : iter1(counter + 1);
//     }
//     function iter(counter, step) {
//         return is_undefined(char_at(s, counter))
//         ? counter 
//         : iter(counter + step, step);
//     }
    
    // return iter1(math_max(0, iter10(0) - 10));
    // const lower_bound = iter(0, 10) - 10;
    // const non_neg_lower_bound = math_max(0, lower_bound);
    // return iter(math_max(0, iter(0, 10) - 10), 1);
    // return iter(lower_bound);
 

    // function iter1(counter) {
    //     const lowerbound = iter10(counter);
    //     return is_undefined(char_at(s, counter))
    //     ? counter
    //     : iter1(lowerbound - 1);
    //}
    
//}

// display(length2("hello"));
// display(length("cat"));
// display(length("unicorn"));
// display(length2(""));
// display(length2("asdasdfghjklfghjkl")); //18
//display(true_length("Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo habitant vitae condimentum nisl nisi diam ornare. Litora in ex sodales hendrerit quis finibus maecenas dignissim. Gravida ad vel tempus vestibulum curabitur sollicitudin. Iaculis aliquam congue interdum ullamcorper mi massa inceptos. Amet egestas a, risus ultrices torquent himenaeos.Ad habitant porta finibus a praesent libero ullamcorper senectus. Litora nibh suspendisse aliquet hac parturient nec. Egestas nisi sollicitudin semper ipsum eget magna facilisis dignissim justo. Natoque velit sodales dolor donec a porta aliquet lacus. Venenatis nibh maecenas posuere pulvinar vestibulum dignissim purus. Pretium ullamcorper lectus fermentum nam justo, quam etiam nibh. Scelerisque curabitur ultricies ipsum sagittis viverra."));


// function factorial(n) {
//     function iter(product, counter) {
//         return counter > n 
//               ? product
//               : iter(counter * product,
//                       counter + 1);
//     }
//     return iter(1, 1);
// }

// factorial(5);





// function length(s) {
//     function iter(counter) {
//         return is_undefined(char_at(s, iter))
//         ? counter - 1
//         : iter(counter + 1);
//     }
//     return iter(0);
// }

// length("hello");