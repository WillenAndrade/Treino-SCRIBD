paramInput = document.querySelector("#param")
botão = document.querySelector("#botão")

botão.addEventListener("click", () => {
    let parametro = parseInt(paramInput.value)
   window.alert(DivPorTrês(parametro))
})

const DivPorTrês = (param) => {
    return param % 3 === 0
}

