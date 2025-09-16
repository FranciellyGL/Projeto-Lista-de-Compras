const compras= [];
const tabela = document.getElementById("tabela");
const form = document.getElementById("formlista");
const inputNome = document.getElementById("nome");
const limpar = document.getElementById("limpar");
;

form.addEventListener("submit", function(event){
    event.preventDefault();
     const nome = inputNome.value.trim();
    if(nome !== ""){
        console.log("compras")
        compras.push(nome)
        atualizartabela()
        form.reset() 
        
    }
})

function atualizartabela(){
    tabela.innerHTML = ""
  compras.forEach((compras, index) => { 
        const row = document.createElement("tr")
        row.innerHTML = `<td> ${index + 1} </td> <td>${compras}</td>` 
        tabela.appendChild(row)
    })   
}

limpar.addEventListener("click", function() {
        compras.length = 0; 
        atualizartabela();
});