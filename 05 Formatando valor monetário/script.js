const numberA = document.querySelector("#numberA"),
numberB = document.querySelector("#numberB"),
btn = document.querySelector("#btn")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    valueA = parseFloat(numberA.value)
    valueB = parseFloat(numberB.value)
    let amount = valueA + valueB
    window.alert(amount)
})

 