let userscore=0;
let compscore=0; 

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score"); 

const gencomputerchoice = () => {
    const options=["rock","paper","scissors"];
    const randomidx = Math.floor(Math.random()*3);
    return options[randomidx];
}

const drawgame =()=>{
    msg.innerText="game is draw, Play again..!";
    msg.style.backgroundColor="#081b31";
}

const showWinner = (userwin,userchoice,computerchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText = `You win! your choice ${userchoice} beats computer's${computerchoice}`;
        msg.style.backgroundColor="green"; //change the color of the style.
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText = `Computer wins! computer choice ${computerchoice} beats your's ${userchoice}`;
        msg.style.backgroundColor="red";   
    }
}
const playgame = (userchoice) => {
    // console.log("user choice is",userchoice);
    //generate computer choice
    const computerchoice = gencomputerchoice();
    // console.log("computer choice is",computerchoice);

    if (userchoice === computerchoice) {
        drawgame();
    } else {
        let userwin = false;
        if (
            (userchoice === "rock" && computerchoice === "scissors") ||
            (userchoice === "paper" && computerchoice === "rock") ||
            (userchoice === "scissors" && computerchoice === "paper")
        ) {
            userwin = true;
        }

        showWinner(userwin,userchoice,computerchoice);
}
}
choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
});