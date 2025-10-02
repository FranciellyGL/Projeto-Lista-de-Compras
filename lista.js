const tabela = document.getElementById("tabelaProdutos");

function pegarProdutos(){
    let produtos = JSON.parse(localStorage.getItem("produtos"))
    tabela.innerHTML = ""

    produtos.forEach((produto, index) => {
        tabela.innerHTML += `
        <tr>
            <td>${produto.nome}</td>
            <td>${parseInt(produto.quantidade)}</td>
            <td>R$ ${parseFloat(produto.preco).toFixed(2)}</td>
            <td>${produto.categoria}</td>
            <td>${produto.origem}</td>
            <td>${produto.lote}</td>
            <td>${produto.validade}</td>
            <td>
                <button class=" p-1 m-1 bg-green-500 text-white font-bold rounded hover:bg-green-600" onclick="editar(${index})">Editar</button>
                <button class=" p-1 m-1 bg-green-500 text-white font-bold rounded hover:bg-green-600" onclick="excluir(${index})">Excluir</button>
            </td>
        </tr>
        `  
    });
}
function excluir(index) {
    
    let produtos = JSON.parse(localStorage.getItem("produtos"));

    produtos.splice(index, 1);

    localStorage.setItem("produtos", JSON.stringify(produtos));
    pegarProdutos();
}

function editar(index) {
    let produtos = JSON.parse(localStorage.getItem("produtos"));
    let produto = produtos[index];

    let novoNome = prompt("Digite o novo nome do produto:", produto.nome);
    if (novoNome === null || novoNome.trim() === "") return; 

    let novaQuantidade = prompt("Digite a nova quantidade do produto:", produto.quantidade);
    if (novaQuantidade === null || isNaN(parseInt(novaQuantidade))) return; 

    let novoPreco = prompt("Digite o novo preço do produto:", produto.preco);
    if (novoPreco === null || isNaN(parseFloat(novoPreco))) return; 

    let novaCategoria = prompt("Digite a nova categoria do produto:", produto.categoria);
    if (novaCategoria === null || novaCategoria.trim() === "") return;

    let novaOrigem = prompt("Digite a nova origem do produto:", produto.origem);
    if (novaOrigem === null || novaOrigem.trim() === "") return;

    let novoLote = prompt("Digite o novo lote do produto:", produto.lote);
    if (novoLote === null || novoLote.trim() === "") return;

    let novaValidade = prompt("Digite a nova validade do produto (ex: 2025-12-31):", produto.validade);
    if (novaValidade === null || novaValidade.trim() === "") return;


    produto.nome = novoNome.trim();
    produto.quantidade = parseInt(novaQuantidade);
    produto.preco = parseFloat(novoPreco).toFixed(2);
    produto.categoria = novaCategoria.trim();
    produto.origem = novaOrigem.trim();
    produto.lote = novoLote.trim();
    produto.validade = novaValidade.trim();

  
    localStorage.setItem("produtos", JSON.stringify(produtos));
    pegarProdutos();
}
pegarProdutos()
