



// function length1(s) {
//     function iter(counter) {
//         return is_undefined(char_at(s, counter))
//         ? counter 
//         : iter(counter + 1);
//     }
//     return iter(0);
// }



function length2(s) {
    function iter(counter) {
        return is_undefined(char_at(s, counter))
        ? counter 
        : iter(counter + 10);
    }
    function lowerbound_iter(counter) {
        return is_undefined(lowerbound)
        ?lowerbound
    }
    return iter(0);
}

function trueLength(s) {
    const lowerbound = length2(s) - 10;
        return is_undefined(lowerbound)
        ? lowerbound
        : lowerbound_iter(sum + 1);
}

// display(length2("hello"));
// display(length("cat"));
// display(length("unicorn"));
// display(length(""));
// display(length(""));
display(trueLength("Lorem ipsum odor amet, consectetuer adipiscing elit. Commodo habitant vitae condimentum nisl nisi diam ornare. Litora in ex sodales hendrerit quis finibus maecenas dignissim. Gravida ad vel tempus vestibulum curabitur sollicitudin. Iaculis aliquam congue interdum ullamcorper mi massa inceptos. Amet egestas a, risus ultrices torquent himenaeos.Ad habitant porta finibus a praesent libero ullamcorper senectus. Litora nibh suspendisse aliquet hac parturient nec. Egestas nisi sollicitudin semper ipsum eget magna facilisis dignissim justo. Natoque velit sodales dolor donec a porta aliquet lacus. Venenatis nibh maecenas posuere pulvinar vestibulum dignissim purus. Pretium ullamcorper lectus fermentum nam justo, quam etiam nibh. Scelerisque curabitur ultricies ipsum sagittis viverra."));


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