// const jsTargetButton = document.querySelector('.js-target') //Целевая кнопка
// const addListener = document.querySelector('.js-add-listener')
// const removeListener = document.querySelector('.js-remove-listener')

// addListener.addEventListener('click', (()=>{
//     console.log("Вешаем событие на Целевую кнопку");
//     jsTargetButton.addEventListener('click', onTargetBtn)
// }))
// removeListener.addEventListener('click', (()=>{
//     console.log("Удаляем слушателя");
//     jsTargetButton.removeEventListener('click', onTargetBtn)
// }))

// function onTargetBtn(){
//     console.log("Нажатие на целевую кнопку")
// }


//События формы вытащить все данные через forEach

// const formData = {
//     formBtn: document.querySelector(".js-form-register"),
// }
// formData.formBtn.addEventListener('submit', onFormSubmit)
// function onFormSubmit(event){
//     event.preventDefault(); //Отменяет перезагрузку страници при отправки формы
//     console.log(event.currentTarget.elements.email.value)
//     const formData = new FormData(event.currentTarget) //Автоматически проходит по всем элементам формы и собирает значение value, в качестве прототипа указываем event.currentTurget
//     formData.forEach((value, key)=>{
//     console.log(key,value)
//  })
// }


//События формы вытащить данные статически
// const form = document.querySelector('.js-form-register')
// form.addEventListener('submit', onFormSubmit)
// function onFormSubmit(event){
//     event.preventDefault();
//     const valueEmail = event.currentTarget.elements.email.value;
//     const totalDataFord = new FormData(event.currentTarget)
//     totalDataFord.forEach((value,key)=>{
//         console.log(key, value)
//     })
// }
   
//Событие inputov полей вводов
// const href = {
//     inputName: document.querySelector('.js-input-name'),
//     checkBox: document.querySelector('.js-check'),
//     btn: document.querySelector('.js-btn'),
//     btnSpan: document.querySelector('.js-btn>span'),
// }

// href.inputName.addEventListener('input', onInputGet)
// href.checkBox.addEventListener('change', onLinerCheck)
// function onInputGet(event){
//     href.btnSpan.textContent = event.currentTarget.value;
   
// }
// function onLinerCheck(event){
//    href.btn.disabled = !event.currentTarget.checked;
// }
