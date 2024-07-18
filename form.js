let fullNameInput = document.getElementById("fullname")
let emailInput = document.getElementById("email")
let phoneNumberInput = document.getElementById("phonenumber")
let fullNameAlert = document.getElementById("fullname-alert")
let emailAlert = document.getElementById("email-alert")
let phoneAlert = document.getElementById("phone-alert")
let button = document.getElementById("button")


fullNameInput.addEventListener("keyup", function(){
    validateFullNameInput()
})

function validateFullNameInput(){
    let userFullName = fullNameInput.value 
    if(userFullName.length == 0){
        fullNameAlert.innerText = `Enter Full Name`
        fullNameInput.style.border = "1px solid red"
    }else if(!userFullName.match(/^[^\d]+$/)){
        fullNameAlert.innerText = `You cannot enter numbers in this field`
    }else{
        fullNameAlert.innerText = ` `
        fullNameInput.style.border = "2px solid green"
    }
}