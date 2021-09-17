import React from 'react';
import '../../src/../App.css';
import '../../App'
import Carrinho from './carrinho-Itens';

export default function ValorTotal() {
    const valor=200
	return <div>
		<span>
            <p>Valor total:R${valor},00</p>
        </span>
	</div>
}
