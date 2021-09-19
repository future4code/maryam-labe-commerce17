import React from 'react';
import styled from 'styled-components';
import logo from '../../imagens/logo.png'


const FiltroContainer = styled.section`
    /* border: 1px solid black; */
    box-shadow: 1px 5px 5px 1px rgb(175, 172, 172);
    /* margin: 8px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1.8rem;
    width: 90%;
    height: 100%;
    
`
const Input = styled.input`
    width: 70%;
    outline: none;
    height: 1.2rem;
    margin-bottom: 5px;
`
const Select = styled.select`
    width: 70%;
    height: 1.2rem;
`
const Button = styled.button`
    width: 70%;
`




function Filtro(props) {

    return (



      <div className="filtro-section">
        <img src={logo} alt="logo da loja" className="logo-img" />
        <FiltroContainer >

            <h2>Filtro:</h2>

            <label htmlFor="valorMinimo">Valor Mínimo:</label>
            <Input
                type="number"
                name="valorMinimo"

                value={props.precoMinimo}
                onChange={props.atualizaPrecoMinimo}
            />
            
            <label htmlFor="valorMaximo">Valor Máximo:</label>
            <Input
                type="number"
                name="valorMaximo"

                value={props.precoMaximo}
                onChange={props.atualizaPrecoMaximo}
            />
            
            <label htmlFor="nome">Busca por nome:</label>
            <Input
                name="nome"
                value={props.busca}
                onChange={props.atualizaBusca}
            />

            <label htmlFor="ordem">Ordenar por:</label>
            <Select
                name="ordem"
                value={props.ordenacao}
                onChange={props.ordenaProdutos}

            >
                <option value="maiorPreco">Maior preço</option>
                <option value="menorPreco">Menor preço</option>
                <option value="nome">Ordem Alfabética</option>
            </Select>
            <Button onClick={props.limpaFiltro}>Limpar</Button>
        </FiltroContainer>
      </div>


    );
}


export default Filtro;