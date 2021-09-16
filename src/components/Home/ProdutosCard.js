import React from 'react'

export default function ProdutosCard({cardImagem, cardNome, cardPreco, onClickButton}) {
    return (
        <div>
            <img src={cardImagem} alt={cardNome}/>
            <div>
                <h4>{cardNome}</h4>
                <p>{cardPreco}</p>
            </div>
            <button onClick={onClickButton}>Adicionar ao carrinho</button>
        </div>
    )
}


