# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Responsável | Artefato Criado |
|------|-----------------------------------------|----| ----|
|RF-001| A aplicação deve ter interface que permita o auto-cadastro de usuários | Artur  | cadastro.html |
|RF-002| A aplicação deve permitir que usuários cadastrados façam login | Samuel  | tlogin.html |
|RF-003| A aplicação deve possibilitar que o usuário cadastrado altere sua própria senha | Samuel | rsenha.html , csenha.html, nsenha.html |
|RF-004| A aplicação deve permitir que usuários, proprietários, gerenciem seus campos cadastrados | Emanuel |index.html |
|RF-005| A aplicação deve permitir ao usuário, cliente, visualizar campos disponíveis | Emanuel | index.html |
|RF-006| A aplicação deve permitir que o usuário, proprietário, cadastre um campo | Eduardo | cadastrodecamo.html|
|RF-007| A aplicação deve permitir que o usuário veja as informações do propritário do campo, para entrar em contato | Vitor | areaDeAnuncio.html , areaDeAnuncio2.html |
|RF-008| A aplicação deve ter uma página com tutoriais de como se utilizar o software | Samuel | tfut.html |
|RF-009| A aplicação deve ter uma página informando dos benefícios de se praticar esportes| Eduardo | BenefíciosDePraticarFutebol.html |
|RF-010| A aplicação deve ter uma página que contenha vídeos ensinando a evoluir no futebol | Emanuel | vídeos.html |
|RF-011| A aplicação deve ter uma página com os termos de uso do software  | Vitor | termosDeUso.html |
|RF-012| A aplicação deve fornecer um link que leve a página da política de privacidade | Artur | politica.html | 

## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id do usuário            | Numero (Inteiro)  | Identificador único do usuário            |  1      |
| Nome do usuário         | Texto             | Nome do usuário                         | João Marcos      |
| Email       | Texto             | Email do usuário                      | email1234@gmail.com            |
| Senha | Texto  | Senha do usuário | senha123            | 
| Id do anúncio | Numero (Inteiro)  |Identificador único do anúncio    | 2           | 
| Título do anúncio | Texto  | Título do anúncio | Campo em São Paulo            | 
| Descrição do campo | Texto  | Descrição do campo | O campo tem 40 metros de comprimento e 20 de largura.    | 
|Localização do campo | Url  | Localização do campo |    https://maps.google.com/?cid=9907689870538344704&entry=gps        | 
| Contato | Número / Url | Informações de contato | (31) 99999-9999  / https://instagram.com/pucminas.virtual?igshid=NTc4MTIwNjQ2YQ==           | 


