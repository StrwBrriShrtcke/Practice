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

// calculating length and width

function  legnth(top_left, bottom_right) {
    return start_segment(top_left) - start_segment(bottom_right);
}

function width(top_left, bottom_right) {
    return end_segment(bottom_right) - end_segment(top_left);
}

// calculating perimeter of rectangle in a plane

function perimeter(top_left, bottom_right) {
    return legnth(top_left, bottom_right)  * 2 
    + width(top_left, bottom_right) * 2;
}
display(perimeter(make_point(2, 4), make_point(1, 8)));


//calculating area of rectangle in a plane

function area(top_left, bottom_right) {
    return legnth(top_left, bottom_right) *
    width(top_left, bottom_right);
}

display(area(make_point(2, 4), make_point(1, 8)));