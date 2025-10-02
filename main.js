const form = document.getElementById("formCadastro");

form.addEventListener("submit" , (evento) => {
    evento.preventDefault()

const nome = document.getElementById("nome").value
const quantidade = document.getElementById("quantidade").value
const preco = document.getElementById("preco").value
const categoria = document.getElementById("categoria").value
const origem = document.getElementById("origem").value
const lote = document.getElementById("lote").value
const validade = document.getElementById("validade").value

let produtos = JSON.parse(localStorage.getItem("produtos")) || [];


const novoProduto = {
        nome: nome,
        quantidade: quantidade,
        preco: preco, 
        categoria: categoria,
        origem: origem,
        lote: lote,
        validade: validade
    };
     produtos.push(novoProduto);

    localStorage.setItem("produtos", JSON.stringify(produtos))

    alert("Produto Cadastrado!")
    form.reset();
})
