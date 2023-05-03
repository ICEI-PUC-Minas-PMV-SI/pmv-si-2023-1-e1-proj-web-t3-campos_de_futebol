
# Projeto de Interface

Principais interfaces da plataforma:

Página de login
Recuperação de senha
Criação de conta
Página principal
Página de anúncio
Criação de anúncios
A plataforma foi elaborada de forma a atender aos requisitos funcionais, não funcionais e histórias de usuário definidos na Documentação de Especificações.

Requisitos funcionais:

RF-001: Criar uma interface para a realização do cadastro e login.

Atendido pela página de login e criação de conta.
RF-002: Criar um botão para que o usuário possa solicitar a alteração de sua senha.

Atendido pelo processo de recuperação de senha, que inclui etapas de envio de código, confirmação do código e criação de nova senha.
RF-003: Permitir que os donos cadastrem seus campos.

Atendido pela página de criação de anúncios, onde os donos podem cadastrar seus campos com informações essenciais.
RF-004: Criar uma página onde seja possível ver os campos disponíveis.

Atendido pela página principal, onde os usuários podem visualizar anúncios de campos disponíveis e filtrá-los por região.
RF-005: Permitir que os jogadores possam realizar a reserva dos campos.

Atendido pela página de anúncio, onde os jogadores podem visualizar detalhes do campo e realizar a reserva.
Requisitos não funcionais:

RNF-001: Segurança dos dados.

As páginas de login, recuperação de senha e criação de conta foram projetadas para garantir a segurança dos dados dos usuários, como senhas e informações pessoais.
RNF-002: Usabilidade.

A elaboração das interfaces seguiu princípios de usabilidade, facilitando a interação dos usuários e tornando a plataforma intuitiva e fácil de usar.
Histórias de usuário:

HU-001: Como usuário, quero poder criar uma conta para acessar a plataforma.

Atendido pela página de criação de conta.
HU-002: Como usuário, quero poder recuperar minha senha caso a esqueça.

Atendido pelo processo de recuperação de senha, que inclui etapas de envio de código, confirmação do código e criação de nova senha.
HU-003: Como jogador, quero poder ver os campos disponíveis para reserva.

Atendido pela página principal, onde os usuários podem visualizar anúncios de campos disponíveis.
HU-004: Como jogador, quero poder realizar a reserva de um campo.

Atendido pela página de anúncio, onde os jogadores podem visualizar detalhes do campo e realizar a reserva.
HU-005: Como dono de campo, quero poder cadastrar meu campo na plataforma.

Atendido pela página de criação de anúncios, onde os donos podem cadastrar seus campos com informações essenciais.
Os wireframes (protótipos visuais) foram desenvolvidos para representar visualmente as interfaces e suas funcional

## User Flow

<img src="/docs/img/userflow.png" alt="Userflow image">

Caso não seja possível a visualização total da imagem: <a href = "https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2023-1-e1-proj-web-t3-campos_de_futebol/blob/main/userflow%20football%20maps.pdf" target = "_blank"> User flow Link</a>

## Wireframes


### Página de login

A página principal de login é responsável por conceder acesso a quem já possui uma conta, e também oferece opções para criação de conta e recuperação de senha. Atende ao requisito <b>RF-001</b> (Criar uma interface para a realização do cadastro e login).

<img src="/docs/IMAGENS WIREFRAME/paginaDeLogin.png" alt="Página de login">
 
 
 ### Recuperaçaõ de senha (envio do código ao e-mail)

A página inicial de recuperação de senha é responsável por coletar o e-mail do usuário e enviar um código de recuperação para o mesmo. Atende ao requisito <b>RF-002</b> (Criar um botão para que o usuário possa solicitar a alteração de sua senha).

<img src="/docs/IMAGENS WIREFRAME/confirmacaoDeEmail.png" alt="Página de login">

### Recuperaçaõ de senha (confirmaçaõ do código)

Página onde o código enviado por e-mail deve ser inserido e confirmado. Atende ao requisito <b>RF-002</b> (Criar um botão para que o usuário possa solicitar a alteração de sua senha).

<img src="/docs/IMAGENS WIREFRAME/inserirCodigo.png" alt="Página de login">

### Recuperaçaõ de senha (criação de uma nova senha)

Página onde o usuário poderá criar uma nova senha para acessar o sistema. Atende ao requisito <b>RF-002</b> (Criar um botão para que o usuário possa solicitar a alteração de sua senha).

<img src="/docs/IMAGENS WIREFRAME/definicaoDeNovaSenha.png" alt="Página de login">

### Criação de conta

Página responsável pela criação de uma conta, onde o usuário deverá definir um nome de usuário, e-mail e senha de acesso. Atende ao requisito <b>RF-001</b> (Criar uma interface para a realização do cadastro e login).

<img src="/docs/IMAGENS WIREFRAME/criacaoDeConta.png" alt="Página de login">

### Página principal

Página principal, onde estarão os anúncios dos campos com fotos, título e descrição. Possui uma aba de pesquisa para filtrar os anúncios por região e um acesso ao perfil do usuário. Atende ao requisito <b>RF-004</b> (Criar uma página onde seja possível ver os campos disponíveis).

<img src="/docs/IMAGENS WIREFRAME/paginaPrincipal.png" alt="Página de login">

### Anúncio

Página do anúncio, acessada a partir da página principal, que oferece mais detalhes sobre o campo selecionado, incluindo informações de contato e localização. Atende ao requisito <b>RF-005</b> (Permitir que os jogadores possam realizar a reserva dos campos).

<img src="/docs/IMAGENS WIREFRAME/anuncio.png" alt="Página de login">

### Criação de anúncio

Página responsável pela criação de um post do seu campo, disponibilizando as informações essenciais ao cliente para serem inseridas, como título, descrição, localização e contato. Atende ao requisito <b>RF-003</b> (Permitir que os donos cadastrem seus campos).

<img src="/docs/IMAGENS WIREFRAME/inserirAnuncio.png" alt="Página de login">
