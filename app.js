let user=0;
let computer =0;

const choices = document.querySelectorAll(".choice");

const result = document.querySelector("#msg");
const UserScore = document.querySelector("#user-score");
const CompScore = document.querySelector("#comp-score");

const computerChoice = ()=>{
    const options =["Rock","Paper","Scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}

const playGame = (userChoice)=>{
    console.log("user choice = ",userChoice);
    const compChoice=computerChoice();
    console.log("computer choice is : ",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="Rock"){
            userWin = compChoice ==="Paper" ? false:true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice ==="Scissors" ? false:true;
        }
        else {
            userWin = compChoice ==="Rock" ? false : true;
        }
        ShowWinner(userWin,userChoice,compChoice);
    }
}

const drawGame = ()=>{
    console.log("Game is drawn.");
    result.innerText="Game is drawn.";
}

const ShowWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("You Win !");
        result.innerText=`${userChoice} beats ${compChoice}, You Win !`;
        user++;
        UserScore.innerText=user;
    }
    else{
        console.log("You Lose !");
        result.innerText=`${compChoice} beats ${userChoice}, You Lose !`;
        computer++;
        CompScore.innerText=computer;
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
})