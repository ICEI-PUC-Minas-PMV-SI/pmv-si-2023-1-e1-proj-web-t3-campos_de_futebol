# Especificações do Projeto

Football Maps é uma ferramenta que oferece recursos avançados de busca, localização e reserva de campos de futebol disponíveis para aluguel, que tem como objetivo facilitar a vida dos jogadores de futebol na hora de encontrar um espaço para jogar. 

Com o uso de tecnologias como geolocalização e integração com o Google Maps, o aplicativo permite que o usuário encontre campos próximos a sua localização, visualize fotos e avaliações de outros jogadores sobre os campos e faça reservas diretamente pelo aplicativo, escolhendo a data, horário e duração desejados.

No mercado já existem algumas soluções que, apesar de não cobrirem o nicho específico que o Football Maps atenderá, possuem funcionamento similar ao que planejamos,
como, por exemplo, o AirBNB. Esta solução possibilita que pessoas aluguem por tempo determinado apartamentos, kitnets e propriedades para uso pessoal e que proprietários anunciem seus imóveis. A dinâmica dos aplicativos será parecida, porém a possibilidade de criação de times do Football Maps, dentre outras features, tornarão o aplicativo capaz de ocupar um nicho de mercado até então sem solução dedicada.

## Personas
1. Cláudio é um operador industrial de 30 anos de idade da região metropolitana de Belo Horizonte. Tem nível técnico de formação, tem renda mensal na faixa dos R$2.500,00 a R$3.000,00. É casado, tem dois filhos e procura campos de futebol para jogar "peladas" com os
amigos ao menos 2 vezes por mês. Organiza as partidas principalmente por WhatsApp e grupos do Facebook e divide o valor do aluguel dos campos
com os amigos. Tem dificuldade em encontrar campos de futebol disponíveis graças à alta procura por estes em sua região, gostaria de ter acesso
aos horários e valores para aluguel de campos com mais facilidade. Para ele, valores mais "em conta" são um fator muito importante de escolha.

2. Rafael é um estudante universitário de 21 anos de idade, da capital paulista. Não possui renda fixa, mas seus pais arcam com seus gastos.
É solteiro, sem filhos. Procura campos para jogar com seus colegas de curso e amigos do ensino médio todos os sábados do mês. Tem dificuldade em 
encontrar campos de futebol disponíveis graças à alta procura por estes em sua região, gostaria de ter acesso aos horários e valores para aluguel 
de campos com mais facilidade. Sua principal dificuldade quanto à procura por campos de futebol é encontrar campos perto de sua residência,
ou universidade, para evitar o trânsito. Usa ativamente as redes sociais, principalmente Instagram, Twitter e aplicativos de bate-papo como Discord e WhatsApp.

3. Ulisses é um engenheiro civil de 43 anos, com renda na faixa dos R$6.000,00 à R$7.000,00 da cidade de Moema no interior de Minas Gerais.
Tem tempo e renda o suficiente para estes não serem fatores decisivos na escolha de um campo de futebol para jogar com seus amigos de longa data.
Porém, a escassez de campos em sua região torna difícil o acesso, por isso gostaria de ter informações sobre campos em cidades vizinhas e próximas onde poderia jogar. Utiliza apenas o WhatsApp e o Telegram como forma de comunicação digital.

4. Édson tem 35 anos e é proprietário de um campo de futebol. É casado e atua com venda de imóveis. Para Édson, tem sido difícil encontrar pessoas interessadas em alugar seu campo e por isso ele tem ficado vago algumas vezes ao mês. Gostaria portanto de ter um lugar fácil e de uso simples para anunciar seu campo, de modo que as pessoas possam reservá-lo e conseguir mais informações sobre. Édson tem alguma familiaridade com o uso de aplicativos e sites, mas ainda têm algumas dificuldades. Para ele seria ótimo um site onde pudesse navegar facilmente.

5. Elisa tem 28 anos, casada, e é a coordenadora de um campeonato de times amadores de futebol no Rio de Janeiro. Gostaria de ter acesso fácil e simples aos campos disponíveis em sua região, para organizar cronogramas de jogos e analisar quais sairiam mais em conta, de acordo com as necessidades do campeonato. Tem familiaridade com redes sociais e atualmente utiliza apenas grupos do Facebook e pesquisas no Google para encontrar informações. Para entrar em contato com os campos precisa telefonar para cada um separadamente, o que demanda muito tempo e pesquisa.

## Histórias de Usuários 

             
|Nome    | Objetivo  | Benefício | |
|------|-----------------------------------------|----| ----|
|Cláudio|  Acessar horários e valores de aluguel de campos de futebol. | Conseguir encontrar e escolher campos com preços mais acessíveis e com disponibilidade para jogar com os amigos.|      
|Rafael|   Encontrar campos de futebol perto de sua residência ou universidade. | Evitar o trânsito e ter mais facilidade para chegar aos campos de futebol para jogar.| 
|Ulisses|  Ter informações sobre campos de futebol em cidades vizinhas e próximas. |  Conseguir encontrar opções de campos próximos para jogar com seus amigos. | 
|Édson|  Anunciar seu campo de futebol e receber reservas.  |  Conseguir alugar seu campo com mais frequência e facilidade. | 
|Elisa|   Acessar informações sobre campos de futebol disponíveis em sua região. | Organizar cronogramas de jogos e encontrar campos com preços mais em conta para o     campeonato que coordena. | 


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| A aplicação deve ter interface que permita o auto-cadastro de usuários | Alta |  |
|RF-002| A aplicação deve permitir que usuários cadastrados façam login | Alta | |
|RF-003| A aplicação deve possibilitar que o usuário cadastrado altere sua própria senha | Alta |  |
|RF-004| A aplicação deve permitir que usuários, proprietários, gerenciem seus campos cadastrados | Alta | |
|RF-005| A aplicação deve permitir ao usuário, cliente, visualizar campos disponíveis | Alta | |
|RF-006| A aplicação deve permitir que o usuário, proprietário, cadastre um campo | Alta | |
|RF-007| A aplicação deve ter uma página com tutoriais de como se utilizar o software | Alta ||
|RF-008| A aplicação deve ter uma página informando dos benefícios de se praticar esportes| Alta | |
|RF-009| A aplicação deve possibilitar a criação de times, registrando informações dos jogadores | Média | |
|RF-010| A aplicação deve ter uma página que contenha vídeos ensinando a evoluir no futebol | Média | |
|RF-011| A aplicação deve ter uma página com os termos de uso do software  | Média | |
|RF-012| O sistema deve fornecer um link que leve a página da política de privacidade, quando iniciado pela primeira vez | Média | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve processar requisições do usuário em no máximo 3s |  Baixa | 
|RNF-002| O sistema deve utilizar um meio de armazenamento de dados seguro |  Alta | 
|RNF-003| O sistema deve utilizar o mínimo de armazenamento possível, para tornar mais rápida à sua execução | Média | 
|RNF-004| O sistema deve funcionar em todo tipo de computador |  Média | 
|RNF-005| O desenvolvimento do projeto deve ser realizado usando apenas as linguagens JavaScript, CSS e HTML |
|RNF-006| A interface do projeto deve ser apresentável, interativa e de fácil compreensão para os usuários |   



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deve ser entregue e apresentado até o dia 12/07/2023 |
|02| O projeto deve ser dividido em 5 etapas, com propostas e objetivos diferentes, seguindo seus respectivos prazos |   
|03| O projeto deve ser dividido em estruturas estáticas e dinâmicas, conforme necessário, para atender às necessidades do usuário |       
|04| O projeto deve ser otimizado para garantir a melhor performance possível para os usuários, incluindo o tempo de carregamento da página e a interatividade |       
|05| O projeto deve ser testado minuciosamente antes da apresentação final, para garantir que esteja funcionando corretamente e sem bugs |       



