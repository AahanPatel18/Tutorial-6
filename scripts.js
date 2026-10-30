// X goes first; nextPlayer alternates between X and O after each move.
let nextPlayer = 'X';

// Show the starting player in the next-player label.
document.getElementById('next-lbl').innerText = nextPlayer;

// Create the board buttons and attach their click listeners.
createGameBoard();

// Add one empty button to each cell and call takeCell when it is clicked.
function createGameBoard()
{
    for (let i = 1; i <= 9; i++)
    {
        let button = document.createElement('button');
        button.innerText = '[ ]';
        document.getElementById('c' + i).appendChild(button);
    }

    let btns = document.querySelectorAll('#gameboard button');

    for (let i = 0; i < btns.length; i++)
    {
        btns[i].addEventListener('click', takeCell);
    }
}

// Fill the clicked cell with the current player's symbol and switch turns.
function takeCell(event)
{
    let button = event.currentTarget;
    button.innerText = '[' + nextPlayer + ']';

    // Disable the button so the same cell cannot be chosen again.
    button.disabled = true;

    // Update both the next player and the displayed label.
    nextPlayer = nextPlayer === 'X' ? 'O' : 'X';
    document.getElementById('next-lbl').innerText = nextPlayer;

    // End the game only when all nine cells have been chosen.
    if (isGameOver())
    {
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
    }
}

// Return true when all board buttons are disabled; otherwise return false.
function isGameOver()
{
    let btns = document.querySelectorAll('#gameboard button');

    for (let i = 0; i < btns.length; i++)
    {
        if (!btns[i].disabled)
        {
            return false;
        }
    }

    return true;
}
