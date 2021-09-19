import React from 'react';
import '../../src/../App.css';
import ValorTotal from './carrinho-valor-total';




export default function Carrinho (props){

		return (<div>
			<header>
			<h2>Carrinho:</h2>
			
			
			
			{props.itensCarrinho
			.filter((item) => {
				return item.quantidade > 0
			})
			.map((item) => {
				return (
					<div className="containerCarrinho">
					<p>{item.nome} R${item.preco},00</p>
					{item.quantidade }x
					
					<button onClick={props.onClick(item)}>Remover</button>
					</div>
				)}
			)} 
			<ValorTotal
			valor={props.valorTotal}
			/>
		</header>
		</div>)
	}
	
