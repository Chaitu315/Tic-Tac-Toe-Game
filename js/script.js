let buttons = document.getElementsByClassName('box');
let nextPlayer = document.getElementById('next-player');
let moveCount = document.getElementById('move-count');
let winner = document.getElementById('winner');

let player1 = 'Player 1';
let player2 = 'Player 2';
let presentPlayer = '';

var count = 0;
var movesLeft = 9;

winner.style.display = "none";
nextPlayer.innerHTML = 'Turn Played By : ';
moveCount.innerHTML = 'Moves Left : 9';

function clickButton(boxNo)
{
    if(count % 2 == 0)
    {
        buttons[boxNo].innerText = "X";
        presentPlayer = player1;
        nextPlayer.innerHTML = 'Turn Played By : '+player1;   
    }
    else
    {
        buttons[boxNo].innerText = "O";
        presentPlayer = player2;
        nextPlayer.innerHTML = 'Turn Played By : '+player2;
    }
    count++;
    movesLeft--;
    moveCount.innerHTML = 'Moves Left : '+movesLeft;  

    buttons[boxNo].disabled = true;

    if(( buttons[0].innerText == "X" && buttons[1].innerText == "X" && buttons[2].innerText == "X" ) || 
       ( buttons[3].innerText == "X" && buttons[4].innerText == "X" && buttons[5].innerText == "X" ) ||
       ( buttons[6].innerText == "X" && buttons[7].innerText == "X" && buttons[8].innerText == "X" ) ||
       ( buttons[0].innerText == "X" && buttons[3].innerText == "X" && buttons[6].innerText == "X" ) ||
       ( buttons[1].innerText == "X" && buttons[4].innerText == "X" && buttons[7].innerText == "X" ) ||
       ( buttons[2].innerText == "X" && buttons[5].innerText == "X" && buttons[8].innerText == "X" ) ||
       ( buttons[0].innerText == "X" && buttons[4].innerText == "X" && buttons[8].innerText == "X" ) ||
       ( buttons[2].innerText == "X" && buttons[4].innerText == "X" && buttons[6].innerText == "X" ))
    {
        winner.style.display = "block";
        winner.innerText = 'Winner is : '+player1;

    }
    else if(( buttons[0].innerText == "O" && buttons[1].innerText == "O" && buttons[2].innerText == "O" ) || 
       ( buttons[3].innerText == "O" && buttons[4].innerText == "O" && buttons[5].innerText == "O" ) ||
       ( buttons[6].innerText == "O" && buttons[7].innerText == "O" && buttons[8].innerText == "O" ) ||
       ( buttons[0].innerText == "O" && buttons[3].innerText == "O" && buttons[6].innerText == "O" ) ||
       ( buttons[1].innerText == "O" && buttons[4].innerText == "O" && buttons[7].innerText == "O" ) ||
       ( buttons[2].innerText == "O" && buttons[5].innerText == "O" && buttons[8].innerText == "O" ) ||
       ( buttons[0].innerText == "O" && buttons[4].innerText == "O" && buttons[8].innerText == "O" ) ||
       ( buttons[2].innerText == "O" && buttons[4].innerText == "O" && buttons[6].innerText == "O" ))
    {
        winner.style.display = "block";
        winner.innerText = 'Winner is : '+player2;
    }
    else
    {
        winner.style.display = "block";
        winner.innerText = 'Winner is : No winner';
    }
}

function restartGame()
{
    window.location.reload();
}