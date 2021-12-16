const valueRange = document.querySelector('#font-size-control')
const valueSpan = document.querySelector('#text')
valueRange.addEventListener('input', onChangeFontSize)
function onChangeFontSize(event){
    valueSpan.style.fontSize = event.currentTarget.value+"px"
}
console.log(valueRange)
