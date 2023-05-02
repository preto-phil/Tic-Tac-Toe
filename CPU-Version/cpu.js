function _cpuMoveFunction() {

  let cpuMove = Math.floor(Math.random() * 9) + 1;
  console.log(cpuMove);
  debugger;

  let div1 = document.getElementById('1');
  let div2 = document.getElementById('2');
  let div3 = document.getElementById('3');
  let div4 = document.getElementById('4');
  let div5 = document.getElementById('5');
  let div6 = document.getElementById('6');
  let div7 = document.getElementById('7');
  let div8 = document.getElementById('8');
  let div9 = document.getElementById('9');
  
  if (cpuMove === 1 && items[0] === '') {
    div1.innerText = 'O';
    items[0] = 'O';
  }
  if (cpuMove === 1 && items[0] !== '') {
    _cpuMoveFunction();
  }

  if (cpuMove === 2 && items[1] === '') {
    div2.innerText = 'O';
    items[1] = 'O';
  }
  if (cpuMove === 2 && items[1] !== ''){
    _cpuMoveFunction();
  }

  if (cpuMove === 3 && items[2] === '') {
    div3.innerText = 'O';
    items[2] = 'O';
  }
  if (cpuMove === 3 && items[2] !== '') {
    _cpuMoveFunction();
  }

  if (cpuMove === 4 && items[3] === '') {
    div4.innerText = 'O';
    items[3] = 'O';
  }
  if (cpuMove === 4 && items[3] !== '') {
    _cpuMoveFunction();
  }

  if (cpuMove === 5 && items[4] === '') {
    div5.innerText = 'O';
    items[4] = 'O';
  }
  if (cpuMove === 5 && items[4] !== '') {
    _cpuMoveFunction();
  }

  if (cpuMove === 6 && items[5] === '') {
    div6.innerText = 'O';
    items[5] = 'O';
  }
  if (cpuMove === 6 && items[5] !== '') {
    _cpuMoveFunction();
  }

  if (cpuMove === 7 && items[6] === '') {
    div7.innerText = 'O';
    items[6] = 'O';
  }
  if (cpuMove === 7 && items[6] !== '') {
    _cpuMoveFunction();
  }

  if (cpuMove === 8 && items[7] === '') {
    div8.innerText = 'O';
    items[7] = 'O';
  } 
  if (cpuMove === 8 && items[7] !== '') {
    _cpuMoveFunction();
  }

  if (cpuMove === 9 && items[8] === '') {
    div9.innerText = 'O';
    items[8] = 'O';
  }
  if (cpuMove === 9 && items[8] !== '') {
    _cpuMoveFunction();
  }
}





            
while ((cpuMove == 1 && (items[0] != ''))
|| (cpuMove == 2 && (items[0] != ''))
|| (cpuMove == 3 && (items[0] != ''))
|| (cpuMove == 4 && (items[0] != ''))
|| (cpuMove == 5 && (items[0] != ''))
|| (cpuMove == 6 && (items[0] != ''))
|| (cpuMove == 7 && (items[0] != ''))
|| (cpuMove == 8 && (items[0] != ''))
|| (cpuMove == 9 && (items[0] != ''))) {
cpuMove = Math.floor(Math.random() * 9) + 1;
}