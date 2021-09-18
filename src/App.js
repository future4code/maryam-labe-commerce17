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
import backgroud from './imagens/background.png'
import logo from './imagens/logo.png'


const AppGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  position: absolute;
  top:10px;
  left: 8px;
  

`

const Background = styled.img`
  width: 100%;
  height: 100%;
`

const Footer = styled.footer`
    grid-column: 1/4;
    /* width: 100vw; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0.3rem;
    margin-bottom: 0.5rem;
`


class App extends React.Component {

  state = {
    busca: "",
    precoMinimo: "",
    precoMaximo: "",
    ordenacao: "maiorPreco",
    contador: 0,
    produtos: [
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
      <div className="page-container">
        <Background src={backgroud} className="background" />


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
          <Carrinho produtos={this.state.produtos} />
          <Footer className="footer">
            <p>Conheça nossas redes sociais</p>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/512/185/185985.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/185/185961.png" alt="" />
              <img src="https://img-premium.flaticon.com/png/512/1377/premium/1377223.png?token=exp=1631977730~hmac=528eca751a912ec1e21a8e29c9c84adb" alt="" />
            </div>
          </Footer>
        </AppGrid>
      </div>
    );
  }

}

export default App;
