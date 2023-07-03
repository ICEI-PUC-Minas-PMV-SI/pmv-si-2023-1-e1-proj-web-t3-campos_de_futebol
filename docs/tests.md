# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 



# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito  Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Criar conta**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa um login e senha.<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.
**Requisitos associados** | RF-001
**Resultado esperado** | Prosseguir para a parte de login.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Realizar o login**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa um login e senha.<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.
**Requisitos associados** | RF-002
**Resultado esperado** | Usuário ser autenticado.
**Dados de entrada** | Inserção de dados válidos no formulário de login.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Visualizar anúncio do campo ou quadra**
 :--------------: | ------------
**Procedimento**  | 1) Clique no botão "Detalhes" do anúncio escolhido para acessá-lo.<br>2) Verifique se as imagens estão sendo exibidas corretamente.<br> 3) Verifique se o link da localização está funcionando corretamente.<br> 4) Verifique se o link que leva a um meio de contato está funcionando corretamente.
**Requisitos associados** | RF-007
**Resultado esperado** | Uma boa visualização do local e acesso a suas informações.
**Dados de entrada** | Inserção de dados válidos na criação de conta.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT04 - Cadastrar campo**
 :--------------: | ------------
**Procedimento**  | 1) Clique no botão "+" no canto inferior direito.<br>2) O Usuário informa dados como, imagens do campo, título, descrição, Localização, e meio de contato e clica em criar.<br> 3)A aplicação verifica se todos os campos do formulário estão preenchidos e informa ao usuário caso não esteja. <br> 4)A aplicação orienta ao login ou ao cadastro, e o redireciona.
**Requisitos associados** | RF-006
**Resultado esperado** | Usúario redirecionado ao login
**Dados de entrada** | Inserção de dados no formulário de cadastro de campo.
**Resultado obtido** | Sucesso.


Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido.

|*Caso de Teste*                                 |*CT01 - Criar uma conta*                                         |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve ter interface que permita o auto-cadastro de usuários.|
|Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t| 

|*Caso de Teste*                                 |*CT02 - Efetuar Login (usuário autenticado)*                                         |
|---|---|
|Requisito Associado | RF-002 - A aplicação deve permitir que usuários cadastrados façam login|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*CT03 - Visualizar anúncio do campo ou quadra*                                         |
|---|---|
|Requisito Associado | RF-007 - A aplicação deve permitir que o usuário veja as informações do propritário do campo, para entrar em contato.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1ODR0884AAnnbSOPHapnZ29VcG4ZasCaw/view?usp=sharing | 

|*Caso de Teste*                                 |*CT04 - Cadastrar campo *                                                              |
|---|---|
|Requisito Associado | RF-006 - A aplicação deve permitir que o proprietário do campo simule o cadastro do seu anúncio.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1564NZdfLwFstM4CoQaGyvW0ql4JmYhm-/view?usp=sharing | 

## Avaliação dos Testes de Software

O software está funcionando corretamente, com o usuário podendo visualizar as fotos e acessar os links. No entanto, há algumas limitações que não poderão ser implementadas, como a criação real de um anúncio para a sua quadra ou campo, pois o servidor é iniciado na máquina que pode ser acessado apenas por meio do endereço local.

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja fazer o login. |
| 2             | Você é uma pessoa que deseja se cadastrar. |
| 3             | Você escolheu uma quadra e deseja ver os seus detalhes como fotos, localização e meio de contato. |
| 4             | Você é um proprietário de um campo de futebol e deseja cadastra-lo em nossa plataforma. |



## Registro de Testes de Usabilidade

Cenário 1:  Você é uma pessoa que deseja fazer o login.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 10.11 segundos                  |
| 2       | SIM             | 5                    | 9.29  segundos                  |
| 3       | SIM             | 5                    | 16.4 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 11.9 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 6.28 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.




Cenário 2: Você é uma pessoa que deseja se cadastrar.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 5.21 segundos                          |
| 2       | SIM             | 5                    | 6.10 segundos                          |
| 3       | SIM             | 5                    | 12.43 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 5                | 7.9 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 5.82 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.

Cenário 3: Você escolheu uma quadra e deseja ver os seus detalhes como fotos, localização e meio de contato.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 17.27 segundos                          |
| 2       | SIM             | 5                    | 12.23 segundos                         |
| 3       | SIM             | 5                    | 15.02 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 5                | 14.84 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 10.00 segundos |


    Comentários dos usuários: Muito intuitivo e bem simples para localizar as opções,
    porém poderia ser um pouco mais rápido para direcionar a outro link.

Cenário 4:  Você é um proprietário de um campo de futebol e deseja cadastra-lo em nossa plataforma.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 98,10 segundos                         |
| 2       | SIM             | 5                    | 135,22 segundos                         |
| 3       | SIM             | 5                    | 110,01 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 5                | 114,44. segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 81,00 segundos |


    Comentários dos usuários: Muito claro e bem simples para identificar e preencher o local das informações,
    porém poderia dar uma resposta após criar o anúncio do campo, algo como "campo criado como sucesso".


## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Podemos identificar alguns problemas, como quando o usuário filtra um anúncio pelo seu título e diminui a tela, o elemento footer se modifica, e ao contrário (da tela menor para maior) também, ocorre também quando a filtragem pega três anúncios. Outro problema é uma certa demora no carregamento das imagens e a qualidade das mesmas, além da necessidade de clicar duas vezes para acessar os links do anúncio.



