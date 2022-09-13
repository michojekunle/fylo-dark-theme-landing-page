const emailInput = document.querySelector('input');
const form  = document.querySelector('.form');
const errorMessage = document.querySelector('#form-error');

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

form.addEventListener('submit', (e) => {
    if (emailInput.value === ''){
        e.preventDefault();
        errorMessage.innerText = 'Email is required, Please enter your Email!';
    } else if(isEmailValid(emailInput.value.trim())){

    } else {
        e.preventDefault();
        errorMessage.innerText = 'Invalid Email, Please type in a valid email!';
    }
})

