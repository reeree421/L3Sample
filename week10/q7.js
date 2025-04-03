document.write("<table width='300' style='border-collapse:collapse; text-align:center; border:2px solid white;'>");

// Table heading having blue backgroundand text in white
document.write("<tr style='background-color:5b8fa4; color:white; font-weight:bold; border:2px solid white;'>");
document.write("<th style='border:2px solid white;'>SN</th>");
document.write("<th style='border:2px solid white;'>Name</th>");
document.write("<th style='border:2px solid white;'>Image</th>");
document.write("</tr>");

// rows having text in black
for (let i = 1; i <= 4; i++) {
    let bgColor = i % 2 === 0 ? "#f2f2f2" : "#e9eef1"; // Alternate row colors
    document.write(`<tr style='background-color:${bgColor}; color:black; border:2px solid white;'>`);
    document.write(`<td style='border:2px solid white;'>${i}</td>`);
    document.write(`<td style='border:2px solid white;'>Name${i}</td>`);
    document.write(`<td style='border:2px solid white;'>${i}.jpg</td>`);
    document.write("</tr>");
}

document.write("</table>");

    
        
      
   

