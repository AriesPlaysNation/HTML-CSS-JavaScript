const usersScore = 0;
const compsScore = 0;

const usersScore_span = document.getElementById("userScore");
const compsScore_span = document.getElementById("compScore");

const scoreBoard_div = document.querySelector(".scoreBoard");
const result_div = document.querySelector(".result");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice()
{
  
}

function game(userChoice)
{

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























