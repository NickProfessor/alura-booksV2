let livros = [];
const containerLivros = document.querySelector('#livros');
const endPoint = ('https://guilhermeonrails.github.io/casadocodigo/livros.json')

buscarLivros();

async function buscarLivros() {
    const res = await fetch(endPoint)
    livros = await res.json();
    exibirLivrosNaTela(livros);
}
function exibirLivrosNaTela(listaDeLivros){
    listaDeLivros.forEach(livro => {
        containerLivros.innerHTML += `
            <div class="livro">
                <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
                <h2 class="livro__titulo">
                ${livro.titulo}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$${livro.preco}</p>
                <div class="tags">
                <span class="tag">${livro.categoria}</span>
                </div>
            </div>
        `
    })
}