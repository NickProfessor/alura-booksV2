const botoesFiltro = document.querySelectorAll('.btn')

botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
        const valorDoFiltro = botao.getAttribute('value')
        let livrosFiltrados = valorDoFiltro == 'disponivel' ?
        filtrarPorDisponibilidade()
        :filtrarPorCategoria(valorDoFiltro);
        exibirLivrosNaTela(livrosFiltrados)
        if (valorDoFiltro == 'disponivel') {
            const valorTotal = calcularValorTotalDosDisponiveis(livrosFiltrados)
            exibeValorTotalDosLivros(valorTotal)
        }
    })
})

function exibeValorTotalDosLivros(valorTotal){
    elementoValorTotalDosLivros.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}
function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}
function filtrarPorCategoria(valorDoFiltro) {
    return livros.filter(livro => livro.categoria == valorDoFiltro);
}

