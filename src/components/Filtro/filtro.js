import React from 'react';
import styled from 'styled-components';
import logo from '../../imagens/logo.png'


const FiltroContainer = styled.section`
    box-shadow: 1px 5px 5px 1px rgb(175, 172, 172);
    margin: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.8rem;
    height: 60%;
    
`
const Input = styled.input`
    width: 70%;
    /* border: none; */
    outline: none;
    /* border-bottom: 2px solid rgba(0, 0, 0, 0.8 ); */
    height: 1.2rem;
`
const Select = styled.select`
    width: 70%;
    height: 1.2rem;
`





function Filtro(props) {

    return (

        <div>
            <img src={logo} alt="logo da loja" className="logo-img" />
            <FiltroContainer >

                <h2>Filtro</h2>

                <label htmlFor="valorMinimo">Valor Mínimo:</label>
                <Input
                    name="valorMinimo"
                    type="number"
                    value={props.precoMinimo}
                    onChange={props.atualizaPrecoMinimo}
                />

                <label htmlFor="valorMaximo">Valor Máximo:</label>
                <Input
                    name="valorMaximo"
                    type="number"
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

            </FiltroContainer>
        </div>

    );
}


export default Filtro;