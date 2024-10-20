//To count number of times modulo operator is done when calculating the GCD of 206 and 40

//Function for calculating GCD of 2 numbers
function gcd(a, b) {
    display("modulo");
    return b === 0 ? a : gcd(b, a % b);
}

gcd(206, 40);





