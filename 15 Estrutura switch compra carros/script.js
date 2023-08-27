const btn = document.querySelector("#btn")
const select = document.querySelector("#select")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    escolhaAuto(select.value)
})


/*const escolhaAuto = (selecionado) => {
    switch (selecionado) {
        case "hatch": 
            window.alert("Compra efetuada com sucesso!");
        break;
        case "sedã":
            window.alert("Tem certeza que não prefere este modelo?");
        break;
        case "motos":
            window.alert("Tem certeza que não prefere este modelo?");
        break;
        case "coupe":
            window.alert("Tem certeza que não prefere este modelo?");
        break;
        default : window.alert("Desculpe, não trabalhamos com este modelo!");    
        break
    }
}*/

const escolhaAuto = (selecionado) => {
    let modelos = {
        'hatch': 'Compra efetuada com sucesso!',
        'sedã': 'Tem certeza que não prefere este modelo?',
        'motos': 'Tem certeza que não prefere este modelo?',
        'coupe': 'Tem certeza que não prefere este modelo?',
        'default': 'desculpe, não trabalhamos com este modelo!'
    }
    window.alert(modelos[selecionado] || modelos['default'])
} 



/*const sayNumber = (input) => {
    let numbers = {
        '0': "zero",
        '1': "one",
        '2': "two",
        '3': "three",
        '4': "four",
        '5': "five",
        '6': "six",
        '7': "seven",
        '8': "eight",
        '9': "nine",
        'default': "numero inválido!"
    }
    return window.alert(numbers[input] || numbers['default'])
  }*/