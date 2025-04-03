let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

for (let i = 0; i < images.length; i++) {
    document.write("<img src='" + images[i] + "' alt='Image " + (i + 1) + "' width='200px' height='200px'><br>");
}
