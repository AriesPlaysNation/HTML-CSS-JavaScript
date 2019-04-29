let usersScore = 0;
let compsScore = 0;

const usersScore_span = document.getElementById("userScore");
const compsScore_span = document.getElementById("compScore");

const scoreBoard_div = document.querySelector(".scoreBoard");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice()
{
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random()* 3);
  return choices[randomNumber];
}

function convertToWord(letter)
{
  if(letter === "rock") return "Rock";
  if(letter === "paper") return "Paper";
  return "Scissors";
}

function win(user, computer)
{
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  usersScore++;
  usersScore_span.innerHTML = usersScore;
  compsScore_span.innerHTML = compsScore;
  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You Win!"`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() =>userChoice_div.classList.remove('green-glow'), 300)
}

function lose(user, computer)
{
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  compsScore++;
  usersScore_span.innerHTML = usersScore;
  compsScore_span.innerHTML = compsScore;
  result_p.innerHTML = `${convertToWord(computer)}${smallCompWord} loses to ${convertToWord(user)}${smallUserWord}. You Lose!"`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() =>userChoice_div.classList.remove('red-glow'), 300)
}

function draw(user, computer)
{
  const userChoice_div = document.getElementById(user);
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} equals ${convertToWord(computer)}${smallCompWord}. It's a Draw!`;
  userChoice_div.classList.add('grey-glow');
  setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300)
}

function game(userChoice)
{
  const compChoice = getComputerChoice();
  switch (userChoice + compChoice)
  {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, compChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, compChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, compChoice);
      break;
  }
}

function main()
{
    rock_div.addEventListener('click', () => game("rock"));

  paper_div.addEventListener('click', () => game("paper"));

  scissors_div.addEventListener('click', () => game("scissors"));
}
main();



































