const nameFruit = document.querySelector("#fruitinput")

const btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
    messageFruits(nameFruit.value)
})

const messageFruits = (fruit) => {
    switch (fruit) {
        case "maçã": 
        window.alert("Não vendemos esta fruta aqui");
        break;
        case "kiwi": 
        window.alert("Estamos com escassez de kiwis");
        break;
        case "melância": 
        window.alert("Aqui está, são 3 reais o quilo");
        break;
        default:
        window.alert("Fruta invalida")
        break;
}
}
