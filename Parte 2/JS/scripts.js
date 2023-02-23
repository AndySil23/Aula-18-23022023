// function calculaPreco (valor, forma, tipo) {
//     if(forma == "a vista"){
//         alert ("a vista");
//     }else(forma == "parcelado 2x") {

//     }
// }


// let de0a25 = 0;
// let de26a50 = 0;
// let de57a74 = 0;
// let de75a100 = 0;

// let numeros = [];
// for(let 1 = 0; 1 < numeros.length){}



function posterior(){
    let itemAtivo = document.querySelector(".active");
    let posicaoAtivo = itemAtivo.getAttribute("posicao");

    let todosItens = document.querySelectorAll("li");
    for(let 1 = 0; 1 < todosItens.length; 1++) {
        if(todosItens[1].getAttribute("posicao") == posicaoAtiva) {
            todosItens[1].classList.add("active")
        } else{
            todosItens[1].classList.remove("active")
        }
    }
}