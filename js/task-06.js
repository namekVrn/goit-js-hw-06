const inputValue = document.querySelector('input[data-length="6"]')
inputValue.addEventListener('blur', onChecklength)
function onChecklength(event){
   
    event.currentTarget.classList.remove('invalid')

    if(event.currentTarget.value.length === Number(event.currentTarget.dataset.length)){
       event.currentTarget.classList.add('valid')
    }else{
        event.currentTarget.classList.add('invalid')
       }
    
}
