function enviarFormulario() {
  var campoImagem = document.querySelector('input[name="campoImagem"]').value;
  var titulo = document.querySelector('textarea[name="InsiraUmTítulo"]').value;
  var descricao = document.querySelector('textarea[name="Descrição"]').value;
  var localizacao = document.querySelector('textarea[name="localizacao"]').value;
  var contato = document.querySelector('textarea[name="MeiosDeContato"]').value;

  var dadosFormulario = {
    campoImagem: campoImagem,
    titulo: titulo,
    descricao: descricao,
    localizacao: localizacao,
    contato: contato
  };

  fetch('http://localhost:3000/campos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dadosFormulario)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Dados armazenados com sucesso:', data);
  })
  .catch(error => {
    console.error('Erro ao armazenar os dados:', error);
  });
}

var botaoCriar = document.getElementById('botaoEnviar');
botaoCriar.addEventListener('click', enviarFormulario);

let proximoId = 1;

function gerarNovoId() {
  const novoId = proximoId;
  proximoId++;
  return novoId;
}
