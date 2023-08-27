const wageInput = document.querySelector(".wageinput")
const planOption = document.querySelector(".planoption")
const enviar = document.querySelector(".enviar")

enviar.addEventListener("click", (event) => {
    event.preventDefault()
    let planoptionAtual = planOption.value
    let wageInputAtual = parseInt(wageInput.value)
    calcAumento(wageInputAtual, planoptionAtual)
})

const calcAumento = (wage, plan) => {
    let aumento = 0
    switch (plan) {
        case "A": 
        aumento = (wage / 100) * 10
        wage += aumento
        window.alert(wage)
        break;
        case "B": 
        aumento = (wage / 100) * 15
        wage += aumento
        window.alert(wage)
        break;
        case "C": 
        aumento = (wage / 100) * 20
        wage += aumento
        window.alert(wage)
        break;
        default: 
        window.alert("Valor inválido")
        break;
    }
}





