const arrayOfObjs = [
    {
        fullname:"Joseph",
        city:"Lagos"
    },
    {
        fullname:"Paul",
        city:"Nairobi"
    },
    {
        fullname:"David",
        city:"Maine"
    }
]

localStorage.setItem("bios", JSON.stringify(arrayOfObjs))
const gotten = JSON.parse(localStorage.getItem("bios"))
console.log(gotten);