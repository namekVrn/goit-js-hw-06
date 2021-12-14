const inputName = document.querySelector('#name-input')
const textSpan = document.querySelector('#name-output')

inputName.addEventListener('input', onGetSpan)
function onGetSpan(event){
   textSpan.textContent = event.currentTarget.value;
  if(event.currentTarget.value === ''){
    textSpan.textContent = "Anonymous" 
  }
}
