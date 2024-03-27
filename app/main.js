let livros = [];

const endPoint = ('https://guilhermeonrails.github.io/casadocodigo/livros.json')

buscarLivros();

async function buscarLivros() {
    const res = await fetch(endPoint)
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirLivrosNaTela(livrosComDesconto);
}
