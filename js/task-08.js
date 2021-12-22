
const formData = {
    formBtn: document.querySelector(".login-form"),
}
formData.formBtn.addEventListener('submit', onFormSubmit)

function onFormSubmit(event){
    event.preventDefault(); //Отменяет перезагрузку страници при отправки формы
    let email = event.currentTarget.elements.email.value
    let password = event.currentTarget.elements.password.value
    const sendingServer = {}
    
    if( email === "" || password === ""){
        alert("Заполните все поля")
    }else{
    const getForm = new FormData(event.currentTarget)
    getForm.forEach((password, key)=>{
        sendingServer[key] = password;
    })
    formData.formBtn.reset()
    console.log(sendingServer)}
       
}
