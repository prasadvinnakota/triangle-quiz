var sides = document.querySelectorAll(".side-input") 
var hypotenuseBtn = document.querySelector("#calculatehypotenuse-btn")
var output3 = document.querySelector("#output3") 



function sumOfSquaresOfSides(side1, side2)
{
    return ((side1*side1)+(side2*side2))
}



function caluculateHypotenuse()
{
    var squaresSum = sumOfSquaresOfSides(sides[0].value, sides[1].value)
    var hypotenuse = Math.sqrt(squaresSum)
    output3.innerText = `Hypotenuse is equal to ${hypotenuse}`



}



hypotenuseBtn.addEventListener("click", caluculateHypotenuse)






























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































