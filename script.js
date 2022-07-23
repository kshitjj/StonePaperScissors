// Stone Paper Scissors Game
// input comes in asking whether you want to play the game or not
wantToPlay()
//  if yes, then we start the game(). game is best of three, which means 5 rounds.
//      We take input from user in form of rock, paper, scissors. 
//      Input is then compared with a computer generated 
//          computer generated input is obtained with the help of Math.random
//      The input from the user and the computer are compared and you get output in form of console.log("you lost or You Win").
//          if W, then +1 Human,
//          if L, then +1 Computer    
//      First one to get to 3 W's Wins the game.
//      After winnin or losing the game, You are asked if you want to play again. 
//          If yes, then game().
//          If no, say your good byes
//  else, then say our good byes


// functions I need
// 1. a function which runs the game
function game(){
    let w = 0;
    let l = 0;
    while(w < 3 && l < 3){
        userInput = prompt("what do you want to play? (stone, paper, scissors)")
        computerInput = computerGenerated();
        result = comparer(userInput, computerInput);
        if(result == "w"){
            console.log(`You won this round!, You played ${userInput} while the computer played ${computerInput}`)
            w++;
        } else if (result == "l"){
            l++;
            console.log(`You lost this round!, You played ${userInput} while the computer played ${computerInput}`)
        } else if (result == "tie"){
            console.log("T'was a tie, play again.")
        } else if (result == "invalid"){
            console.log("Invalid Input!")
        }
        // add an if/else, if l == 3 or w == 3 then, the you get a text. "You won or Lost the best of five."
    }
    if (l == 3){
        console.log("Ah!, it seems like you lost the game")
    } else if (w == 3) {
        console.log("Let's go, you won!")
    }
    wantToPlay()
}
// 2. a function which asks if you want play the game
function wantToPlay(){
    let wantToPlay = prompt("Want to play?(y/n)")
    if(wantToPlay == "y"){
        game()
    } else if (wantToPlay == "n"){
        console.log(`ah, ok we'll play some other time!`)
    } else {
        console.log(`write either "y" or "n", as answer`)
        wantToPlay()
    }
}
// 3. a function which takes computer's input and user input and compares it.
function comparer(humanInput, computerInput){
    userInput = humanInput.toLowerCase();
    if(userInput == "stone" && computerInput == "scissors"){
        return "w"
    } else if (userInput == "stone" && computerInput == "paper"){
        return "l"
    } else if (userInput == "paper" && computerInput == "stone"){
        return "w"
    } else if (userInput == "paper" && computerInput == "scissors"){
        return "l"
    } else if (userInput == "scissors" && computerInput == "paper"){
        return "w"
    } else if (userInput == "scissors" && computerInput == "stone"){
        return "l"
    } else if (userInput == computerInput){
        return "tie"
    } else {
        return "invalid"
    }
}
// 4. a function which makes computer's input
function computerGenerated(){
    let number = Math.random()
    if(number < 0.33){
        return "stone"
    } else if(number > 0.33 && number < 0.66){
        return "paper"
    } else if(number > 0.66){
        return "scissors"
    }
}
// 5. a function for each round (Decided to scrap, each round.)