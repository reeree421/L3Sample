// Function that calculates area of a rectangle
function calculateArea(length, breadth) {
    return length * breadth;
}

let length = parseFloat(prompt("Enter the length of the rectangle:"));
let breadth = parseFloat(prompt("Enter the breadth of the rectangle:"));

// Displays  calculated area in an alert box
alert("Area of Rectangle: " + calculateArea(length, breadth));
