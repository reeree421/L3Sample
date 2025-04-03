var items = [];
var x = 0;

function add_element_to_array() {
    array[x] = document.getElementById("text1").value;
    alert("Element: " + items[x] + " Added at index " + x);
    x++;
    document.getElementById("text1").value = "";
}

function display_array() {
    var e = "<hr/>";
    for (var y = 0; y < items.length; y++) {
        e += "Element " + y + " = " + items[y] + "<br/>";
    }
    document.getElementById("Result").innerHTML = e;
}

