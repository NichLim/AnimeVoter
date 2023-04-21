# Anime Voter - A Simple Anime Voting Tool

A versão em português está disponível logo após o texto original.

After my last professional experience, I decided to invest my free time in refining my knowledge in Web Development, exposing myself to new technologies and development methodologies. As part of these studies, I started my first full-stack project: a website that displays pairs of Anime, allowing users to vote on them and, in the end, displays the winner. As I have been working on this project for some time, I decided to share a little of my experience with you.

The idea is to use TDD (Test-Driven Development) as the main technique, so that the functionalities and visual elements have their own modular tests, certifying that, after changes in the source code, everything continues to work correctly. To better divide the ideas, I separated the GitHub repository into two parts: the part that has the server source code (voting-server) and the part that has the client specifications (voting-client).

The Voting-Client has the code related to the UI, which seeks to be responsive and interactive. Some of the technologies used are React, Redux, Router, which take care of the visual components, state management, and application routing, respectively. Communication with the server is done through a WebSocket using the socket.io library.

On the other hand, the Voting-Server has all the relevant information about the server, which uses express and deals with all the logic and state updates of the application.

The project, in general, uses Redux to manage states, combined with Immutable.js which prevents changes from being made directly to the states in a destructive way. This means that any change generates a new state that is updated in the necessary modules.

I am extremely satisfied with my progress so far, and even more excited about the next steps.


--------------------------------------------------------------------------------------------------


Depois da minha última experiência profissional, decidi investir meu tempo livre em refinar meu conhecimento em Desenvolvimento Web, me expondo a tecnologias e metodologias de desenvolvimento novas. Como parte desses estudos, comecei meu primeiro projeto full-stack: Um site que exibe pares de Animes, permitindo que os usuários votem neles e, no final, exibe o vencedor. Como eu trabalho nesse projeto há algum tempo, resolvi compartilhar um pouco da minha experiência com vocês.

A ideia é utilizar TDD (*Test-Driven Development*, ou, Desenvolvimento Guiado por Testes, em português) como técnica principal, para que as funcionalidades e elementos visuais tivessem seus próprios testes modulares, nos certificando que, após alterações no código-fonte, tudo continue funcionando corretamente. Para deixar as ideias melhor divididas, separei o repositório do GitHub em duas partes: A parte que possui o código-fonte do servidor ([`voting-server`](./voting-server/)) e a parte que possui as especificações do cliente ([`voting-client`](./voting-client/)).

O `Voting-Client` possui o código relacionado à UI, que procura ser responsiva e interativa. Algumas das tecnologias usadas são React, Redux, Router, que cuidam dos componentes visuais, gerenciamento de estados e roteamento da aplicação, respectivamente. A comunicação com o servidor é feita por um WebSocket usando a biblioteca `socket.io`.

Já o `Voting-Server` possui todas as informações pertinentes ao servidor, que utiliza `express` e lida com toda a lógica e atualização de estados da aplicação.

O projeto de forma geral utiliza `Redux` para gerenciar os estados, aliado com `Immutable.js` que previne que alterações sejam feitas diretamente nos estados de forma destrutiva. Isso quer dizer que, qualquer alteração gera um novo estado que é atualizado nos módulos necessários.

Estou extremamente satisfeito com meu progresso até aqui, e ainda mais animado com os próximos passos.
