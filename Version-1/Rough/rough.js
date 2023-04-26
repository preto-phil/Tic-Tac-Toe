
//// Two diff ways to create game board grid

function createGameBoard() {
    
  const body = document.getElementById('body');

  for (let i = 0; i < 9; i++) {
    let number = i + 1;
    let className = 'item-' + number;

      items[i] = document.createElement('div');

    items[i].classList.add(className);
    items[i].setAttribute('data-index', i);
    items[i].textContent = '';
    items[i].addEventListener('click', toggleDisplay);
    items[i].addEventListener('click', toggleTurn);
    body.append(items[i]);

    // VS

    let div = document.createElement('div');

    div.classList.add(className);
    div.setAttribute('data-index', i);
    div.textContent = '';
    div.addEventListener('click', toggleDisplay);
      items[i].addEventListener('click', toggleTurn);
    body.append(div);
    items.push(div);
  };
};




// Experimental area

function createGameboard() {

  let item1 = document.createElement('div');
  item1.classList.add('item-1');
  item1.textContent = "1";
  
  let item2 = document.createElement('div');
  item2.classList.add('item-2');
  item2.textContent = "2";

  let item3 = document.createElement('div');
  item3.classList.add('item-3');
  item3.textContent = "3";

  let item4 = document.createElement('div');
  item4.classList.add('item-4');
  item4.textContent = "4";

  let item5 = document.createElement('div');
  item5.classList.add('item-5');
  item5.textContent = "5";

  let item6 = document.createElement('div');
  item6.classList.add('item-6');
  item6.textContent = "6";

  let item7 = document.createElement('div');
  item7.classList.add('item-7');
  item7.textContent = "7";

  let item8 = document.createElement('div');
  item8.classList.add('item-8');
  item8.textContent = "8";

  let item9 = document.createElement('div');
  item9.classList.add('item-9');
  item9.textContent = "9";



  const gameboardArray = [];
  gameboardArray.push(item1, item2, item3, item4, item5, item6, item7, item8, item9);

  

  console.log(gameboardArray);

  for (let item in gameboardArray) {
    const body = document.getElementById('body');
    body.append(item);
  };
}





createGameboard();

let item1 = document.createElement('div');
item1.classList.add('item-1');
item1.textContent = "1";
let item2 = document.createElement('div');
item2.classList.add('item-2');
item2.textContent = "2";
let item3 = document.createElement('div');
item3.classList.add('item-3');
item3.textContent = "3";
let item4 = document.createElement('div');
item4.classList.add('item-4');
item4.textContent = "4";
let item5 = document.createElement('div');
item5.classList.add('item-5');
item5.textContent = "5";
let item6 = document.createElement('div');
item6.classList.add('item-6');
item6.textContent = "6";
let item7 = document.createElement('div');
item7.classList.add('item-7');
item7.textContent = "7";
let item8 = document.createElement('div');
item8.classList.add('item-8');
item8.textContent = "8";
let item9 = document.createElement('div');
item9.classList.add('item-9');
item9.textContent = "9";

const body = document.getElementById('body');
body.append(item1);
body.append(item2);
body.append(item3);
body.append(item4);
body.append(item5);
body.append(item6);
body.append(item7);
body.append(item8);
body.append(item9);




//// Toggle Display
function toggleDisplay() {
  if (player.getSign === 'X') {
    this.innerText = 'X';
  } else {
    this.innerText = 'O';
  }
};

/// Display Controller
function displayController() {
  let round = 1;

  function toggleDisplay() {
    
    let remainder = round % 2;;
  
    if (round < 10) {
      if (remainder === 1) {
        // display = player 1 turn
        this.innerText = 'X';
        round = round + 1;
      } else {
        // display player 2 turn
        this.innerText = 'O';
        round = round + 1;
      }  
    }
  };
};

displayController();


////
const displayController = (() => {
  let round = 1;

  function toggleDisplay() {
    
    let remainder = round % 2;;
  
    if (round < 10) {
      if (remainder === 1) {
        // display = player 1 turn
        this.innerText = 'X';
        round = round + 1;
      } else {
        // display player 2 turn
        this.innerText = 'O';
        round = round + 1;
      }  
    }
  };

  return {
    toggleDisplay: toggleDisplay
  };

})();

//// Bloated BS code 


let item1 = document.getElementsByClassName('item-1');
let item2 = document.getElementsByClassName('item-2');
let item3 = document.getElementsByClassName('item-3');

// Win 1
if (
  item1.outerText === "X" &&
  item2.outerText === "X" &&
  item3.outerText === "X" 
) {
  console.log("You Win!")
}


// Win 2
if (
  item3.innerText === "X" &&
  item6.innerText === "X" &&
  item9.innerText === "X" 
) {
  console.log("You Win!")
}

// Win 3
if (
  item7.innerText === "X" &&
  item8.innerText === "X" &&
  item9.innerText === "X" 
) {
  console.log("You Win!")
}

// Win 4
if (
  item1.innerText === "X" &&
  item4.innerText === "X" &&
  item7.innerText === "X" 
) {
  console.log("You Win!")
}

// Win 5
if (
  item1.innerText === "X" &&
  item5.innerText === "X" &&
  item9.innerText === "X" 
) {
  console.log("You Win!")
}

// Win 6
if (
  item3.innerText === "X" &&
  item5.innerText === "X" &&
  item7.innerText === "X" 
) {
  console.log("You Win!")
}

// Win 7
if (
  item2.innerText === "X" &&
  item5.innerText === "X" &&
  item8.innerText === "X" 
) {
  console.log("You Win!")
}

// Win 8
if (
  item4.innerText === "X" &&
  item5.innerText === "X" &&
  item6.innerText === "X" 
) {
  console.log("You Win!")
}