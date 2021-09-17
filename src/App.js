import React from 'react';
import styled from 'styled-components';
import './App.css';
import Carrinho from './components/Carrinho/carrinho-Itens';
import Filtro from './components/Filtro/filtro';
import Main from './components/Home/main';
// import ProdutosCard from './components/Home/ProdutosCard'
import meteorito1 from './components/imagens-meteoritos/meteorito-azul.png'
import meteorito2 from './components/imagens-meteoritos/meteorito-bruto.png'
import meteorito3 from './components/imagens-meteoritos/meteorito-verde.png'
import meteorito4 from './components/imagens-meteoritos/meteorito-vermelho.png'
import meteorito5 from './components/imagens-meteoritos/meteorito-rosa.png'
import meteorito6 from './components/imagens-meteoritos/meteorito-amarelo.png'


const AppGrid = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;


`

class App extends React.Component {

  state = {
    busca: "",
    precoMinimo: "",
    precoMaximo: "",
    ordenacao: "maiorPreco",
    contador: 0,
    produtos : [
      {
        id: 1,
        imagemUrl: meteorito1,
        nome: "meteorito azul",
        preco: 530
    },
    {
        id: 2,
        imagemUrl: meteorito2,
        nome: "meteorito rochoso",
        preco: 80
    },
    {
        id: 3,
        imagemUrl: meteorito3,
        nome: "meteorito verde",
        preco: 850
    },
    {
        id: 4,
        imagemUrl: meteorito4,
        nome: "meteorito vermelho",
        preco: 610
    },
    {
        id: 5,
        imagemUrl: meteorito5,
        nome: "meteorito rosa",
        preco: 790
    },
    {
        id: 6,
        imagemUrl: meteorito6,
        nome: "meteorito laranja",
        preco: 420
    }
  ]

  }

  atualizaBusca = (event) => {
    this.setState({ busca: event.target.value });
  }

  atualizaPrecoMinimo = (event) => {
    this.setState({ precoMinimo: event.target.value })
  }

  atualizaPrecoMaximo = (event) => {
    this.setState({ precoMaximo: event.target.value })
  }

  ordenaProdutos = (event) => {
    this.setState({ ordenacao: event.target.value })
  }

  adicionarAoCarrinho = (event) => {
    this.setState({ contador: event.target.value })
    console.log(event)
}

  render() {
    return (
      <AppGrid>

        <Filtro
          busca={this.state.busca}
          atualizaBusca={this.atualizaBusca}
          precoMinimo={this.state.precoMinimo}
          atualizaPrecoMinimo={this.atualizaPrecoMinimo}
          precoMaximo={this.state.precoMaximo}
          atualizaPrecoMaximo={this.atualizaPrecoMaximo}
          ordenacao={this.state.ordenacao}
          ordenaProdutos={this.ordenaProdutos}
          produtos={this.state.produtos}
        />

        <Main
          busca={this.state.busca}
          atualizaBusca={this.atualizaBusca}
          precoMinimo={this.state.precoMinimo}
          atualizaPrecoMinimo={this.atualizaPrecoMinimo}
          precoMaximo={this.state.precoMaximo}
          atualizaPrecoMaximo={this.atualizaPrecoMaximo}
          ordenacao={this.state.ordenacao}
          ordenaProdutos={this.ordenaProdutos}
          produtos={this.state.produtos}
          adicionarAoCarrinho={this.adicionarAoCarrinho}
        />
        <Carrinho produtos={this.state.produtos}/>
        
      </AppGrid>

    );
  }

}  

export default App;
