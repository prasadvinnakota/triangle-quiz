var angles = document.querySelectorAll(".angle-input")
var isTriangleButton = document.querySelector("#istriangle-btn");
var output1 = document.querySelector("#output1")


function calculateSum(angle1,angle2,angle3)
{
    return (Number(angle1)+Number(angle2)+Number(angle3))
}

function isTriangle()
{
    var sum = calculateSum(angles[0].value,angles[1].value, angles[2].value)
    if(sum === 180)
    {
        output1.innerText = "Yahoo Its a triangle";

    }
    else
    {
        output1.innerText = "Its not a triangle";
    }

}


isTriangleButton.addEventListener("click", isTriangle)

