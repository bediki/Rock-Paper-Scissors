function getComputerSelection() {
    
    const choice_list = ["rock", "paper", "scissor"];
    let computerSelection = choice_list[Math.floor(Math.random() * 3) + 0];
    console.log(computerSelection);
    return computerSelection
}

function getPlayerChoice(){

    const choice_list = ["rock", "paper", "scissor"];

    let playerChoice = prompt("Please choose: Rock-Paper-Scissor=?").toLowerCase()


    if (choice_list.includes(playerChoice)) {
        console.log(playerChoice);
        return playerChoice;
    }

    return getPlayerChoice();
}

function capitalizeFirstLetter(word){
    return word.charAt(0).toUpperCase()+word.slice(1);
}

// This function is a round played where the win choices of the player are considered and a draw
// The rest are lost rounds.
function playRound(playerSelection, computerSelection) {


    if(playerSelection==computerSelection){
        console.log("Draw! Nobody wins");
        return 0
    }

    if(playerSelection=="scissor" && computerSelection == "paper"){
        console.log("You win! Scissor beats Paper");
        return 1;
    }else if(playerSelection=="rock" && computerSelection == "scissor"){
        console.log("You win! Rock beats Scissor");
        return 1;
    }else if(playerSelection=="paper" && computerSelection == "rock"){
        console.log("You win! Paper beats Rock");
        return 1;
    }else{
        console.log(`You Lose!${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}.`) ;     
        return -1
    }
    
  }


function game(){
    let playerscore = 0;
    let computerscore = 0;
    
    //Play five rounds
    for (i=0; i<5;i++){

        let computerSelection = getComputerSelection();
        let playerSelection = getPlayerChoice();
        let playResult = playRound(playerSelection, computerSelection)

        if (playResult == 1){
            playerscore++;
        }else if(playResult==-1){
            computerscore++;
        }

    console.log(`Player ${playerscore}: ${computerscore} Computer`);
        
    }

    checkWinner(playerscore, computerscore);
    console.log(`Player ${playerscore}: ${computerscore} Computer`);

}

// Check wether player or computer won the game
function checkWinner(playerscore, computerscore) {
    if (playerscore > computerscore) {
        console.log("You are the winner");
    } else if (computerscore > playerscore) {
        console.log("The computer wins! You lose!");
    } else {
        console.log("Draw");
    }
}

game();