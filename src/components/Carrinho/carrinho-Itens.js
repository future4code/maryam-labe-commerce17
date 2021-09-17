import React from 'react';
import '../../src/../App.css';
import ValorTotal from './carrinho-valor-total';

export default function Carrinho (props) {
	return (<div>
		<header>
        <h2>Carrinho:</h2>
		{props.produtos.map((produto) => {
            return (
				<div className="containerCarrinho">
				<p>{produto.nome} R${produto.preco},00</p>
				{produto.contador}
				<button>Remover</button>
				</div>
            )}
		)} 
        <ValorTotal></ValorTotal>
    </header>
	</div>)
}