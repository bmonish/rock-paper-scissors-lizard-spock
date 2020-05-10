const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getPcChoice(){
  const choices = ['r','p','s'];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function win(){

}

function lose(){

}

function draw(){

}
function game(userChoice){
  const computerChoice = getPcChoice();
  switch (userChoice + computerChoice){
    case "rs":
    case "sp":
    case "pr":
      win();
      break;
    case "rp":
    case "ps":
    case "sr":
      lose();
      break;
    case "rr":
    case "pp":
    case "ss":
      draw();
      break;
  }
}
function main(){
  rock_div.addEventListener('click', function(){
    game("r");
  })

  paper_div.addEventListener('click', function(){
    game("p");
  })

  scissors_div.addEventListener('click', function(){
    game("s");
  })
}

main();
