const code = document.querySelector("#code");
const btn = document.querySelector("#btn");

btn.addEventListener("click", ()=> {
    let codeProduct = code.value
    productChoose(codeProduct)
    
})


const productChoose = (code) => {
   /* switch(code) {
        case "100":
            window.alert("Você escolheu um Cachorro Quente, isso irá custar R$ 3,00")
        break;
        case "200":
            window.alert("Você escolheu um Hambúrguer Simples, isso irá custar R$ 4,00")
        break;
        case "300":
            window.alert("Você escolheu um Cheeseburguer, isso irá custar R$ 5,50")
        break;
        case "400":
            window.alert("Você escolheu um Bauru, isso irá custar R$ 7,50")
        break;
        case "500":
            window.alert("Você escolheu uma Refrigerante, isso irá custar R$ 3,50")
        break;
        case "600":
            window.alert("Você escolheu um Suco, isso irá custar R$ 2,80")
        break;
        default:
            window.alert("Produto não existente")
            break;

    } */

    let products = {
        '100': "Você escolheu um Cachorro Quente, isso irá custar R$ 3,00",
        '200': "Você escolheu um Hambúrguer Simples, isso irá custar R$ 4,00",
        '300': "Você escolheu um Cheeseburguer, isso irá custar R$ 5,50",
        '400': "Você escolheu um Bauru, isso irá custar R$ 7,50",
        '500': "Você escolheu uma Refrigerante, isso irá custar R$ 3,50",
        '600': "Você escolheu um Suco, isso irá custar R$ 2,80",
        'default': "Produto não existente"
    }
    return window.alert(products[code] ||products['default'])

}
