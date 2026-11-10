const botao = document.getElementById("botao3");
const nomeCampo = document.getElementById("nome");
const idadeCampo = document.getElementById("idade");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", async function () {

    const nome = nomeCampo.value.trim();
    const idade = idadeCampo.value.trim();
    
	const resposta = await fetch("/api/post-hello-dados", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({  nome: nome,
                                idade: idade
        })
    });

	const dados = await resposta.json();

	mensagem.textContent = dados.mensagem + " " +
                           dados.situacao;
});
