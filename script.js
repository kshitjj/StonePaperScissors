function RPSLogic(humanInput){
    computerInput = computerGenerater();
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
