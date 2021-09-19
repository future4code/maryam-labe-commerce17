import React from 'react';
import '../../src/../App.css';
import ValorTotal from './carrinho-valor-total';

export default function Carrinho (props) {
	return (<div>
		<header>
        <h2>Carrinho:</h2>
		{props.carrinho
		.filter((produto) => {
			return produto.quantidade > 0
		})
		.map((produto) => {
            return (
				<div className="containerCarrinho">
				<p>{produto.nome} R${produto.preco},00</p>
				{produto.quantidade }x
				
				<button onClick={props.onClick(produto)}>Remover</button>
				</div>
            )}
		)} 
        <ValorTotal
		valor={props.valorTotal}
		/>
    </header>
	</div>)
}