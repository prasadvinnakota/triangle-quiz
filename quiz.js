var formData = document.querySelector(".quiz-form")
var submitBtn = document.querySelector("#submit")
var output2 = document.querySelector("#output2")


var correctAnswers =["90°", "right","obtuse", "acute"];


function calcuateRightAnswers()
{
    var score=0;
    var index=0;
    var formDataFromApi = new FormData(formData);
    for(var i of formDataFromApi.values())
    {
        if(i===correctAnswers[index])
        {
            score = score+1
        }
        index=index+1
    }
    output2.innerText = `your score is ${score}` 

}

submitBtn.addEventListener("click", calcuateRightAnswers)

