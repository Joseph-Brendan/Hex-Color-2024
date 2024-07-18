let fullNameInput = document.getElementById("fullname")
let emailInput = document.getElementById("email")
let phoneNumberInput = document.getElementById("phonenumber")
let fullNameAlert = document.getElementById("fullname-alert")
let emailAlert = document.getElementById("email-alert")
let phoneAlert = document.getElementById("phone-alert")
let button = document.getElementById("button")


// Full Name Input Field Validation
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

// Email Input Field Validation
emailInput.addEventListener("keyup", function(){
    validateEmailInput()
})

function validateEmailInput(){
    let userEmail = emailInput.value 
    if(userEmail.length == 0){
        emailAlert.innerText = `Enter Your Email Address`
        emailInput.style.border = "1px solid red"
    }else if(!userEmail.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-z\-0-9]+\.)+[a-zA-z]{2,}))$/)){
        emailAlert.innerText = `Enter A Valid Email Address`
    }else{
        emailAlert.innerText = ` `
        emailInput.style.border = "2px solid green"
    }
}


