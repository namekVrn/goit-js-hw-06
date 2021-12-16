
const formData = {
    formBtn: document.querySelector(".login-form"),
}
formData.formBtn.addEventListener('submit', onFormSubmit)

function onFormSubmit(event){
    event.preventDefault(); //Отменяет перезагрузку страници при отправки формы
    let email = event.currentTarget.elements.email.value
    let password = event.currentTarget.elements.password.value
    const sendingServer = {
        email,
        password,
    }
    
    if( email === "" || password === ""){
        alert("Заполните все поля")
    }
    const getForm = new FormData(event.currentTarget)
    getForm.forEach(()=>{
        sendingServer.password = password;
        sendingServer.email = email;
    })
    formData.formBtn.reset()
    console.log(sendingServer)

       
}
