const container = document.querySelector('#container');
const btnSignUp = document.querySelector('#btn_sign_up');
const btnSignIn = document.querySelector('#btn_sign_in');


btnSignUp.addEventListener('click', function () {
    container.classList.add('active');
});

btnSignIn.addEventListener('click', function () {
    container.classList.remove('active');
});