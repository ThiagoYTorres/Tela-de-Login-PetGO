let senha = document.querySelector('.ema')
let email = document.querySelector('.sen')
let entrar = document.querySelector('#ent')
let ok = document.querySelector('#sucesso')
ok.style.display = 'none'

entrar.addEventListener('click',enter)
function enter() {
    if(email.value == '' || senha.value == '')
    {
        alert('Preencha o email/senha')
    }
    else{
        ok.innerHTML = 'LOGADO COM SUCESSO !'
        ok.style.display = 'inline-block'
    }
}
   
        