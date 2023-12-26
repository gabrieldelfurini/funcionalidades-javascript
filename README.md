# Desafio-STW
A produção de uma fábrica de farinhas trabalha diariamente com diversos tipos de receitas.
Essas receitas possuem um conjunto de ingredientes que devem ser consumidos na ordem em que foram salvos.
Atualmente as receitas já estão organizadas em planilhas do Excel e são impressas sempre que uma receita é finalizada.
O desafio é implementar o frontend e backend de uma aplicação web para cadastro de receitas para eliminar a impressão em papel e facilitar o gerenciamento das mesmas.


A aplicação deve ter as seguintes funcionalidades:
1. Receitas
  - [x] Listar receitas
  - [x] Listar uma determinada receita com seus respectivos ingredientes
  - [x] Adicionar uma nova receita com seus respectivos ingredientes
  - [x] Atualizar uma receita com seus respectivos ingredientes
  - [x] Excluir uma receita

2. Ingredientes
  - [x] Listar os ingredientes
  - [x] Adicionar um novo ingrediente
  - [x] Atualizar um ingrediente
  - [x] Excluir um ingrediente

---

# Sumário

- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
  - [Ferramentas necessárias](#ferramentas-necessárias)
  - [Rodando no servidor local](#rodando-no-servidor-local)
- [Orientações de como utilizar](#orientações-de-como-utilizar)
- - [Habilidades desenvolvidas](#habilidades-desenvolvidas)

  ---

# Tecnologias utilizadas

- [Postman](https://www.postman.com/)
- [Laravel](https://laravel.com/)
- [PHP](https://www.php.net/)
- [Vue.js](https://vuejs.org/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [MySQL](https://www.mysql.com/)
- [XAMPP](https://www.apachefriends.org/pt_br/index.html)

---

# Pré-requisitos

## Ferramentas necessárias

Para rodar o projeto, você vai precisar instalar as seguintes ferramentas:
[XAMPP](https://www.apachefriends.org/pt_br/index.html);
* MySQL <br>
* PHP <br>
* Apache <br>
* Um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/) ou outro de sua preferência;

 ## Rodando no servidor local

- Dentro do painel do "Xampp":
  - Clicar em "start", tanto no "Apache" quanto no "MySQL". Que deverá ficar assim:
  - (imagem)

 - Clone do Projeto

    - Clone este repositório dentro de um pasta que esteja dentro desse caminho: C:\xampp\htdocs
    git clone https://github.com/LeandroGoerck/desafio-stw.git
    
    - Configure o Banco de Dados
  - No terminal do XAMPP aperte no botão "Admin" na coluna da opção "MySQL";
  - Dentro do phpMyAdmin, crie uma tabela com o nome que desejar;
  - Dentro da pasta "backend" acesse o arquivo ".env", e renomeie o valo de "DB_DATABASE" passando o nome daquele que você criou;
  - (./imagem/bancoDeDados.png) 
    
 - Inicie o sistema:

    - Inicie o backend
    cd backend && php artisan serve

    - Em outro terminal, inicie o frontend

    cd frontend && npm start

    Abra no navegador os links que aparecem nos dois terminais. Eles devem ser algo como "http://localhost/..."

---

# Orientações de como utilizar

A aplicação WEB possui três telas, e é possível navegar por elas através da barra de navegação.
Os botões RECEITAS, INGREDIENTES e CRIAÇÃO DE RECEITA navegam por essas três telas. 

A primeira tela a ser preenchida pelo usuário é a de ingredientes, onde serão cadastrados os ingredientes utilizados na fabricação das farinhas. Para isso, basta digitar o código e a descrição do ingrediente e clicar no botão de adicionar.
Para editar um ingrediente basta clicar no botão do lápis, os campos de edição aparecem na mesma linha da tabela. Para excluir um ingrediente, basta clicar no botão da lixeira. A imagem abaixo ilustra a tela de cadastro de ingredientes:

  ![Cadastro de ingredientes](./imagens/ingredientes.png)

Em seguida, para criar uma nova receita, clique no botão CRIAÇÃO DE RECEITA na barra de navegação. Aqui o usuário pode selecionar os ingredientes e a quantidade em kg a ser adicionada na receita. Para salvar a receita no banco de dados, o código e a descrição da receita devem ser preenchidos. A figura abaixo ilustra a tela de criação de receitas:
  ![Criação de receitas](./imagens/criacao_de_receita.png)

Por fim, para gerenciar todas as receitas criadas, basta clicar no botão RECEITAS. Nessa tela, alem de ser possivel criar uma receita nova, cada receita possui um botão para editar e outro para excluir a mesma. A figura abaixo ilustra a tela de visualização de receitas:
  ![Visualização da lista de receitas](./imagens/receitas.png)

---

  # Habilidades desenvolvidas

- Criação do backend com express e typescript
- Teste das rotas utilizando Postman
- Integração com mysql utilizando Prisma ORM
- Desenvolvimento de telas com React, javascript e hooks
- Criação, leitura, edição e exclusão (CRUD) de ingredientes
- CRUD de receitas com ingredientes cadastrados
- Estilização e responsividade com Tailwindcss

---

