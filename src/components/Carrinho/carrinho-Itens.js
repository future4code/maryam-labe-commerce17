import React from 'react';
import '../../src/../App.css';
import ValorTotal from './carrinho-valor-total';

export default function Carrinho() {
	return <div>
		<header>
        <h2>Carrinho:</h2>
		<span>
            <p>2x item 1</p>
        	<button>Remover</button>
		</span>
		<span>
            <p>2x item 2</p>
        	<button>Remover</button>
		</span>
		<span>
            <p>2x item 3</p>
        	<button>Remover</button>
		</span>
        <ValorTotal></ValorTotal>
    </header>
	</div>
}


{/* <button alt={''} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p> */}