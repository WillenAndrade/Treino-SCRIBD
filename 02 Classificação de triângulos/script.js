const LadoA = document.querySelector('#LadoA')
const LadoB = document.querySelector('#LadoB')
const LadoC = document.querySelector('#LadoC')
const botao= document.querySelector('#btn-calc')

botao.addEventListener("click", ()=>{
    let comprimentoA = parseInt(LadoA.value);
    let comprimentoB = parseInt(LadoB.value);
    let comprimentoC = parseInt(LadoC.value);
    calcularTriangulo(comprimentoA, comprimentoB, comprimentoC)
})

const calcularTriangulo = (A, B, C) => {

    if(A == B && B == C) {
        window.alert("Este triangulo é equilátero!")
    } else if (A == B || B == C || A == C) {
        window.alert("Este triangulo é Isósceles!")
    } else {
        window.alert("Este triangulo é Escaleno!")
    }
    }

