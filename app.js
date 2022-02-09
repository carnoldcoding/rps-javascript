//Player Objects
class Player {
    constructor(selection, score) {
        this.selection = selection;
        this.score = score;
    }
}

let player1 = new Player("", 0);
let player2 = new Player("", 0);
const choices = ['r', 'p', 's']

//Query Selectors
const cpuScore = document.querySelector(".computer-score");
const playerScore = document.querySelector(".player-score");
const cards = document.querySelectorAll(".card");
const feedback = document.querySelector(".feedback");

const computerCards = document.querySelectorAll(".computer-card");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        
        if(player1.score == 5 || player2.score == 5){
            return;
        }

        player1.selection = card.id;
        player2.selection = computerPlay();

        feedback.textContent = playRound(player1.selection, player2.selection);
        playerScore.innerHTML = player1.score;
        cpuScore.innerHTML = player2.score;

        if(player1.score == 5 || player2.score == 5){
            openModal();
        }
    })
});

//Functions
function reset(){
    player1.score = 0;
    player1.choice = "";
    player2.score = 0;
    player2.choice = "";

    playerScore.innerHTML = player1.score;
    cpuScore.innerHTML = player2.score;

    computerCards.forEach(card => {
        card.classList.remove("active");
    })

}

function computerPlay(){
    let choice = choices[Math.floor(Math.random() * choices.length)];
    computerCards.forEach(card => {

        card.classList.remove("active");

        if(card.id.includes(choice)){
            card.classList.add("active");
        }

        // setTimeout(function(){
        //     card.classList.remove("active");
        // }, 500)
    })

    return choice 
}

//Rock > Scissors
//Scissors > Paper
//Paper > Rock
//Same = tie
function playRound(playerSelection, computerSelection){

    if(playerSelection == computerSelection){
        return "It's a draw!"
    }
    else if(playerSelection == 'r' && computerSelection == 's') {
        player1.score++;
        return "You win this round!"
    }
    else if(playerSelection == 's' && computerSelection == 'p') {
        player1.score++;
        return "You win this round!"
    }
    else if(playerSelection == 'p' && computerSelection == 'r') {
        player1.score++;
        return "You win this round!"
    }
    else {
        player2.score++;
        return "CPU takes the round!";
    }
}

//Modal
const modal = document.querySelector(".modal-wrapper");
const modalContent = document.querySelector(".modal-content");

function openModal(){
    modal.classList.add('active');
    player1.score > player2.score ? modalContent.textContent = "You Win!" : modalContent.textContent = "You Lose!"
}

function closeModal(){
    modal.classList.remove('active');
}

const modalButton = document.querySelector(".modal-button");

modalButton.addEventListener("click", () => {
    reset();
    closeModal();
})

