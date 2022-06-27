// let email = 'teste@teste.com.br';
// console.log(email)

// console.log('O e-mail é: ' + email)
// console.log(`O e-mail é: ${email} <- utilizando template string`)

//document.getElementById('btn-submit').addEventListener('click', e => {

    //console.log('O botão foi clicado!');
//});

//document.getElementById('form-login').addEventListener('mouseenter', e => {

    // console.log('O mouse está sobre o formulário!');
//});

document.querySelector('#form-login').addEventListener('mouseleave', e => {

    //console.log('O mouse está fora do formulário!');
});

//document.querySelector('#form-login').addEventListener('submit', e => {

    // e.preventDefault();
    
    // let email = document.querySelector('#email').value;
    // let password = document.querySelector('#password').value;
    
    // console.log(email, password);


//});


document.getElementById('form-login').addEventListener('mouseleave', e => {

    //Para testes diversos
    // let email = document.querySelector('#email');
    // let password = document.querySelector('#password');

    // console.log(email);
    // console.log(password);


    //let var_email = document.querySelector('#email').value;
    //let var_password = document.querySelector('#password').value;

    // let json = 
    // {
    //     email: var_email
    // };

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    // Quando o nome da variável é o mesmo da propriedade do Json, basta informar apenas uma única vez.
    let json = 
        {
            email,
            password

        };

    //console.log(json);
    //console.log(json.email);

    let stringJson = JSON.stringify(json);

    //console.log(stringJson);

    let jsonParse = JSON.parse(stringJson);

    //console.log(jsonParse);

    // Validando os dados
    // if(json.email !== "") {
    //     console.log('O campo foi preenchido!');
    // }
    
    // Valida se NÃO existe valor
    if(!json.email) {
        console.error("O campo deve ser preenchido!");
        return;
    } else if (!json.password) {
        console.error("O campo password deve ser preenchido!")
        return;
    }

    console.info("Dados validados com sucesso!");
    



});
