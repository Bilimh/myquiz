import "./style.css"

import {Questions} from './questions'
import confetti from "canvas-confetti"





//const TIMEOUT = 4000;
const app = document.querySelector("#app")
const startButton = document.querySelector("#start")


startButton.addEventListener("click", startQuiz)

let score = 0
//Fonction, principale qui contient toutes les autres fonctions 
function startQuiz() {
   
   let currentQuestion = 0
   startQuestion (currentQuestion)
}

function startQuestion (index) {
   clean()
   //Si toutes les questions ont été posées, affiche un message de fin
   if (index >= Questions.length) {
      const h1 = document.createElement('h3')
      app.appendChild(h1)
      h1.innerText =`Quiz terminé! Vous avez ${score} bonnes réponses sur les ${Questions.length}`
      for (let i = 0; i < Questions.length; i++) {
         let p =document.createElement('p')
         app.appendChild(p)
         p.innerText = `la réponse de la question '${Questions[i].question}' est '${Questions[i].correct}'`
         confetti()
      }
      return ;//On Sort de la fonction pour éviter de créer des éléments inutiles
   }
   //compteur()
   let question = Questions[index].question
   let answers = Questions[index].answers
   getTitleElement(question)
   createAnswers(answers)
   questionRestante(index, Questions.length)

   //Déclaration du bouton submit permettant de passer d'une question à une autre
   const submit = document.createElement('button')
   submit.innerText = "Submit"
   app.appendChild(submit)
   submit.className = "startSubmit"
   //déclaration du score
  
   function submitButton() {
      let reponse = app.querySelector('input[name="answer"]:checked');
      let value = reponse.value
      let iscorrect = Questions[index].correct === value
      if (iscorrect) {
         score++
         //alert(`Bonne réponse: Score :${score}`)
      } /*else {
         alert(`Mauvaise réponse: ${Questions[index].correct} est la bonne réponse`)
      }*/
      index++
    
      startQuestion(index)
   }
   
  
   submit.addEventListener('click', submitButton)
}

function getTitleElement(text) {
   //Affichage des questions du Quiz
   const h3 = document.createElement('h3')
   app.appendChild(h3)
   h3.innerText = text
}

function clean() {
   while (app.firstElementChild) {
      app.firstElementChild.remove()
   }
}
function formatId(text) {
   return text.replaceAll(" ", '-').toLowerCase()
}

function createAnswers(answers) {
   for(let answer of answers){
      let label = document.createElement('label')
      app.appendChild(label)
      label.innerText = answer
      let id = formatId(answer)
      let input = document.createElement("input")
      input.id = id
      input.type = "radio"
      input.name = "answer"
      input.value = answer
      label.appendChild(input)
   }
  
}

function questionRestante (a,b) {
   let h3 = document.createElement('h3')
   app.appendChild(h3)
   h3.innerText = `Question ${a+1}/${b}`
}






