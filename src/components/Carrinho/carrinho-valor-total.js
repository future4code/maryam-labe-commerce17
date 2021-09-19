import React from 'react';
import '../../src/../App.css';
import '../../App'
import Carrinho from './carrinho-Itens';

export default function ValorTotal(props) {
    
	return <div>
		<span>
            <p>Valor total:R${props.valor},00</p>
        </span>
	</div>
}
