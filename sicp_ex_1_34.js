function f(g) {
   return g(2);
}

function square(x) {
    return x * x;
}

f(square);

f(z => z * (z + 1));

f(f);
// (2)(2);

// The function f expects a function as an argument. When passing f as
// an argument in the function f, it takes f as the value 2 when 
// trying to execute return, this leads to function f calling 2 as
// the function g resulting in (2)(2).