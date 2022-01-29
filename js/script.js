let nomePrato = null
let preçoPrato = null
let nomeBebida = null
let preçoBebida = null
let nomeSobremesa = null
let preçoSobremesa = null
let preçoTotal = null

function selecionarPrato(numPrato, nome, preço) {
    const selecionado = document.querySelector(".pratos .selecionado")
    if (selecionado != null) {
        selecionado.classList.remove("selecionado")
    }
   
    nomePrato = nome
    preçoPrato = preço

    const prato = document.querySelector(".pratos ." + numPrato)
    prato.classList.add("selecionado")
    habilitarPedido()
}

function selecionarBebida(numBebida, nome, preço) {
    const selecionado = document.querySelector(".bebidas .selecionado")
    if (selecionado != null) {
        selecionado.classList.remove("selecionado")
    }

    nomeBebida = nome
    preçoBebida = preço

    const prato = document.querySelector(".bebidas ." + numBebida)
    prato.classList.add("selecionado")
    habilitarPedido()
}

function selecionarSobremesa(numSobremesa, nome, preço) {
    const selecionado = document.querySelector(".sobremesas .selecionado")
    if (selecionado != null) {
        selecionado.classList.remove("selecionado")
    }

    nomeSobremesa = nome
    preçoSobremesa = preço

    const prato = document.querySelector(".sobremesas ." + numSobremesa)
    prato.classList.add("selecionado")
    habilitarPedido()
}

function habilitarPedido() {
    if (nomePrato != null && nomeBebida != null && nomeSobremesa != null) {
        const botao = document.querySelector(".retangulo")
        botao.classList.add("pedido-habilitado")
        botao.innerHTML = "Fechar Pedido"
        somarPreço(preçoPrato, preçoBebida, preçoSobremesa)
    }
}

function somarPreço(preço1, preço2, preço3) {
    let total = preço1 + preço2 + preço3
    preçoTotal = total.toFixed(2)
}

