btnCarrinho = document.getElementsByClassName("btnCarrinho")
let i = 1

Array.from(btnCarrinho).forEach(element => {
    element.addEventListener('click' , ()=>{
        alert(`Produto adicionado ao carrinho\nVocê tem ${i} produtos no carrinho !`)

        i++
    })
}); 
