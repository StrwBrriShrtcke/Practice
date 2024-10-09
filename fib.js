// function num_of_ways_to_step(step) {
//     function iter(a, b, count) {
//         return count === 0
//           ? b
//           : iter(a + b, a, count - 1);
//     }
//     return iter(1, 1, step);
// }
//8 5 3 2 1 1

// display(num_of_ways_to_step(1)); //1
// display(num_of_ways_to_step(2)); //2
// display(num_of_ways_to_step(3)); //3


function num_of_ways_to_step2(step) {
    function iter(a, b, c, count) {
        // display("a:" + stringify(a) + " b:" + stringify(b) + " c:" + stringify(c) 
        // + " count:" + stringify(count));
        return count === 0
           ? c
           : iter(a + b + c, a , b, count - 1);
           //iter(2+1+1, 2, 1, 1 -1)
           //iter(2+1+1, 2, 1, 2 -1)
    }
    return iter(2, 1, 1, step);
}

display(num_of_ways_to_step2(1)); //1
// display(num_of_ways_to_step2(2)); //2
// display(num_of_ways_to_step2(3)); //4

//1+1+1, 2+1, 3, 1+2
//24 13 7 4 2 1 1
//f(n) = f(n - 1) + f(n-2) + f(n-3)