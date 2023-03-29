let submit = document.querySelector("input[type='submit']")
let label = document.getElementsByClassName('error-mensage')

let firstName = document.getElementById('first-name')
let lastName = document.getElementById('last-name')
let email = document.getElementById('email')
let password = document.getElementById('password')

submit.addEventListener('click',()=>{
    if (firstName.value == "") {
        label[0].classList.add("visible")
       }else{
        label[0].classList.remove("visible")
       }
   if (lastName.value == "") {
    label[1].classList.add("visible")
   }else{
    label[1].classList.remove("visible")
   }
   if (email.value == "") {
    label[2].classList.add("visible")
   }else{
    label[2].classList.remove("visible")
   }
   if (password.value == "") {
    label[3].classList.add("visible")
   }else{
    label[3].classList.remove("visible")
   }
})
