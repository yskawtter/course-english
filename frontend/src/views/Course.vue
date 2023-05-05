<template>
    <div class="container-watchvideocourse">
        <h3>Nome do modulo aqui</h3>
        <div class="videoexe">
        </div>
    </div>

    <section class="container-questions">
        <h3>faça nosso quiz aqui</h3>

        
            <div id="score-container" class="hide">
                <h2>Parabens</h2>
                
                <p id="display-score"> <span>90</span>%</p>
                    <p>Você acertou <span id="correct-answer">0</span> de <span id="question-qty">10</span>  perguntas</p>
                <button id="restart">refazer quiz</button>
             </div>
            
        
            <div id="container-quiz"> <!--CONSERTAR O CSS-->

                <div class="contQst">
                            <p id="question">
                                <span id="question-number">1-</span> <span id="question-text">RESPOSTA DA PERGUNTA "A"</span>
                            </p>
                        <div id="answers-box">
                            <button><span class="btn-letter">A</span> <span class="question-answer">A</span></button>
                        </div>
                </div>
            </div>
        <!--TEMPLATE RESPOSTA-->
        <button class="answer-template hide"><span class="btn-letter"></span><span class="question-answer"></span></button>
    </section>
    </template>

    <script>

    window.addEventListener('load', function() {
        const question = document.querySelector('#question')
        const answersBox = document.querySelector('#answers-box')
        const quizzContainer = document.querySelector('#container-quiz')
        const scoreContainer = document.querySelector('#score-container')
        const letters = ['a', 'b', 'c', 'd']
        let points = 0
        let actualQuestion = 0

        //perguntas
        const questions = [
    {
        "question": "A RESPOSTA DESSA PERGUNTA É 'A'",
        "answers": [
        {
            "answer": "A",
            "correct": true
        },
        {
            "answer": "B",
            "correct": false
        },
        {
            "answer": "C",
            "correct": false
        },
        {
            "answer": "D",
            "correct": false
        },
        ]
    },
    {
        "question": "A RESPOSTA DESSA PERGUNTA É 'C'",
        "answers": [
        {
            "answer": "A",
            "correct": false
        },
        {
            "answer": "B",
            "correct": false
        },
        {
            "answer": "C",
            "correct": true
        },
        {
            "answer": "D",
            "correct": false
        },
        ]
    },
    {
        "question": "A RESPOSTA DESSA PERGUNTA É 'B'",
        "answers": [
        {
            "answer": "A",
            "correct": false
        },
        {
            "answer": "B",
            "correct": true
        },
        {
            "answer": "C",
            "correct": false
        },
        {
            "answer": "D",
            "correct": false
        },
        ]
    },
    {
        "question": "A RESPOSTA DESSA PERGUNTA É 'D'",
        "answers": [
        {
            "answer": "A",
            "correct": false
        },
        {
            "answer": "B",
            "correct": false
        },
        {
            "answer": "C",
            "correct": false
        },
        {
            "answer": "D",
            "correct": true
        },
        ]
    },
    ]
    console.log(scoreContainer)

    // subs do quiz para a primeira pergunta
    function init() {
        //criar primeira pergunta
        createQuestion(0)
    }
    //create question
    function createQuestion(i) {
        const oldButtons = answersBox.querySelectorAll('button')
        oldButtons.forEach(btn => btn.remove())


    //ALTERAR TXT DA PERGUNTA
        const questionText = question.querySelector("#question-text");
        const questionNumber = question.querySelector("#question-number");

        questionText.textContent = questions[i].question;
        questionNumber.textContent = i + 1;

        //insere as alternativas
        questions[i].answers.forEach(function(answer, i) {
            //Cria template botao quizz
            const answerTemplate = document.querySelector('.answer-template').cloneNode(true)

            const letterBtn = answerTemplate.querySelector('.btn-letter')
            const answerText = answerTemplate.querySelector('.question-answer')

            letterBtn.textContent = letters[i]
            answerText.textContent = answer['answer']

            answerTemplate.setAttribute('correct-answer', answer['correct'])

            //REMOVER HIDE AND TEMPLATE CLASS
            answerTemplate.classList.remove('hide')
            answerTemplate.classList.remove('answer-template')

            //inserir a alternativa tela
            answersBox.appendChild(answerTemplate)

            //inserir um evento de click no btn
            answerTemplate.addEventListener('click', function() {
                checkAnswer(this)
            })


        })
        //incrementar o nuemro da questão
        actualQuestion++
    }

    //verificando resp usuario
    function checkAnswer(btn) {
        //select botoes
        const buttons = answersBox.querySelectorAll('button')

        //verifica a resp se esta correta
        buttons.forEach(btn2 => {
            if(btn2.getAttribute('correct-answer') === 'true') {
                btn2.classList.add('correct-answer')
                //check usser accert

                if(btn === btn2) {
                    //incremento de pontos
                    points++
                }
            } else {
                btn2.classList.add('wrong-answer')
            }
        })
       //Exibir prox pergunta
       nextQuestion()
    }
    //exibe prox pergunta no quiz
    function nextQuestion() {
        //timer para usuario verificar as resposta
        setTimeout(() => {
            if(actualQuestion >= questions.length) {
                //msg de sucesso
                showSuccessMessage()
                return
            }
            createQuestion(actualQuestion)
        },1000)
    }
    //exibe tela final
    console.log(scoreContainer)
    function showSuccessMessage() {
        hideOrShowQuizz()

        //TROCAR DADOS

        //calc score
        const score = ((points / questions.length) * 100).toFixed(1)
        const displayScore = document.querySelector('#display-score span')
        displayScore.textContent = score.toString()

        //alterar o numero de perguntas corretas
        const correctAnswer = document.querySelector('#correct-answer')

        correctAnswer.textContent = points

        //alterar total perguntas
        const totalQuestions = document.querySelector('#question-qty')
        totalQuestions.textContent = questions.length
    }
    //mostra oui esconde score
    function hideOrShowQuizz() {
        quizzContainer.classList.toggle("hide");
        scoreContainer.classList.toggle("hide");
    }
    //reiniciar quiz
    const restartBtn = document.querySelector('#restart')

    restartBtn.addEventListener('click', function() {
        actualQuestion = 0
        points = 0
        hideOrShowQuizz()
        init()
    })
    //iniciando o quiz
    init()

    


    }) // DOCUMENT LOAD



export default {

}

</script>

<style scoped>
.container-watchvideocourse {
  background-color: #466A8C;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 25px;
  border: transparent;
}
.container-watchvideocourse h3{
  color: #B1E322;
  font-family: 'Nunito';
  text-align: center;
  font-size: 1.4rem;
  text-transform: uppercase;
  padding-bottom: 24px;
}
.container-video h3 {
  letter-spacing: 1px;
  font-weight: 500;
  font-size: 2rem;
}
.container-video p {
  letter-spacing: 1.3px;
  font-weight: bold;

} 

.videoexe {
  width: 70vw;
  height: 35vh;
  background-color: #52606D;
  border-radius: 10px;
  display: flex;
}


/* QUIZ QUESTION */
.hide {
    display: none !important;
}
.container-questions {
  background-color: #466A8C;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 25px;
  padding-bottom: 52px;
}
.container-questions h3 {
  color: #B1E322;
  font-family: 'Nunito';
  text-align: center;
  font-size: 1.1rem;
  letter-spacing: 1px;
  padding-top: 22px;
}
/*container-quiz */
#score-container {
    height: 35vh;
    width: 40vw;
    background-color: #C3D5E5;
    color: #52606D;
    padding: 32px;
    max-width: 700px;
    font-family: 'Nunito sans';
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-bottom: 32px;
}
#score-container p {
    font-size: 1.3rem;
    align-items: center;
    justify-content: center;
    text-align: center;
}
#score-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#score-container, #display-score {
    font-size: 32px;
    font-weight: bold;
}
#correct-answer {
    font-weight: bold;
    color: #60B683 ; 
}
#questions-qty {
    font-weight: bold;
    color: #1F4366 ; 
}
#restart {
    background-color: #D3F279;
    color: #1F2933;
    font-weight: bold;
    font-family: 'Nunito';
    font-size: 1rem;
    height: 50px;
    border-radius: 10px;
    border: 2px solid transparent;
    width: 180px;
    text-transform: uppercase;
    margin-top: 20px;
    cursor: pointer;
    transition: .3s;
}
#restart:hover {
    background-color: #85CCA2;
    border-color: #ACE5C3;
    color: #466A8C;
}

/* QUIZ CONTAINER */

.contQst {
    width: 500px;
    padding: 25px;
    border: 1px solid #5B7A97;
    background-color: #8FA8BF;
    border-radius: 25px;
    padding-bottom: 32px;
}
#question {
    text-align: center;
    font-family: 'Nunito';
    color: #E4E7EB;
    margin-bottom: 25px;
    font-size: 20px;
}
#question-number {
    font-weight: bold;
}
#answers-box button {
    display: flex;
    align-items: center;
    margin: 15px 0;
    width: 300px;
    height: 50px;
    border-radius: 10px;
    background-color: #C3D5E5;
    border: 2px solid transparent;
    text-align: left;
    padding-left: 5px;
    cursor: pointer;
    font-family: 'Nunito sans';
    transition: .3s;
}
#answers-box button:hover {
    background-color: #466A8C;
    color: #C3D5E5;
}
#answers-box .btn-letter {
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #3E4C59;
    color: #C3D5E5;
    border-radius: 25%;
    line-height: 40px;
    text-align: center;
    text-transform: uppercase;
    flex: 1 1 0;
    max-width: 40px;
}
.question-answer {
    flex: 1 1 0;
    margin-left: 10px;
    font-size: 1rem;
    font-family: 'Nunito';
    font-weight: bold;
}
 .wrong-answer, .wrong-answer .btn-letter {
background-color: rgb(228, 81, 13) !important;
}
 .correct-answer, .correct-answer .btn-letter {
    background-color: #36995E !important;
}

/* RESPNSIVE */

@media(max-width: 470px) {
    #container-quiz {
        border: none;
        width: 80%;
        margin: 0;
        padding: 0;
    }
    #answers-box button {
        widows: 100%;
    }
    #score-container {
        width: 90%;
    }
    #restart{
        width: 100px;
        height: 30px;
        font-size: 0.7rem;
    }
    .contQst {
        margin: 20px;
        width: 80%;
    }
    #answers-box button {
        width: 95%;
    }
    
}
</style>