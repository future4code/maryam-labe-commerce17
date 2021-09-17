import React from 'react'
import styled from 'styled-components'

const CardImag = styled.img`
width: 200px;
height: auto;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;



:hover {
    box-shadow: 0 1px 5px;
}
`
const ProdutoGeral = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
flex-direction: column;
margin-bottom: 8px;
`

export default function ProdutosCard({cardImagem, cardNome, cardPreco, onClickButton}) {
    return (
        <ProdutoGeral>
            <CardImag src={cardImagem} alt={cardNome}/>
            <div>
                <h4>{cardNome}</h4>
                <p>{cardPreco}</p>
            </div>
            <button onClick={onClickButton}>Adicionar ao carrinho</button>
        </ProdutoGeral>
    )
}


