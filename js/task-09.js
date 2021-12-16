function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnChangeBgColor = document.querySelector('.change-color')
const spanColor = document.querySelector('.color')

btnChangeBgColor.addEventListener('click', onchangeColor)
function onchangeColor(event){
  document.body.style.backgroundColor = getRandomHexColor()
  spanColor.textContent = getRandomHexColor()
}