const dia = document.querySelector("#dianum")

const botão = document.querySelector("#botão")

botão.addEventListener("click", () => {
    let diaNum = parseInt(dia.value)
    diaUtil(diaNum)


})

/*const diaUtil = (dia) => {
    if(dia == 1) {
        window.alert("Hoje é domingo, dia não útil")
    } else if (dia == 2) {
        window.alert("Hoje é segunda, dia útil")
    } else if(dia == 3) {
        window.alert("Hoje é terça, dia útil")
    } else if(dia == 4) {
        window.alert("Hoje é quarta, dia útil")
    } else if(dia == 5) {
        window.alert("Hoje é quinta, dia útil")
    } else if(dia == 6) {
        window.alert("Hoje é sexta, dia útil")
    } else if(dia == 7) {
        window.alert("Hoje é sábado, dia não útil")
    } else {
        window.alert("Escreva um dia válido!")
    }
}*/

/*const diaUtil = (dia) => {
    switch (dia) {
        case 1 : window.alert("Hoje é domingo, dia não útil");
        break;
        case 2: window.alert("Hoje é segunda, dia útil");
        break;
        case 3: window.alert("Hoje é terça, dia útil");
        break;
        case 4: window.alert("Hoje é quarta, dia útil");
        break;
        case 5: window.alert("Hoje é quinta, dia útil");
        break;
        case 6: window.alert("Hoje é sexta, dia útil");
        break;
        case 7: window.alert("Hoje é sábado, dia não útil");
        break;
        default: window.alert("Escreva um dia válido!");
    } 
}*/

const diaUtil = (dia) => {
    let semana = {
        "1": "Hoje é domingo, dia não útil",
        "2": "Hoje é segunda, dia útil",
        "3": "Hoje é terça, dia útil",
        "4": "Hoje é quarta, dia útil",
        "5": "Hoje é quinta, dia útil",
        "6": "Hoje é sexta, dia útil",
        "7": "Hoje é sábado, dia não útil",
        "default": "Escreva um dia válido!"
    }
    return window.alert(semana[dia] || semana['default'])
}