<img src="https://github.com/juliancioc/challenge-nextjs/blob/master/img/print.png?raw=true" />

# Elaboração

Pensei em um design simples mas que deixe claro as principais funcionalidades da aplicação. Na página inicial
temos uma lista de cards que contém aṕenas o título do POST e dois botões de ação, um para visualizar o POST e outro para deletar.

Na página home podemos filtar os POSTS por usuário, fiz um GET na API para buscar os usuário e em seguida um novo GET para buscar 
os POSTS do usuário selecionado pelo ID, em seguida caso o usuário queira ele pode limpar o filtro.

Após clicar para visulizar o POST é exibido o título, body e um botão para retornar para a home.

Utilizei o mobile first e depois fiz o layout responsivo.

# Estrutura:

- As páginas do site estão todas na pasta page com seus respectivos estilos.

# Este projeto utiliza:

- JavaScript
- React
- React Hooks
- styled-components

- API https://jsonplaceholder.typicode.com/

# Como iniciar:

- `yarn install` para instalar todos os pacotes.
- `yarn dev` para iniciar o projeto local.
