var firstPlayer=document.querySelector("#p1");
var secondPlayer=document.querySelector("#p2");
var player1Display=document.querySelector("#p1d");
var player2Display=document.querySelector("#p2d");
var player1Score=0,player2Score=0;
var reset=document.querySelector("#reset");
var target=document.querySelector("div input");
var gameOver=false;
var targetScore=5;
target.value="5";

firstPlayer.addEventListener("click",function(){
    if(!gameOver){
        player1Score++;
        player1Display.textContent=player1Score;
        if(player1Score==targetScore){
            gameOver=true;
            player1Display.classList.add("yo");
        }
    }
});

secondPlayer.addEventListener("click",function(){
    if(!gameOver){
        player2Score++;
        player2Display.textContent=player2Score;
        if(player2Score==targetScore){
            gameOver=true;
            player2Display.classList.add("yo");
        }
    }
});

function backtoNormal(){
    gameOver=false;
    player1Score=-0;
    player2Score=-0;
    player1Display.textContent=player1Score;
    player2Display.textContent=player2Score;
    player1Display.classList.remove("yo");
    player2Display.classList.remove("yo");
}

reset.addEventListener("click",backtoNormal);

target.addEventListener("change",function(){
    backtoNormal();
    targetScore=this.value;
});