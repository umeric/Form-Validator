const form = document.getElementById('form')
const username= document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordCheck= document.getElementById('passwordCheck')


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
})

function checkInput(){
    //gets the values from the input
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordCheckValue = passwordCheck.value.trim()
    //trim function removes all white space in value entered

    if(usernameValue === ''){
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank');
        } else {
            //add success class
            setSuccessfor(username)
        }
        if(emailValue === ''){
            setErrorFor(email, 'email cannot be blank');
            } 
        if(emailValue === ''){
            setErrorFor(email, 'Email cannot be blank')
        } else if(!isEmail(emailValue)){
            setErrorFor(email, 'Email is not valid')
        } else {
            setSuccessfor(email)
        }
        if(passwordValue === ''){
            setErrorFor(password, 'Password cannot be blank');
        } else {
            setSuccessfor(password)
        }
        if(passwordCheckValue === ''){
            setErrorFor(passwordCheck, 'Email cannot be blank')
        } else if(passwordValue !== passwordCheckValue){
            setErrorFor(passwordValue, 'Password does not exist')
        } else {
            setSuccessfor(passwordCheck)
        }


    }
function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error'
}

 function setSuccessfor(input) {
     const formControl = input.parentElement
     formControl.className = 'form-control success'
 }

function isEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}







/*const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
        if (name.value === '' || name.value == null){
            messages.push('Name is required')
        }
        if (password.value.length <= 6){
            messages.push('Password must be longer than 6 characters')
        }
        if (password.value.length >= 20){
            messages.push('Password must be less than 20 characters')
        }
        if (password.value === 'password') {
            messages.push('Password cannot be password')
        }
        if (messages.length > 0) {
            e.preventDefault()
            errorElement.innerText = messages.join(' , ')
        }
})
*/