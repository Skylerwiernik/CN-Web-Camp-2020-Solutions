const numberOfQuestions = 2

function makeQuestion(question, answers, correctIndex) {
    const q = "<p>" + question + "</p>"
    function makeAnswer(a, isCorrect) {
        var ans = "<span>" + a + "</span>"
        ans += "<input type='radio' name='" + question + "' value='"
        if (isCorrect) {
          ans += "true"
        }
        else {
          ans += "false"
        }
        ans += "'>"
        ans += "<br>"
        return ans
    }
    var final = q
    for (var i = 0; i < answers.length; i++) {
      final += makeAnswer(answers[i], i == correctIndex)
    }
    return final
}

const questions = {
  "question1" : [
    "1",
    "answer1",
    "answer2",
    "answer3"
  ],
  "question2" : [
    "0",
    "answer1",
    "answer2",
    "answer3"
  ],
}

var out = ""

Object.entries(questions).forEach(([question, answers]) => {
    const c = answers.shift()
    out += makeQuestion(question, answers, c)
});

document.getElementById("quiz").innerHTML = out

function showResults() {
    var wrongAnswers = 0
    var inputs = document.getElementsByTagName("input")
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked && inputs[i].value == "false") {
          wrongAnswers ++
        }
    }
    window.alert("You got " + (numberOfQuestions - wrongAnswers) + " correct out of " + numberOfQuestions )
}
