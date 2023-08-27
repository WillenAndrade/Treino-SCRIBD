const base = document.querySelector("#base");
const expoente = document.querySelector("#expoente");
const botao = document.querySelector("#botao");

let basis = parseInt(base.value);
let expoent = parseInt(expoente.value)


botao.addEventListener("click", ()=> {
    let basis = parseInt(base.value);
    let expoent = parseInt(expoente.value)

    let result = potencia(2,3)
    window.alert(`resultado é ${result}`)
})

const potencia = (basis, expoent) => {
    return Math.pow(basis, expoent)
}



