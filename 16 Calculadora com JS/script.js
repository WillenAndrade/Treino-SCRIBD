var Valor = ""

var btnMais, btnMenos, btnVezes, btnDividir = false

const display = document.querySelector(".display")
const equal = document.querySelector(".equal")
const reset = document.querySelector(".reset")

const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const seven = document.querySelector(".seven")
const eight = document.querySelector(".eight")
const nine = document.querySelector(".nine")
const zero = document.querySelector(".zero")

const mais = document.querySelector(".mais")
const menos = document.querySelector(".menos")
const vezes = document.querySelector(".vezes")
const dividir = document.querySelector(".dividir")

var btnMais, btnMenos, btnVezes, btnDividir = false

one.addEventListener("click", () => {
    Valor += "1"
    display.innerHTML = Valor
})

two.addEventListener("click", () => {
    Valor += "2"
    display.innerHTML = Valor
})

three.addEventListener("click", () => {
    Valor += "3"
    display.innerHTML = Valor
})

four.addEventListener("click", () => {
    Valor += "4"
    display.innerHTML = Valor
})

five.addEventListener("click", () => {
    Valor += "5"
    display.innerHTML = Valor
})

six.addEventListener("click", () => {
    Valor += "6"
    display.innerHTML = Valor
})

seven.addEventListener("click", () => {
    Valor += "7"
    display.innerHTML = Valor
})

eight.addEventListener("click", () => {
    Valor += "8"
    display.innerHTML = Valor
})

nine.addEventListener("click", () => {
    Valor += "9"
    display.innerHTML = Valor
})

zero.addEventListener("click", () => {
    Valor += "0"
    display.innerHTML = Valor
})


mais.addEventListener("click", () => {
    var primeiroValor = parseInt(Valor)
    display.innerHTML = (`${primeiroValor} +`)
    Valor = ""
    btnMais = true

    equal.addEventListener("click", () => {
    
        let segundoValor = parseInt(Valor)
        calculadora(primeiroValor, segundoValor)
    })
    
})

menos.addEventListener("click", () => {
    var primeiroValor = parseInt(Valor)
    display.innerHTML = (`${primeiroValor} -`)
    Valor = ""
    btnMenos = true

    equal.addEventListener("click", () => {
    
        let segundoValor = parseInt(Valor)
        calculadora(primeiroValor, segundoValor)
    })
    
})

vezes.addEventListener("click", () => {
    var primeiroValor = parseInt(Valor)
    display.innerHTML = (`${primeiroValor} *`)
    Valor = ""
    btnVezes = true

    equal.addEventListener("click", () => {
    
        let segundoValor = parseInt(Valor)
        calculadora(primeiroValor, segundoValor)
    })
    
})

dividir.addEventListener("click", () => {
    var primeiroValor = parseInt(Valor)
    display.innerHTML = (`${primeiroValor} /`)
    Valor = ""
    btnDividir = true

    equal.addEventListener("click", () => {
    
        let segundoValor = parseInt(Valor)
        calculadora(primeiroValor, segundoValor)
    })
    
})



const calculadora = (A, B) => {
        let resultado = 0

        switch(true) {
            case btnMais: 
            resultado = A + B
            display.innerHTML = (`${resultado}`)
            break;
            case btnMenos: 
            resultado = A - B
            display.innerHTML = (`${resultado}`)
            break;
            case btnDividir: 
            resultado = A / B
            display.innerHTML = (`${resultado}`)
            break;
            case btnVezes: 
            resultado = A / B
            display.innerHTML = (`${resultado}`)
            break;
            default: 
            window.alert("operação invalida!")
        }

}








