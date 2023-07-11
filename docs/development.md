# Programação de Funcionalidades

Link do deploy: https://football-maps.vercel.app/

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Responsável | Artefato Criado |
|------|-----------------------------------------|----| ----|
|RF-001| A aplicação deve permitir que o usuário faça login. | Samuel  | tlogin3.js |
|RF-002| A aplicação deve permitir que o usuário se cadastre. | Samuel  | tcadastro3.js |
|RF-003| A aplicação deve permitir que o usuário visualize todas as fotos do anúncio. | Vitor  | areaDeAnuncio.js |
|RF-004| A aplicação deve passar um alerta para o usuário se cadastrar quando estiver no processo de criação de anúncio. | Eduardo  | script.js |
|RF-005| A aplicação deve permitir que o usúario filtre os anúncios pelo seu título | Vitor | script.js |


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


