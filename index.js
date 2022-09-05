// Your code here

var questionsArr = [
    question1 = {
        question: 'The name of the world-famous gardens situated 10 miles outside of London, close to the River Thames is Kew Gardens.',
        answer: true,
    },
    question2 = {
        question: 'On October 23, 1843, construction on Big Ben, the tower clock in London famous for its accuracy and massive bell, was started.',
        answer: false
    },
    question3 = {
        question: 'Jupiter, Saturn, Uranus, and Neptune are terrestrial planets.',
        answer: false
    },
    question4 = {
        question: 'Lancelot Brown is more usually known as Capability Brown.',
        answer: true
    },
    question5 = {
        question: 'Fear of disease is called Pedophobia.',
        answer: false
    }
]

function runQuiz() {
    var score = 0
    for (i=0; i<questionsArr.length; i++){
        var response = confirm(questionsArr[i].question)
        if (response){
            if (questionsArr[i].answer === true){
                score ++
            }
        }else{
            if (questionsArr[i].answer === false){
                score++
            }
        }
    }
    var finalScore = Math.round((score/5)*100)
    alert("Your final score is " + finalScore + "%.")
}