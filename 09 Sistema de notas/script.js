let notaInput = document.querySelector("#notas")
let botão = document.querySelector("#botão")


botão.addEventListener("click", () => {
    let nota = parseInt(notaInput.value)
    classificaAluno(nota)
})

function arredondaNota(nota) {
    // Verifica se a nota é menor que 38 (reprovação) ou se é maior que 100 (nota inválida)
    if (nota < 38 || nota > 100) {
      return nota;
    }
  
    // Calcula o próximo múltiplo de 5 da nota
    const proximoMultiploDe5 = Math.ceil(nota / 5) * 5;
  
    // Verifica se a diferença entre a nota e o próximo múltiplo de 5 é menor que 3
    // Se for, arredonda para o próximo múltiplo de 5
    if (proximoMultiploDe5 - nota < 3) {
      return window.alert(proximoMultiploDe5);
    }
  
    return window.alert(nota); // Caso contrário, retorna a nota original
  }
  
  function classificaAluno(nota) {
    // Verifica se a nota é válida (entre 0 e 100)
    if (nota < 0 || nota > 100) {
      return window.alert("Nota inválida. Insira uma nota entre 0 e 100.");
    }
  
    // Verifica se o aluno está aprovado ou reprovado
    if (nota >= 38) {
      // Caso esteja aprovado, chama a função de arredondamento da nota
      return arredondaNota(nota);
    } else {
      return window.alert("Reprovado"); // Aluno reprovado
    }
  }
  
  
  
  
  
  
  
  
  