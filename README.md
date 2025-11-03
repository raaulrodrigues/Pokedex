# 📖 Pokedex

Um projeto de Pokedex desenvolvido em React e TypeScript, consumindo a [PokeAPI](https://pokeapi.co/) para exibir informações detalhadas sobre Pokémon.

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

---

## 🎯 Sobre o Projeto

O objetivo principal deste projeto foi construir uma interface de usuário moderna e responsiva para interagir com a PokeAPI. A aplicação permite que os usuários naveguem por uma lista de Pokémon, pesquisem por nomes específicos e visualizem detalhes, como tipos e estatísticas de batalha.

Este projeto foi fundamental para praticar conceitos de:
* Consumo de APIs REST (utilizando Axios).
* Gerenciamento de estado e componentização com React.
* Tipagem estática com TypeScript.
* Estilização de componentes com Styled-Components.

## ✨ Funcionalidades

* **Listagem de Pokémon:** Navegação paginada pela Pokedex nacional.
* **Busca Rápida:** Filtro para encontrar Pokémon por nome.
* **Página de Detalhes:** Visualização de tipos, estatísticas (HP, Ataque, Defesa, etc.) e *sprites* (imagens).
* **Design Responsivo:** Adaptável para visualização em dispositivos móveis e desktop.

## 💻 Tecnologias Utilizadas

* **React:** Biblioteca principal para a construção da interface.
* **TypeScript:** Para adicionar tipagem estática e segurança ao código.
* **Styled-Components:** Para estilização CSS-in-JS, permitindo a criação de componentes de UI dinâmicos e encapsulados.
* **Axios:** Cliente HTTP baseado em *Promises* para realizar as requisições à PokeAPI.
* **PokeAPI V2:** A fonte de dados para todas as informações dos Pokémon.

## 🚀 Rodando o Projeto

Se desejar executar este projeto localmente, siga os passos abaixo:

```bash
# 1. Clonar o repositório
git clone [https://github.com/raaulrodrigues/Pokedex.git](https://github.com/raaulrodrigues/Pokedex.git)

# 2. Acessar a pasta do projeto
cd Pokedex

# 3. Instalar as dependências
npm install

# 4. Executar a aplicação
npm run dev
