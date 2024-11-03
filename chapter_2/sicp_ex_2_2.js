
// make point which is original make rat

function make_point(x, y) { return pair(x, y); }

function x_point(point) { return head(point); }

function y_point(point) { return tail(point); }

function pretty_point(p) {
    return "Point(x: " + stringify(x_point(p)) + ", y: "
                       + stringify(y_point(p)) + ")";
}
// make segment is a pair of pairs end and start segment

function make_segment(start_point, end_point) { 
    return pair(start_point, end_point);
}

function start_segment(segment) { return head(segment); }

function end_segment(segment) { return tail(segment); }

function pretty_segment(segment) {
    return "Segment(start: " + pretty_point(start_segment(segment)) + ", end: " 
    + pretty_point(end_segment(segment)) + ")";
}
// midpoint will take in a segment and return the midpoint of the segment
function midpoint(segment) {
    const start = start_segment(segment);
    const end = end_segment(segment);
    const mid_x = (x_point(start) + x_point(end)) / 2;
    const mid_y = (y_point(start) + y_point(end)) / 2;
    return make_point(mid_x, mid_y);
}

display(pretty_point(make_point(2, 3)));
display(pretty_segment(make_segment(make_point(2, 3), make_point(4, 5))));
display(pretty_point(midpoint(make_segment(make_point(2, 3), make_point(4, 5)))));