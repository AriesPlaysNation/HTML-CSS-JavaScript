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
  usersScore++;
  usersScore_span.innerHTML = usersScore;
  compsScore_span.innerHTML = compsScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You Win!"`;
}

function lose(user, computer)
{
  compsScore++;
  usersScore_span.innerHTML = usersScore;
  compsScore_span.innerHTML = compsScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(computer)}${smallCompWord} loses to ${convertToWord(user)}${smallUserWord}. You Lose!"`;
}

function draw(user, computer)
{
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(user)} equals ${convertToWord(computer)}. It's a Draw!`;
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
    rock_div.addEventListener('click', function()
  {
    game("rock");
  })

  paper_div.addEventListener('click', function()
  {
    game("paper");
  })

  scissors_div.addEventListener('click', function()
  {
    game("scissors");
  })
}
main();



































