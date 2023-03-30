# importando bibliotecas necessárias
from flask import Flask, render_template
import sqlite3


# inicia uma instância do app
app = Flask(__name__)


# definindo a página exiibida quando a url for 'http://127.0.0.1:5000/historico'
@app.route("/historico")
def historico():

    # se conectando com o banco de dados para fazer as devidas manipulações
    
    conn = sqlite3.connect("historico.db")
    print("Conectado ao banco de dados historico.db  ")
    cursor = conn.cursor()

    # cursor.execute('SELECT * FROM tb_consultas WHERE coluna1 = T_MARCADAS',(123))
    cursor.execute('SELECT * FROM tb_consultas')
    dados = cursor.fetchall()
    conn.close()
    

    return render_template('historico.html', dados=dados)

app.run(debug=True)
