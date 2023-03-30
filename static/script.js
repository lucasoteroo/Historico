
function mostrarTexto(id){

  // aqui tá armazenando o id referenciado no parâmetro e guardando na variável mostrar
  var mostrar = document.getElementById(id);

  // aqui ele "injeta" a classe "mostrando" no elemento armazenado na variável
  mostrar.classList.toggle("mostrando");
  // esse ".classList.toggle(parametro)" recebe como parametro a classe que será injetada no elemento. É tipo um if else. se o elemento já tiver a classe injetada, esse método remove ela do elemmento. Se não tiver a classe, ela será injetada.
}

/*
function consultar() {
  // Conexão com o banco de dados
  var db = openDatabase('meu_banco', '1.0', 'Meu banco de dados', 2 * 1024 * 1024);
  
  // Executa a consulta
  db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM tb_consultas', [], function (tx, results) {
      // Processa o resultado
      var len = results.rows.length;
      var texto = "";
      for (var i = 0; i < len; i++) {
        var row = results.rows.item(i);
        texto += row.nome + " - " + row.idade + "<br>";
      }
      
      // Exibe o resultado na página HTML
      document.getElementById("resultado").innerHTML = texto;
    });
  });
}
*/
