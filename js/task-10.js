function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector('input[type="number"]')
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')
const divBoxes = document.querySelector('#boxes')

btnCreate.addEventListener('click', ter)
function ter(){
  createBox(inputNumber.value)
}

function createBox(valueInput){
  
  for(let i = 0; i <= valueInput -1; i+=1){
    const box = document.createElement('div')
    box.style.width = "30px"
    box.style.height = "30px"
    box.style.backgroundColor = getRandomHexColor()
    divBoxes.append(box)
  }
}
btnDestroy.addEventListener('click', onDestroy)
function onDestroy(){
  divBoxes.innerHTML =""
}
