function num_of_ways_to_step(step) {
    function iter(a, b, count) {
        return count === 0
           ? b
           : iter(a + b, a, count - 1);
    }
    return iter(1, 1, step);
}


display(num_of_ways_to_step(1)); //1
display(num_of_ways_to_step(2)); //2
display(num_of_ways_to_step(3)); //3