precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio


function sumar(){
    let cantidad= document.querySelector(".cantidad")
    let valor = parseInt(cantidad.innerHTML)
    cantidad.innerHTML = valor + 1
    let total = document.querySelector (".valor-total")
    total.innerHTML = parseInt(cantidad.innerHTML) * precio
}
function restar(){
    let cantidad= document.querySelector(".cantidad")
    let valor = parseInt(cantidad.innerHTML)
    if(valor>0){
        cantidad.innerHTML = valor - 1
        let total = document.querySelector(".valor-total")
        total.innerHTML = parseInt(cantidad.innerHTML) * precio
    }
}