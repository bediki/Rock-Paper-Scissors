
let buttons = document.querySelectorAll('button');
let container = document.querySelector('#container');
let decisions = document.querySelector('#decision');
let round = document.querySelector('#round');
let results = document.querySelector('#results');

let playerscore = 0 ;
let computerscore = 0;

buttons.forEach((button)=>{
    button.addEventListener('click', () =>{
        playerSelection = getPlayerChoice(button);
        game(playerSelection);
    })
});

function getPlayerChoice(button){
    if(button.id=='btn_rock') return 'Rock';
    if(button.id=='btn_paper') return 'Paper';
    if (button.id == 'btn_scissors') return 'Scissors';
}

function game(){
    let computerSelection = getComputerSelection();
    let playResult = playRound(playerSelection, computerSelection)
    decisions.textContent = `Player chose ${playerSelection} - Computer chose ${computerSelection} `;

    if (playResult == 1){
        playerscore++;
    }else if(playResult==-1){
        computerscore++;
    }
    update_score();
    checkWinner(playerscore,computerscore)

}


function update_score() {
    results.textContent = `Player ${playerscore}: ${computerscore} Computer`;
}

function getComputerSelection() {
    const choice_list = ["Rock", "Paper", "Scissors"];
    let computerSelection = choice_list[Math.floor(Math.random() * 3) + 0];
    return computerSelection
}




// This function is a round played where the win choices of the player are considered and a draw
// The rest are lost rounds.
function playRound(playerSelection, computerSelection) {




    if(playerSelection==computerSelection){
        round.textContent =  `Draw! Nobody wins`;
        return 0
    }

    if(playerSelection=="Scissors" && computerSelection == "Paper"){
        round.textContent =  "You win! Scissor beats Paper";
        return 1;
    }else if(playerSelection=="Rock" && computerSelection == "Scissors"){
        round.textContent =  "You win! Rock beats Scissors";
        return 1;
    }else if(playerSelection=="Paper" && computerSelection == "Rock"){
        round.textContent =  "You win! Paper beats Rock";
        return 1;
    }else{
        round.textContent =  `You Lose!${computerSelection} beats ${playerSelection}.` ;     
        return -1
    }
    
  }




// Check wether player or computer won the game comment
function checkWinner(playerscore, computerscore) {
    if (playerscore == 5) {

        results.textContent = `You win! Final score is: Player ${playerscore} -  Computer ${computerscore}`
        resetscore();
 
    } else if (computerscore == 5) {
        console.log("The computer wins! You lose!");
        results.textContent = `Computer wins! Final score is Player ${playerscore} - Computer ${computerscore}`
        resetscore();
    } 
}

function resetscore(){
    playerscore = 0;
    computerscore = 0;
    decisions.textContent = ""
    round.textContent = ""
    

}




