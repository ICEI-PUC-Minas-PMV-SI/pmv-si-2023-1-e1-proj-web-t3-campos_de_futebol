function enviarFormulario() {
  var campoImagem = document.querySelector('input[name="campoImagem"]').value;
  var titulo = document.querySelector('textarea[name="InsiraUmTítulo"]').value;
  var descricao = document.querySelector('textarea[name="Descrição"]').value;
  var localizacao = document.querySelector('textarea[name="localizacao"]').value;
  var contato = document.querySelector('textarea[name="MeiosDeContato"]').value;

  if (campoImagem === '' || titulo === '' || descricao === '' || localizacao === '' || contato === '') {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }
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
    console.log('Campo criado com sucesso:', data);
    window.location.href = "index.html";
  })
  .catch(error => {
    console.error('Erro ao armazenar os dados:', error);;
  });
}

function exibirMensagem(mensagem) {
  var mensagemElement = document.getElementById('mensagem');
  mensagemElement.textContent = mensagem;
}

var botaoCriar = document.getElementById('botaoEnviar');
botaoCriar.addEventListener('click', enviarFormulario);

let proximoId = 1;

function gerarNovoId() {
  const novoId = proximoId;
  proximoId++;
  return novoId;
}
