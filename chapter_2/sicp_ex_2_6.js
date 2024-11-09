const zero = f => x => x;

function add_1(n) {
    return f => x => f(n(f)(x));
}

const one = add_1(zero);
// f => x => f((f => x => x)(f)(x))
// f => x => f((x => x)(x));
// f => x => f(x)


const two = add_1(one);
// f => x => f((f => x => f(x))(f)(x))
// f => x => f((x => f(x))(f)(x))
// f => x => f(f(x))

const three = add_1(two);
// f => x => f(f(f(x)));

function plus(a, b) {
    return f => x => a(f)(b(f)(x));
}
display(plus(one, two));
// f => x => f => x => f(x)(f)(f => x => f(f(x))(f)(x))
// f => x => f => x => f(x)(f)(f(f(x)))
// f => x => x => f(x) (f(f(x)))
// f => x => f(f(f(x)))

const inc = x => x + 1;
display(one(inc)(0));
//  (f => x => f(x))(inc)(0)
//  (x => inc(x))(0))
//  inc(0)
//  0 + 1
//  1
 
display(two(inc)(0));
display(three(inc)(0));


const ha = s => s + "ha";
display(zero(ha)(""));
display(one(ha)(""));
display(two(ha)(""));
display(three(ha)(""));

// Multiplication

function mul(a, b) {
    return f => a(b(f));
}
mul(one, two);
f => (f => x => f(x))((f => x => f(f(x)))(f));
f => (f => x => f(x))(x => f(f(x)));
f => (x => (x => f(f(x)))(x))
f => x => f(f(x))

mul(two, three);
f => [f => x => f(f(x))]([f => x => f(f(f(x)))](f))
f => [f => x => f(f(x))]