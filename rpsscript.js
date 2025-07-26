let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice1");
const msg=document.querySelector("#msg");
const uscore = document.querySelector("#uscore");
const cscore =document.querySelector("#compscore");




const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    const index=Math.floor(Math.random()*3);
    return options[index];
}

const draw = () =>
{
   
   msg.innerText="Game was Draw"; 
   msg.style.backgroundColor="#081b31";

}

const showwin = (userwin,userChoice,compChoice) =>{
    if(userwin){
        userScore++;
        uscore.innerText=userScore;
       
        msg.innerText=`you win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }
    else{
        compScore++;
        cscore.innerText=compScore;
        
        msg.innerText = `you lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        
    }
};


choices.forEach((choice1)=>{
    choice1.addEventListener("click", () =>
    {
        const userChoice=choice1.getAttribute("id")
       
        playGame(userChoice);
    });
});

const playGame = (userChoice) =>{
    
    const compChoice=genCompChoice();
  

    if(userChoice === compChoice)
    {
        draw();
        
    }
    else{
        let userwin = true;
        if (userChoice === "rock")
        {
          userwin = compChoice === "paper" ? false:true;
        }
        else if(userChoice === "paper")
            {
             userwin=compChoice === "scissor" ? false:true;
            }
            else{
               userwin = compChoice === "rock" ?false:true;
            }
       showwin(userwin,userChoice,compChoice);
    };
};
