from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route("/")
def home():
	return render_template("index.html")

@app.route("/api/pegadados")
def api_hello():
	return jsonify({"mensagem": "Olá Flask 2.0! Recebi a requisicao, para envio dos dados,"
})


if __name__ == "__main__":
	app.run(debug=True)
