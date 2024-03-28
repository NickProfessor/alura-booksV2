const botoesFiltro = document.querySelectorAll('.btn')

botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
        const valorDoFiltro = botao.getAttribute('value')
        let livrosFiltrados = livros.filter(livro => livro.categoria == valorDoFiltro);
        exibirLivrosNaTela(livrosFiltrados)
    })
})