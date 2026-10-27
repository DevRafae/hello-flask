const botao = 
    document.getElementById("botao");

const mensagem = 
    document.getElementById("mensagem");

async function buscarMensagem(){
    const resposta = await fetch("/api/pegadados");
    const dados = await resposta.json();

    mensagem.textContent = dados.mensagem;
}

botao.addEventListener("click", buscarMensagem);
