import React from 'react';
import styled from 'styled-components';
import { listaDeProdutos } from './listaDeProdutos';
import ProdutosCard from './ProdutosCard';

const MainContainer = styled.section`
    border: 1px solid black; 
    margin: 8px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

function Main(props) {
    
    const adicionarAoCarrinho = (produto) => {
        console.log(produto)
    }
    return (
        <MainContainer >
            {/* <div>
                <h3>Quantidade de produtos: {listaDeProdutos.length} </h3>
            </div> */}
            
                {
                    listaDeProdutos.map((produto) => {
                        return <ProdutosCard
                            key={produto.id}
                            cardImagem={produto.imagemUrl}
                            cardNome={produto.nome}
                            cardPreco={produto.preco}
                            onClickButton={() => adicionarAoCarrinho(produto)}
                        />
                    })
                }
            
            {/* <p>Produtos</p> */}

            {/* <ul>{props.produtos

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
                        <li>{produto.nome}-{produto.preco}</li>
                    )
                })
            }
            </ul> */}
        </MainContainer>
    )
}

export default Main;
