function make_point(x, y) { return pair(x, y); }

function x_point(point) { return head(point); }

function y_point(point) { return tail(point); }

function make_segment(start_point, end_point) { 
    return pair(start_point, end_point);
}

function start_segment(segment) { return head(segment); }

function end_segment(segment) { return tail(segment); }

function midpoint(segment) {
    const start = start_segment(segment);
    const end = end_segment(segment);
    const mid_x = (x_point(start) + x_point(end)) / 2;
    const mid_y = (y_point(start) + y_point(end)) / 2;
    return make_point(mid_x, mid_y);
}

// Function that represents triangle

function rectangle(top_left, bottom_right) { 
    return pair(top_left, bottom_right);
}

// Calculating perimeter of rectangle in a plane

function  perimeter(rectangle) {
    const start = start_segment(rectangle);
    const end = end_segment(rectangle);
    const length = start_segment(start) - start_segment(end);
    const width = end_segment(end) - end_segment(start);
    return length * 2 + width * 2;
}

display(perimeter(rectangle(make_point(2, 4), make_point(1, 8))));

// Calculating area of rectangle in a plane

function area(rectangle) {
    const start = start_segment(rectangle);
    const end = end_segment(rectangle);
    const length = start_segment(start) - start_segment(end);
    const width = end_segment(end) - end_segment(start);
    return length * width;
}

display(area(rectangle(make_point(2, 4), make_point(1, 8))));