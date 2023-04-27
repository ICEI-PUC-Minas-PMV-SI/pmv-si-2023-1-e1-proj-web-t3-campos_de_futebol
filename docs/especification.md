# Especificações do Projeto

Football Maps é uma ferramenta que oferece recursos avançados de busca, localização e reserva de campos de futebol disponíveis para aluguel, que tem como objetivo facilitar a vida dos jogadores de futebol na hora de encontrar um espaço para jogar. 

Com o uso de tecnologias como geolocalização e integração com o Google Maps, o aplicativo permite que o usuário encontre campos próximos a sua localização, visualize fotos e avaliações de outros jogadores sobre os campos e faça reservas diretamente pelo aplicativo, escolhendo a data, horário e duração desejados.

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
|RF-001| Criar uma interface para a realização do cadastro e login | Alta |  |
|RF-002| Criar um botão para que o usuário possa solicitar a alteração de sua senha | Alta | |
|RF-003| Permitir que os donos cadastrem seus campos| Alta |  |
|RF-004| Criar uma página onde seja possível ver os campos disponíveis | Alta | |
|RF-005| Permitir que os jogadores possam realizar a reserva dos campos | Alta | |
|RF-006| Criar uma interface para a criação de times| Alta |  |
|RF-007| Desenvolver uma página falando dos benefícios de se praticar esportes| Média | |
|RF-008| Criar um FAQ, frequently asked questions, que contenha as dúvidas mais comuns dos usuários | Alta |  |
|RF-009| Desenvolver uma página com tutoriais de como se utilizar o software | Alta | |
|RF-010| Criar uma página que contenha vídeos ensinando a evoluir no futebol | Baixa |  |
|RF-011| Criar uma página com os termos de uso do software  | Média | |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve funcionar sem bugs | Alta | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  Baixa | 
|RNF-003| O sistema deve fornecer um link que leve a página da política de privacidade, quando iniciado pela primeira vez | Alta | 
|RNF-004| O sistema deve utilizar um meio de armazenamento de dados seguro |  Alta | 
|RNF-005| O sistema deve utilizar o mínimo de armazenamento possível, para tornar mais rápida à sua execução | Média | 
|RNF-006| O sistema deve funcionar em todo tipo de computador |  Média | 



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deve ser entregue e apresentado até o dia 12/07/2023 |
|02| O desenvolvimento do projeto deve ser realizado usando apenas as linguagens JavaScript, CSS e HTML |
|03| O projeto deve ser dividido em 5 etapas, com propostas e objetivos diferentes, seguindo seus respectivos prazos |
|04| A interface do projeto deve ser apresentável, interativa e de fácil compreensão para os usuários |       
|05| O projeto deve ser dividido em estruturas estáticas e dinâmicas, conforme necessário, para atender às necessidades do usuário |       
|06| O projeto deve ser otimizado para garantir a melhor performance possível para os usuários, incluindo o tempo de carregamento da página e a interatividade |       
|07| O projeto deve ser testado minuciosamente antes da apresentação final, para garantir que esteja funcionando corretamente e sem bugs |       



