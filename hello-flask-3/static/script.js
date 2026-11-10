const botao = 
    document.getElementById("botao3");
const nomeCampo = 
    document.getElementById("nome");
const mensagem = 
    document.getElementById("mensagem");

botao.addEventListener("click", async function(){
    const nome = nomeCampo.value.trim();
    const resposta = await fetch("/api/post-hello",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nome: nome})
});
const dados = await resposta.json();
mensagem.textContent = dados.mensagem;
});