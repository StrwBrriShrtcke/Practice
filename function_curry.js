// ------------------------------------------
// Introduction to function currying
// ------------------------------------------

// without function currying

function bmi(height, weight) {
    return weight / (height * height);
}

display(bmi(1.6, 40));
display(bmi(1.6, 50));
display(bmi(1.6, 60));


const bmi_160cm = (weight) => bmi(1.6, weight);

display(bmi_160cm(40));
display(bmi_160cm(50));
display(bmi_160cm(60));

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

display(bmi_curry(1.6)(60));

const bmi_160cm_curry = bmi_curry(1.6);

display(bmi_160cm_curry(40));
display(bmi_160cm_curry(50));
display(bmi_160cm_curry(60));

// ------------------------------------------
// Animation with curve
// ------------------------------------------

display("Animation with curve");

function lerp(start, end) {
    function animate(t) {
        return start + t * (end - start);
    }
    return animate;
}

const my_lerp = lerp(50, 100);

display(my_lerp(0));
display(my_lerp(1));
display(my_lerp(0.5));

function decelerate(start, end) {
    function animate(t) {
        const t1 = 1 - t;
        return start + (1 - (t1 * t1)) * (end - start);
    }
    return animate;
}

const decelerate_from_4_to_20 = decelerate(4, 20);

display(decelerate_from_4_to_20(0));
display(decelerate_from_4_to_20(1));
display(decelerate_from_4_to_20(0.5));

// ------------------------------------------
// String wrapping
// ------------------------------------------
display("String wrapping");

const identity = s => s;

const no_wrap = identity;

display(no_wrap("sNiPer"));

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

display(wrap_with_X("sNiPer"));

const wrap_with_YX = wrap_with(wrap_with_X, "Y");

display(wrap_with_YX("Love"));

