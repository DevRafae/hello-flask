from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

@app.route("/")
def home():
	return render_template("index.html")

@app.route("/api/post-hello", methods=["POST"])
def api_hello():
	dados = request.get_json()
	nome = dados.get("nome","").strip()

	return jsonify({"mensagem": f"Olá {nome}! Flask recebeu o POST com JSON na nossa V3!"})


if __name__ == "__main__":
	app.run(debug=True)
