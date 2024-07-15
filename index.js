const hexadecimalNumberSystem = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let button = document.getElementById("button")
let firstColorBox = document.getElementById("first-color-box")
let firstHexCode = document.getElementById("first-hex-code")

function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * hexadecimalNumberSystem.length) 
    return randomNumber
}

button.addEventListener("click", function(){
    let hexCodeForFirstBox = "#"
    for(let myFirstLoop = 0; myFirstLoop < 6; myFirstLoop++){
        hexCodeForFirstBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
    firstColorBox.style.backgroundColor = hexCodeForFirstBox
    firstHexCode.textContent = hexCodeForFirstBox

    

})


