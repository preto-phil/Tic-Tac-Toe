
//// Gameboard Object

const gameBoard = (() => {

  function createGameBoard() {
    const items = [];
    const body = document.getElementById('body');

    for (let i = 0; i < 9; i++) {
      let number = i + 1;
      let className = 'item-' + number;

      items[i] = document.createElement('div');

      items[i].classList.add(className);
      items[i].textContent = number;
      body.append(items[i]);
    };
  };

  return {
    createGameBoard: createGameBoard
  };

})();

gameBoard.createGameBoard();




/* gameBoard.createGameboard();
 */
/* const playerOne = [];

const playerTwo = []; */

// Experimental area

/* const item1 = document.getElementsByClassName('item-1');
const item2 = document.getElementsByClassName('item-2');
const item3 = document.getElementsByClassName('item-3');
const item4 = document.getElementsByClassName('item-4');
const item5 = document.getElementsByClassName('item-5');
const item6 = document.getElementsByClassName('item-6');
const item7 = document.getElementsByClassName('item-7');
const item8 = document.getElementsByClassName('item-8');
const item9 = document.getElementsByClassName('item-9'); */

/* const body = document.getElementsByClassName('body');
const item1 = document.createElement('div').classList.add('item-1');
const item2 = document.createElement('div').classList.add('item-2');
const item3 = document.createElement('div').classList.add('item-3');
const item4 = document.createElement('div').classList.add('item-4');
const item5 = document.createElement('div').classList.add('item-5');
const item6 = document.createElement('div').classList.add('item-6');
const item7 = document.createElement('div').classList.add('item-7');
const item8 = document.createElement('div').classList.add('item-8');
const item9 = document.createElement('div').classList.add('item-9');

const gameboardArray = [
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
]; */

/* function createGameboard() {
  

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
 */

/* let item1 = document.createElement('div');
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
body.append(item9); */





