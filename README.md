<div align="center">
<h1>Caroliny Lima site</h1>
</div>

<strong>Introdução</strong>

Este projeto é um website que apresenta meu portfólio profissional. Ele conta com as seguintes seções: na seção Sobre, compartilho um pouco da minha história e interesses; a Carreira, apresenta minha trajetória profissional; na seção Experiências, é sobre minhas principais habilidades e como as aplico na prática. Por fim, a Trabalhos, apresenta alguns dos projetos que desenvolvi em empresas com as quais colaborei.


## Arquitetura
O projeto segue a arquitetura baseada em componentes, dividindo a interface do usuário em componentes reutilizáveis e isolados. Cada componente é responsável por sua própria lógica e UI, permitindo uma estrutura modular.
```
src/
|-- assets/
|   |-- fonts/
|   |-- iamges/
|   |-- svg/
|
|-- components/
|   |-- buttons/
|   |-- Footer/
|   |-- Header/
|   |-- inputs/
|   |-- MenuNav/
|   |-- Modal/
|   |-- others/
|   |-- index.tsx
|
|-- config/
|-- lib/
|-- mocks/
|-- pages/
|-- routes/
|-- app.module.ts
|-- main.ts
|
|-- App.jtsx
|-- custom.d.ts
|-- index.css
|-- index.tsx
|-- reportWebVitals.js
|-- setupTests.tsx
```
