const moneyInput = document.querySelector("#moneyinput"),
button = document.querySelector("#banknotes");

button.addEventListener("click", (e) => {
    e.preventDefault()
    calcularCedulas(valor)
})

function calcularCedulas(valor) {
    const cedulas = [100, 50, 10, 5, 1];
    const resultado = {};

    for (let cedula of cedulas) {
        if (valor >= cedula) {
            const quantidade = Math.floor(valor / cedula);
            resultado[cedula] = quantidade;
            valor %= cedula;
        }
    }

    return resultado;
}

function exibirResultado(resultado) {
    for (let cedula in resultado) {
        console.log(`${resultado[cedula]} nota(s) de R$ ${cedula}`);
    }
}

const valorInformado = parseInt(prompt("Informe o valor desejado:"));

if (isNaN(valorInformado) || valorInformado <= 0) {
    console.log("Por favor, insira um valor válido.");
} else {
    const resultado = calcularCedulas(valorInformado);
    exibirResultado(resultado);
}