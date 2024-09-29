function pyramid(n) {
    function pyramid_inter(sum, counter) {
        return counter > n
        ? sum
        :pyramid_inter((counter * counter + sum), counter + 1);
    }
    return pyramid_inter(0, 1);
}

display(pyramid(5)); //55
display(pyramid(7)); //140
display(pyramid(8)); //204
display(pyramid(9)); //285