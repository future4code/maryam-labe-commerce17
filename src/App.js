import React from 'react';
import styled from 'styled-components';
import './App.css';


const carrinhoTitulo = styled.header`
border: 10px solid black;
`

function App() {
  return (
    <div>
      <header>
        <h2>Carrinho:</h2>
        <button>Remover</button>
        <p>Valor total:R$ ,00</p>
      </header>
    </div>
  );
}

export default App;
