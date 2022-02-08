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

cards.forEach((card) => {
    card.addEventListener("click", () => {
        
        player1.selection = card.id;
        player2.selection = computerPlay();

        feedback.textContent = playRound(player1.selection, player2.selection);
        playerScore.innerHTML = player1.score;
        cpuScore.innerHTML = player2.score;

        console.log(`
            ==Game==

            Player1 Choice: ${player1.selection}
            Player2 Choice: ${player2.selection}

            Player1 Score: ${player1.score}
            Player2 Score: ${player2.score}
            
        `)

        if(player1.score > 4){
            feedback.textContent = "You win!!!"
            reset();
        }

        if(player2.score > 4){
            feedback.textContent = "You lose..."
            reset();
        }

    })
});

//Functions
function reset(){
    player1.score = 0;
    player1.choice = "";
    player2.score = 0;
    player2.choice = "";
}

function computerPlay(){
    return choices[Math.floor(Math.random() * choices.length)];
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
