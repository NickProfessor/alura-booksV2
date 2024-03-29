const btnOrdenarPorPreco = document.querySelector('#btnOrdenarPorPreco');

btnOrdenarPorPreco.addEventListener('click', () => {
    const livrosOrdenarPorPreco = livros.sort((a,b) => a.preco-b.preco);
    exibirLivrosNaTela(livrosOrdenarPorPreco)
})