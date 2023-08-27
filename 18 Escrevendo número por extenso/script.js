const numberInput = document.querySelector("#numberinput")
const btn = document.querySelector("#btn")

btn.addEventListener("click", (e)=>{
    e.preventDefault()
    sayNumber(numberInput.value)
})

/*const sayNumber = (number) => {
    switch(number) {
        case "0": 
        window.alert("zero")
        break;
        case "1": 
        window.alert("one")
        break;
        case "2": 
        window.alert("two")
        break;
        case "3": 
        window.alert("three")
        break;
        case "4": 
        window.alert("four")
        break;
        case "5": 
        window.alert("five")
        break;
        case "6": 
        window.alert("six")
        break;
        case "7": 
        window.alert("seven")
        break;
        case "8": 
        window.alert("eight")
        break;
        case "9": 
        window.alert("nine")
        break;
        case "10": 
        window.alert("Dez")
        break;
        default:
            window.alert("Número inválido")
    }
}*/

  const sayNumber = (input) => {
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
  }
