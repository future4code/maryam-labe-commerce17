import React from 'react';
import styled from 'styled-components';
import './App.css';
import Filtro from './components/Filtro/filtro';
import Main from './components/Home/main';




class App extends React.Component {
  state = {
    busca: "",
    precoMinimo: "",
    precoMaximo: "",
    ordenacao: "maiorPreco"
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


  render() {
    return (
      <div>



        <Filtro
          busca={this.state.busca}
          atualizaBusca={this.atualizaBusca}
          precoMinimo={this.state.precoMinimo}
          atualizaPrecoMinimo={this.atualizaPrecoMinimo}
          precoMaximo={this.state.precoMaximo}
          atualizaPrecoMaximo={this.atualizaPrecoMaximo}
          ordenacao={this.state.ordenacao}
          ordenaProdutos={this.ordenaProdutos}
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
        />

        
      </div>

    );
  }

}

export default App;
