
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



