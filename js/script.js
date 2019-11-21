// IPO Input Process Output

// 1.)Define the inputs - Constants and State Variables

const COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const KEY = {
   '1' :'X',
   '-1' :'O',
   'null': ''
}

// Things that change - turn, winner, gameboard

let turn, winner, gameboard;

// We need to cache element references (pieces of the DOM to interact with)

const squares = document.querySelectorAll('.square');
const message = document.getElementById('message');
//Define our process

document.querySelector('#gameboard').addEventListener('click', handleClick);
document.querySelector('#reset').addEventListener('click', init);

//this is where we start or restart our game
init(); // call the function to start the game

function init(){
    winner = false; // we don't have a winner - starting from zero
    turn = 1 //eventually this will be set to KEY[1]
    gameboard = [null, null, null, null, null, null, null, null, null];
    render();
}

function handleClick(evt){
    let selectedIndex = parseInt(evt.target.dataset.index);
    if(gameboard[selectedIndex] !== null) return;
    gameboard[selectedIndex] = turn;
    turn *= -1;
    render();
}

function render(){
    gameboard.forEach(function(elem, index){
        squares[index].textContent = KEY[elem]; 
    })
    message.innerHTML = `${KEY[turn]}'s Turn`;
}


