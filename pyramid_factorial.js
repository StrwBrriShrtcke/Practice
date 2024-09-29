function pyramid(n) {
    function pyramid_inter(product, counter) {
        return counter > n
        ? product
        :pyramid_inter((product * product + counter), counter + 1);
    }
    return pyramid_inter(1, 1);
}

pyramid(3);