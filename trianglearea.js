var sides = document.querySelectorAll(".side-input")
var areaTriangleBtn = document.querySelector("#areatriangle-btn")
var output4 = document.querySelector("#output4")


function calculateAreaOfTriangle()
{
    var area = ((sides[0].value*sides[1].value)/2)
    output4.innerText = "Area of traingle is "+ area;

}






areaTriangleBtn.addEventListener("click", calculateAreaOfTriangle)