let email = 'teste@teste.com.br';
console.log(email)

console.log('O e-mail é: ' + email)
console.log(`O e-mail é: ${email} <- utilizando template string`)

document.getElementById('btn-submit').addEventListener('click', e => {

    console.log('O botão foi clicado!');
});

document.getElementById('form-login').addEventListener('mouseenter', e => {

    console.log('O mouse está sobre o formulário!');
});

document.querySelector('#form-login').addEventListener('mouseleave', e => {

    console.log('O mouse está fora do formulário!');
});

document.querySelector('#form-login').addEventListener('submit', e => {

    e.preventDefault();
    console.log('Formulário enviado!');
});