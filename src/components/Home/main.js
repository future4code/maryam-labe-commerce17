import React from 'react';
import styled from 'styled-components';
// import ProdutosCard from './ProdutosCard';

const MainContainer = styled.section`
    border: 1px solid black; 
    margin: 4px;
    display: grid;
    grid-row: 1fr 1fr;
    grid-template-columns: 2fr 3fr 1fr;
`

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
padding: 5px;
`

function ProdutosCard({produto, onClick}) {
    console.log()
    return (
        <ProdutoGeral>
            <CardImag src={produto.imagemUrl} alt={produto.nome}/>
            <div>
                <h4>{produto.nome}</h4>
                <p>{produto.preco}</p>
            </div>
            <button >Adicionar ao carrinho</button>
        </ProdutoGeral>
    )
 }
// onClick={this.onClick}

function Main(props) {
    
    return (
        <MainContainer >
            {/* <div>
                <h3>Quantidade de produtos: {listaDeProdutos.length} </h3>
            </div> */}
            
            {/* <p>Produtos</p> */}

            {props.produtos

                .filter((produto) => {
                    return produto.nome.toLowerCase().includes(props.busca.toLowerCase())
                })
                .filter((produto) => {
                    return props.precoMaximo === "" || produto.preco < props.precoMaximo
                })
                .filter((produto) => {
                    return props.precoMinimo === "" || produto.preco > props.precoMinimo
                })
                .sort((produtoAtual, produtoProximo) => {
                    switch (props.ordenacao) {
                        case "maiorPreco":
                            return produtoProximo.preco - produtoAtual.preco;
                        case "nome":
                            return produtoAtual.nome.localeCompare(produtoProximo.nome);
                        case "menorPreco":
                            return -1 * (produtoProximo.preco - produtoAtual.preco);
                        default:
                            return null
                    }
                })
                .map((produto) => {
                    return (
                        <div>
                            {<ProdutosCard produto={produto} onClick={()=>props.onClick(produto)} />}
                        </div>
                    )
                })
            }
        </MainContainer>
    )
}

export default Main;
