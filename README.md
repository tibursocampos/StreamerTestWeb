# FRONT-END STREAMER TEST

Este é o desenvolvimento do front-end que consome a API solicitada no teste [STREAMER TEST](https://github.com/jpmendonca/streamertest).
Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 11.2.9.

Execute o comando `ng serve` para a aplicação rodar em um servidor de desenvolvimento. Navegue até `http: // localhost: 4200 /`. 

Execute `ng serve --o` para a aplicação abrir automaticamente no seu navegador padrão.

## ESTRUTURA DO PROJETO
**Tela Projetos**
- Tela inicial da aplicação, mostra uma tabela com os dados de cada projeto.
- Na parte superior estão os botões para criar um novo projeto, filtar os projetos por curso e um campo de busca por qualquer campo _string_.
- Em cada projeto (linha da tabela) existem os botões para editar e excluir, ambos levam a um formulário onde são inseridos / editados os dados.

**Tela Cursos**
- Foi criada uma tela com uma lista dos cursos.
- Estes cursos são gerados automaticamente na criação do banco via migration.
- Ao clicar em algum dos cursos o usuário é redirecionado para tela de projetos.

## IMAGENS DO PROJETO

![image](https://user-images.githubusercontent.com/37385246/117549467-e7ceff00-b010-11eb-8caf-02d0e8353f97.png)

![image](https://user-images.githubusercontent.com/37385246/117549551-70e63600-b011-11eb-9fb9-672d6ba235a9.png)

![image](https://user-images.githubusercontent.com/37385246/117549529-45fbe200-b011-11eb-8a15-7d76926d7b26.png)

![image](https://user-images.githubusercontent.com/37385246/117549574-95421280-b011-11eb-9e78-4a1604174bc6.png)