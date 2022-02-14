const form = document.getElementById('form')
form.addEventListener('submit', (element) => {
    element.preventDefault();
    checkRequierd();
    checkLength();
})
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

function checkRequierd() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const password2Value = password2.value;

    if(usernameValue === '') {
        showError(username, 'Username was not entered correctly')
    }else {
        showSuccess(username);
    };
    if(emailValue === '') {
        showError(email, 'Username was not entered correctly')
    }else if(!checkEmail(emailValue)) {
        showError(email, 'Your email is not valid')
    }else {
        showSuccess(email)
    };
    if(passwordValue === '') {
        showError(password, 'Username was not entered correctly')
    }else {
        showSuccess(password)
    }
    if(password2Value === '') {
        showError(password2, 'Username was not entered correctly')        
    }else if(passwordValue !== password2Value) {
        showError(password2, 'Does not match') 
    }else{
        showSuccess(password2)
    }
}
function showError(inputId, message) {
    const formControl = inputId.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error'
}
function showSuccess(inputId) {
    const formControl = inputId.parentElement;
    formControl.className = 'form-control success'
}
function checkEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}
function checkLength() {
    let input = document.querySelector('.content');
    if(input.value.length <= 150 && input.value.length >= 5) {
        return true;
    } else if(input.value.length >= 150){
        showError(input, 'Too many letters')
        // showError(username, 'Too many letters')
        // showError(password, 'Too many letters')
        // showError(password2,'Too many letters')
    }else if(input.value.length <= 5){
        showError(input, 'Too few letters')
        // showError(username, 'Too few letters')
        // showError(password, 'Too few letters')
        // showError(password2,'Too few letters')
    }
}