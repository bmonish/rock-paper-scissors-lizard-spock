let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("o");

function getPcChoice(){
  const choices = ['r','p','s','l','o'];
  const randomChoice = Math.floor(Math.random()*5);
  return choices[randomChoice];
}

function convertLtoW(letter){
  if(letter === "r") return "Rock";
  if(letter === "p") return "Paper";
  if(letter === "s") return "Scissors";
  if(letter === "l") return "Lizard";
  else return "Spock";
}

function win(user, comp){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertLtoW(user)}${smallUserWord} beats ${convertLtoW(comp)}${smallCompWord}. You win!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(user, comp){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertLtoW(user)}${smallUserWord} loses to ${convertLtoW(comp)}${smallCompWord}. You lost!`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(user, comp){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  result_p.innerHTML = `${convertLtoW(user)}${smallUserWord} equals ${convertLtoWd(comp)}${smallCompWord}. It's a draw!`;
  userChoice_div.classList.add('grey-glow');
  setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300);
}
function game(userChoice){
  const compChoice = getPcChoice();
  switch (userChoice+compChoice){
    case "sp":
    case "pr":
    case "rl":
    case "lo":
    case "os":
    case "sl":
    case "lp":
    case "po":
    case "or":
    case "rs":
      win(userChoice, compChoice);
      break;
    case "ps":
    case "rp":
    case "lr":
    case "ol":
    case "so":
    case "ls":
    case "pl":
    case "op":
    case "ro":
    case "sr":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
    case "ll":
    case "oo":
      draw(userChoice, compChoice);
      break;
  }
}

function main(){
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissors_div.addEventListener('click', () => game("s"));
  lizard_div.addEventListener('click', () => game("l"));
  spock_div.addEventListener('click', () => game("o"));
}
main();
