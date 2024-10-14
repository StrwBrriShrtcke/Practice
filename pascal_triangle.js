function pascal_triangle(row, column) {
        return column === row || column === 1 || row <= 2
        ? 1
        : column > row
        ? "out of bounds"
        : pascal_triangle(row - 1, column) +  pascal_triangle(row - 1, column - 1);
}

pascal_triangle(9, 10);

// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1
// 1 5 10 10 5 1
// 1 6 15 20 15 6 1
// 1 7 21 35 35 21 7 1
// 1 8 28 56 70 56 28 8 1

//P(r, c) = P(r-1, c) + P(r-1, c-1)
//column === row
//column === 1
// row <= 2
