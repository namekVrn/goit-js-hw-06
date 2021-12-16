function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector('input[type="number"]')
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')
const divBoxes = document.querySelector('#boxes')

btnCreate.addEventListener('click', ter)
function ter(){
  createBox(inputNumber.value, 10)
}
let countWidth = 30
function createBox(valueInput, widthNumber){
  
  for(let i = 0; i <= valueInput -1; i+=1){
    const box = document.createElement('div');
    countWidth += 10;
    box.style.width = countWidth+"px"
    box.style.height = countWidth+"px"
    box.style.backgroundColor = getRandomHexColor()
    divBoxes.append(box)
  }
}
btnDestroy.addEventListener('click', onDestroy)
function onDestroy(){
  divBoxes.innerHTML =""
}
