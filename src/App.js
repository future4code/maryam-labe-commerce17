import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Carrinho from './components/Carrinho/carrinho-itens.js';
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0.9rem;
    margin-bottom: 0.5rem;
`


class App extends React.Component {

  state = {
    busca: "",
    precoMinimo: "",
    precoMaximo: "",
    ordenacao: "maiorPreco",
    valorTotal: 0,
    carrinho: [],
    produtos: [

      {
        id: 1,
        imagemUrl: meteorito1,
        nome: "meteorito azul",
        preco: 530,
        quantidade: 0
      },
      {
        id: 2,
        imagemUrl: meteorito2,
        nome: "meteorito rochoso",
        preco: 80,
        quantidade: 0
      },
      {
        id: 3,
        imagemUrl: meteorito3,
        nome: "meteorito verde",
        preco: 850,
        quantidade: 0
      },
      {
        id: 4,
        imagemUrl: meteorito4,
        nome: "meteorito vermelho",
        preco: 610,
        quantidade: 0
      },
      {
        id: 5,
        imagemUrl: meteorito5,
        nome: "meteorito rosa",
        preco: 790,
        quantidade: 0
      },
      {
        id: 6,
        imagemUrl: meteorito6,
        nome: "meteorito laranja",
        preco: 420,
        quantidade: 0
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

  limpaFiltro = () => {
    this.setState({ busca: "" });
    this.setState({ precoMinimo: "" });
    this.setState({ precoMaximo: "" });
  }

  adicionarAoCarrinho = (produto) => {
    const produtoNoCarrinho = this.state.carrinho.filter((item) => {
      if (produto.id === item.id) {
        return item;
      } else {
        return false;
      }
    });
    let novoCarrinho = [];
    if (produtoNoCarrinho.length === 0) {
      produto.quantidade = 1;
      novoCarrinho = [produto, ...this.state.carrinho];

    } else {
      novoCarrinho = this.state.carrinho.map((item) => {
        if (produto.id === item.id) {
          return { ...item, quantidade: item.quantidade + 1 };
        } else {
          return item;
        }
      });


    }
    this.setState({ carrinho: novoCarrinho });
    this.adicionarValorTotal(produto.preco)
  }


  adicionarValorTotal(preco) {
    this.setState({ valorTotal: this.state.valorTotal + preco })
  }

  removerItensdoCarrinho = (produtoParaRemover) => {
    let carrinhoAlterado = [];
    if(produtoParaRemover.quantidade === 1){
      carrinhoAlterado = this.state.carrinho.filter((item) => {
        if (item.id !== produtoParaRemover.id){
          return item;
        }else{
          return false;
        }

      });


    } else {
      carrinhoAlterado = this.state.carrinho.map((item) => {
        if (produtoParaRemover.id === item.id && item.quantidade > 1){
          return { ...item, quantidade: item.quantidade - 1};
        }else{
          return item;
        }
      });

    }
    this.setState({carrinho: carrinhoAlterado})
    this.subtrairValorTotal(produtoParaRemover.preco)
  }


  subtrairValorTotal(preco) {
    this.setState({ valorTotal: this.state.valorTotal - preco })
  }

  limpaCarrinho = () => {
    const carrinhoVazio = this.state.carrinho.map((item)=> {
      return { ...item, quantidade: 0}
    })
    this.setState({carrinho: carrinhoVazio});
    this.setState({valorTotal: 0})
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
            limpaFiltro={this.limpaFiltro}
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
            onClick={this.adicionarAoCarrinho}
          />
          <Carrinho
            produtos={this.state.produtos}
            valorTotal={this.state.valorTotal}
            itensCarrinho={this.state.carrinho}
            onClick={this.removerItensdoCarrinho}
            limpaCarrinho={this.limpaCarrinho}
          />

          <Footer className="footer">
            <p>Conheça nossas redes sociais</p>
            <div>
              <a href="https://www.instagram.com/" target="none"><img src="https://cdn-icons-png.flaticon.com/512/185/185985.png" alt="instagram" /></a>
              <a href="https://www.twitter.com/" target="none"><img src="https://cdn-icons-png.flaticon.com/512/185/185961.png" alt="twitter" /></a>
              <a href="https://www.facebook.com/" target="none"><img src="https://img-premium.flaticon.com/png/512/1377/premium/1377223.png?token=exp=1631977730~hmac=528eca751a912ec1e21a8e29c9c84adb" alt="facebook" /></a>
            </div>
          </Footer>

        </AppGrid>


      </div>

    );
  }

}

export default App;
