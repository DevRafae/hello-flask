from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

@app.route("/")
def home():
	return render_template("index.html")

@app.route("/api/post-hello-dados", methods=["POST"])
def api_hello():
    dados = request.get_json()

    nome = dados.get("nome", "").strip()
    idade = int(dados.get("idade",0))

    if idade < 12:
        situacao = "Você ainda não pode ser batizado."
    else:
        situacao = "Você já pode ser batizado."
        
    return jsonify({
                "mensagem": f"Ola {nome}!", 
                "situacao": situacao})


if __name__ == "__main__":
	app.run()