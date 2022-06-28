    // var tabuada = document.querySelector("#tabuada");
    // var bodyTabuada = tabuada.querySelector("tbody");
    // var valorA = parseInt(document.querySelector("#valorA").value);


function calculaTabuada (){

    let tabuada = document.querySelector("#tabuada");
    let bodyTabuada = tabuada.querySelector("tbody");
    let valorA = parseInt(document.querySelector("#valorA").value);

    bodyTabuada.innerHTML = '';

    for (let valorB = 0; valorB <= 10; valorB++) {

        let resultado = valorA * valorB;

        let template = `
            <td>${valorA}</td>
            <td>x</td>
            <td>${valorB}</td>
            <td>=</td>
            <td>${resultado}</td>
        `;

        let tr = document.createElement("tr");

        tr.innerHTML = template;

        bodyTabuada.append(tr);
    }
}

calculaTabuada();

document.querySelector("#valorA").addEventListener('change', calculaTabuada);