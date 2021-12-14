let counter = 0;
const buttonDecrement = document.querySelector('button[data-action="decrement"]')
const buttonIncrement = document.querySelector('button[data-action="increment"]')
const counterSpan = document.querySelector('#value');
buttonIncrement.addEventListener('click', incrementCounter)
buttonDecrement.addEventListener('click', decrementCounter)

    function incrementCounter(event) {
      counterSpan.textContent = counter +=1
    }
    function decrementCounter(event){
      counterSpan.textContent = counter -=1;
    }