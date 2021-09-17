import React from 'react';
import styled from 'styled-components';



const FiltroContainer = styled.section`
    border: 1px solid black;
    margin: 8px;
    display: flex;
    flex-direction: column;
    
`






function Filtro(props) {

    return (


        <FiltroContainer >

            <p>Filtro</p>

            <label htmlFor="valorMinimo">Valor Mínimo:</label>
            <input
                type="number"
                name="valorMinimo"

                value={props.precoMinimo}
                onChange={props.atualizaPrecoMinimo}
            />
            
            <label htmlFor="valorMaximo">Valor Máximo:</label>
            <input
                type="number"
                name="valorMaximo"

                value={props.precoMaximo}
                onChange={props.atualizaPrecoMaximo}
            />
            
            <label htmlFor="nome">Busca por nome:</label>
            <input
                name="nome"
                value={props.busca}
                onChange={props.atualizaBusca}
            />

            <label htmlFor="ordem">Ordenar por:</label>
            <select
                name="ordem"
                value={props.ordenacao}
                onChange={props.ordenaProdutos}

            >
                <option value="maiorPreco">Maior preço</option>
                <option value="menorPreco">Menor preço</option>
                <option value="nome">Ordem Alfabética</option>
            </select>

        </FiltroContainer>

    );
}


export default Filtro;