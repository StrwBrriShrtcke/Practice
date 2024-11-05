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

// Function that represents triangle LTRB

function make_rectangle_ltrb(top_left, bottom_right) { 
    const rectangle = pair(top_left, bottom_right);
    return pair("LTRB", rectangle);
}

// Calculating perimeter of rectangle in a plane LTRB

function  perimeter_ltrb(make_rectangle_ltrb) {
    const start = start_segment(make_rectangle_ltrb);
    const end = end_segment(make_rectangle_ltrb);
    const length = start_segment(start) - start_segment(end);
    const width = end_segment(end) - end_segment(start);
    return length * 2 + width * 2;
}

//display(perimeter_ltrb(make_rectangle_ltrb(make_point(2, 4), make_point(1, 8))));

// Calculating area of rectangle in a plane LTRB

function area_ltrb(make_rectangle_ltrb) {
    const start = start_segment(make_rectangle_ltrb);
    const end = end_segment(make_rectangle_ltrb);
    const length = start_segment(start) - start_segment(end);
    const width = end_segment(end) - end_segment(start);
    return length * width;
}

//display(area_ltrb(make_rectangle_ltrb(make_point(2, 4), make_point(1, 8))));


// Function that represents rectangle using LTWH

function make_rectangle_ltwh(top_left, width, height) {
    const rectangle = pair(top_left, pair(width, height));
    return pair("LTWH", rectangle);
}

//display(make_rectangle_ltwh(make_point(3, 4), 2, 2));

// Function for calculating area of rectangle using LTWH

function area_ltwh(make_rectangle_ltwh) {
    const start = start_segment(make_rectangle_ltwh);
    const end = end_segment(make_rectangle_ltwh);
    const height = tail(end);
    const width = head(end);
    return height * width; 
}

//display(area_ltwh(make_rectangle_ltwh(make_point(3, 4), 2, 2)));

// Function that calculated perimeter of rectangle using LTWH

function perimeter_ltwh(make_rectangle_ltwh) {
    const start = start_segment(make_rectangle_ltwh);
    const end = end_segment(make_rectangle_ltwh);
    const height = tail(end);
    const width = head(end);
    return height * 2 + width * 2; 
}

//display(perimeter_ltwh(make_rectangle_ltwh(make_point(3, 4), 2, 2)));

// Function that calculates area and perimeter using LTWH or LTRB
// depending on which representation is being evaluated

function area(rectangle) {
    return head(rectangle) === "LTWH"
    ? area_ltwh(tail(rectangle))
    : area_ltrb(tail(rectangle));
}
display(area(make_rectangle_ltwh(make_point(3, 4), 2, 4))); 
display(area(make_rectangle_ltrb(make_point(3, 5), make_point(2, 8))));

function perimeter(rectangle) {
    return head(rectangle) === "LTWH"
    ? perimeter_ltwh(tail(rectangle))
    : perimeter_ltrb(tail(rectangle));
}

display(perimeter(make_rectangle_ltwh(make_point(3, 4), 2, 4))); 
display(perimeter(make_rectangle_ltrb(make_point(3, 5), make_point(2, 8))));