// ------------------------------------------
// Introduction to function currying
// ------------------------------------------

// without function currying

function bmi(height, weight) {
    return weight / (height * height);
}

//display(bmi(1.6, 40));
//display(bmi(1.6, 50));
//display(bmi(1.6, 60));


const bmi_160cm = (weight) => bmi(1.6, weight);

//display(bmi_160cm(40));
//display(bmi_160cm(50));
//display(bmi_160cm(60));

// with function currying

// function bmi_curry(height) {
//     function bmi_with_height(weight) {
//         return weight / (height * height);
//     }
//     return bmi_with_height;
// }

function bmi_curry(height) {
    return (weight) => weight / (height * height);
}

//display(bmi_curry(1.6)(60));

const bmi_160cm_curry = bmi_curry(1.6);

//display(bmi_160cm_curry(40));
//display(bmi_160cm_curry(50));
//display(bmi_160cm_curry(60));

// ------------------------------------------
// Animation with curve
// ------------------------------------------

//display("Animation with curve");

function lerp(start, end) {
    function animate(t) {
        return start + t * (end - start);
    }
    return animate;
}

const my_lerp = lerp(50, 100);

//display(my_lerp(0));
//display(my_lerp(1));
//display(my_lerp(0.5));

function decelerate(start, end) {
    function animate(t) {
        const t1 = 1 - t;
        return start + (1 - (t1 * t1)) * (end - start);
    }
    return animate;
}

const decelerate_from_4_to_20 = decelerate(4, 20);

//display(decelerate_from_4_to_20(0));
//display(decelerate_from_4_to_20(1));
//display(decelerate_from_4_to_20(0.5));

// ------------------------------------------
// String wrapping
// ------------------------------------------
//display("String wrapping");

const identity = s => s;

const no_wrap = identity;

//display(no_wrap("sNiPer"));

// function wrap_with(string_builder, wrapper) {
//     function wrapped_string_builder(string) {
//         return wrapper + string_builder(string) + wrapper;
//     }
//     return wrapped_string_builder;
// }

function wrap_with(string_builder, wrapper) {
    return (string) => wrapper + string_builder(string) + wrapper;
}

const wrap_with_X = wrap_with(identity, "X");

//display(wrap_with_X("sNiPer"));

const wrap_with_YX = wrap_with(wrap_with_X, "Y");

//display(wrap_with_YX("Love"));
//display(wrap_with_YX("ProShooter")); 

// -------------------------------------------------------
// A function that wraps a string with "xX<3example<3Xx"
// -------------------------------------------------------

const wrap_with_heart = wrap_with(identity, "<3");
const wrap_with_cap_x = wrap_with(wrap_with_heart, "X");
const pro_gamer_tag = wrap_with(wrap_with_cap_x, "x");

//display(pro_gamer_tag("hi")); // "xX<3hi<3Xx"
//display(pro_gamer_tag("")); // "xX<3<3Xx"
//display(pro_gamer_tag("example")); // "xX<3example<3Xx"

// ---------------------------------------------------------
// A funciton that wraps a string if predicate returns true
//----------------------------------------------------------

function estimate_length_of(s) {
    function iter(counter) {
        return is_undefined(char_at(s, counter))
        ? counter 
        : iter(counter * 2);
    }
    return iter(1);
}

function true_length(s) {
    function iter(counter) {
        return is_undefined(char_at(s, counter))
        ? counter 
        : iter(counter + 1);
    }
    return iter(math_floor((estimate_length_of(s) / 2)));
}

function wrap_if(string_builder, wrapper, filter) {
    return (string) => filter(string) 
    ? wrapper + string_builder(string) + wrapper
    : string_builder(string);
}

const wrap_identity = wrap_if(identity, "~", (s) => true_length(s) <= 5);
const wrap_x = wrap_with(wrap_identity, "x");

// display(wrap_x("CreamyRoses"));

// ------------------------------------------------------
// Error handling through username creation
// ------------------------------------------------------

function try_to_apply(func, value) {
    return is_undefined(value) ? undefined : func(value);
}

function filter(predicate, value) {
    return predicate(value) ? value : undefined;
}

const filtered_wrap_x = (s) => {
    const filtered_s = filter((s) => true_length(s) <= 20, s);
    const wrapper = wrap_with(s => s, "~*:･");
    return try_to_apply(wrapper, filtered_s);
};


// function filtered_wrap_x(s) {
//     const filtered_s = filter((s) => true_length(s) <= 5, s);
//     const wrapper = wrap_with(s => s, "~");
//     return try_to_apply(wrapper, filtered_s);
// }


display(filtered_wrap_x("CreamyRoses"));





