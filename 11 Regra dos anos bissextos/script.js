const botão = document.querySelector("#botão")

const anoInput = document.querySelector("#ano")

botão.addEventListener("click", () => {
    let ano = parseInt(anoInput.value)
    calcAnodiv4(ano)
})

const calcAnodiv4 = (ex) => {
        if(ex % 4 === 0 ) {
            window.alert("Esse ano  é divisível por 4")
            calcAnoDiv100(ano.value)
        } else {
            window.alert("Esse ano não é divisível por 4")
        }
}

const calcAnoDiv100 = (exb) => {
        if(exb % 100 === 0) {
            window.alert("Esse ano é divísivel por 100")
            
            calcAnoBissexto(ano.value)
        } else {
            window.alert(`Esse ano não é divisível por 100, portanto é bissexto!`)
        }

}

const calcAnoBissexto = (ex) => {
        if(ex % 400 === 0) {
            window.alert(`Esse ano é bissexto!`)
        } else {
            window.alert(`Esse ano não é bissexto`)
        }
}


/*const botão = document.querySelector("#botão")

const anoInput = document.querySelector("#ano")

let AnoBiss = false

botão.addEventListener("click", () => {
    let ano = parseInt(anoInput.value)
    calcAnoBissexto(ano)
})

const calcAnoBissexto = (A) => {
    if(A % 4 === 0 ) {
        let anoDiv4 = ano
        return anoDiv4
    }

    if(anoDiv4 % 400 === 0) {
        AnoBiss = true
        return anoBiss
    }

        return AnoBiss = false
}*/