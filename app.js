let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard = document.getElementById("scoreb")
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("o");
document.getElementById("reset-game").style.display="none";
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
  const userChoice_div = document.getElementById(user);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(user, comp){
  const userChoice_div = document.getElementById(user);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(user, comp){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  result_p.innerHTML = `${convertLtoW(user)}${smallUserWord} equals ${convertLtoW(comp)}${smallCompWord}. It's a draw!`;
  userChoice_div.classList.add('grey-glow');
  setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300);
}
function game(userChoice){
  if(userScore!=21 && computerScore!=21){
  const compChoice = getPcChoice();
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  switch (userChoice+compChoice){
    case "sp":
      result_p.innerHTML = `${convertLtoW(userChoice)}${smallUserWord} cuts ${convertLtoW(compChoice)}${smallCompWord}. You win!`;
      win(userChoice, compChoice);
      break;
    case "pr":
      result_p.innerHTML = `${convertLtoW(userChoice)}${smallUserWord} covers ${convertLtoW(compChoice)}${smallCompWord}. You win!`;
      win(userChoice, compChoice);
      break;
    case "rl":
      result_p.innerHTML = `${convertLtoW(userChoice)}${smallUserWord} crushes ${convertLtoW(compChoice)}${smallCompWord}. You win!`;
      win(userChoice, compChoice);
      break;
    case "lo":
      result_p.innerHTML = `${convertLtoW(userChoice)}${smallUserWord} poisons ${convertLtoW(compChoice)}${smallCompWord}. You win!`;
      win(userChoice, compChoice);
      break;
    case "os":
      result_p.innerHTML = `${convertLtoW(userChoice)}${smallUserWord} smashes ${convertLtoW(compChoice)}${smallCompWord}. You win!`;
      win(userChoice, compChoice);
      break;
    case "sl":
      result_p.innerHTML = `${convertLtoW(userChoice)}${smallUserWord} decapitates ${convertLtoW(compChoice)}${smallCompWord}. You win!`;
      win(userChoice, compChoice);
      break;
    case "lp":
      result_p.innerHTML = `${convertLtoW(userChoice)}${smallUserWord} eats ${convertLtoW(compChoice)}${smallCompWord}. You win!`;
      win(userChoice, compChoice);
      break;
    case "po":
      result_p.innerHTML = `${convertLtoW(userChoice)}${smallUserWord} disproves ${convertLtoW(compChoice)}${smallCompWord}. You win!`;
      win(userChoice, compChoice);
      break;
    case "or":
      result_p.innerHTML = `${convertLtoW(userChoice)}${smallUserWord} vaporizes ${convertLtoW(compChoice)}${smallCompWord}. You win!`;
      win(userChoice, compChoice);
      break;
    case "rs":
      result_p.innerHTML = `${convertLtoW(userChoice)}${smallUserWord} crushes ${convertLtoW(compChoice)}${smallCompWord}. You win!`;
      win(userChoice, compChoice);
      break;
    case "ps":
      result_p.innerHTML = `${convertLtoW(userChoice)}${smallUserWord} gets cut by ${convertLtoW(compChoice)}${smallCompWord}. You lose!`;
      lose(userChoice, compChoice);
      break;
    case "rp":
      result_p.innerHTML = `${convertLtoW(userChoice)}${smallUserWord} gets covered by ${convertLtoW(compChoice)}${smallCompWord}. You lose!`;
      lose(userChoice, compChoice);
      break;
    case "lr":
      result_p.innerHTML = `${convertLtoW(userChoice)}${smallUserWord} gets crushed by ${convertLtoW(compChoice)}${smallCompWord}. You lose!`;
      lose(userChoice, compChoice);
      break;
    case "ol":
      result_p.innerHTML = `${convertLtoW(userChoice)}${smallUserWord} gets poisoned by ${convertLtoW(compChoice)}${smallCompWord}. You lose!`;
      lose(userChoice, compChoice);
      break;
    case "so":
      result_p.innerHTML = `${convertLtoW(userChoice)}${smallUserWord} gets smashed by ${convertLtoW(compChoice)}${smallCompWord}. You lose!`;
      lose(userChoice, compChoice);
      break;
    case "ls":
      result_p.innerHTML = `${convertLtoW(userChoice)}${smallUserWord} gets decapitated by ${convertLtoW(compChoice)}${smallCompWord}. You lose!`;
      lose(userChoice, compChoice);
      break;
    case "pl":
      result_p.innerHTML = `${convertLtoW(userChoice)}${smallUserWord} gets eaten by ${convertLtoW(compChoice)}${smallCompWord}. You lose!`;
      lose(userChoice, compChoice);
      break;
    case "op":
      result_p.innerHTML = `${convertLtoW(userChoice)}${smallUserWord} gets disproved by ${convertLtoW(compChoice)}${smallCompWord}. You lose!`;
      lose(userChoice, compChoice);
      break;
    case "ro":
      result_p.innerHTML = `${convertLtoW(userChoice)}${smallUserWord} gets vaporized by ${convertLtoW(compChoice)}${smallCompWord}. You lose!`;
      lose(userChoice, compChoice);
      break;
    case "sr":
      result_p.innerHTML = `${convertLtoW(userChoice)}${smallUserWord} gets crushed by ${convertLtoW(compChoice)}${smallCompWord}. You lose!`;
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
  if(userScore==21){
    scoreBoard.classList.add('green-glow');
    setTimeout(() => scoreBoard.classList.remove('green-glow'), 600);
    result_p.innerHTML = `You won! Congrats!!!`;
    document.getElementById("reset-game").style.display="block";
  }
  else if(computerScore==21){
    scoreBoard.classList.add('red-glow');
    setTimeout(() => scoreBoard.classList.remove('red-glow'), 600);
    result_p.innerHTML = `You Lost! Better luck Next Time!`;
    document.getElementById("reset-game").style.display="block";
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
