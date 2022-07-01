'use strict';

const check = document.querySelector('.check')
const userGuess = document.querySelector('.guess')
const userScore = document.querySelector('.score')
const message = document.querySelector('.message')
const highscore = document.querySelector('.highscore')
const number = document.querySelector('.number')
const againButton = document.querySelector('.again')
const body = document.getElementsByTagName('body')[0]

let ans = Math.floor((Math.random() * 30) + 1);

console.log(ans)
check.addEventListener('click',()=>{

    userScore.innerText = Number(userScore.innerText)-1;

    const userGuessedValue = userGuess.value;
    // console.log(userGuessedValue );

    if(ans===Number(userGuessedValue)){
        body.style.backgroundColor = "#60b347";
        message.innerText = "Congratulations!"
        number.innerText = ans;

        if(highscore.innerText < userScore.innerText){
            highscore.innerText = userScore.innerText;
        }

        again();
    }
    else{
        // console.log(userGuess , ans);
        if(userGuessedValue>ans){
            message.innerText = "GUESS LOW 👇🏻"
        }
        else{
            message.innerText = "GUESS HIGH ☝🏻"
        }
    }
})



function again(){
    userScore.innerText = 30;
    number.innerText = "?";
    message.innerText = "Start Guessing ...";
    ans = Math.floor((Math.random() * 30) + 1);
    // console.log(ans)

}



againButton.addEventListener("click",()=>{
    body.style.backgroundColor = "#222";
    again();
    userGuess.value= "";
k
});