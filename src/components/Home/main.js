import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.section`
    border: 1px solid black;
    width: 60%;
    margin: 8px;
    display: flex;
    flex-direction: column;
    
`

const produtos = [
    {
        nome: "meteorito azul",
        preco: 530
    },
    {
        nome: "meteorito rochoso",
        preco: 80
    },
    {
        nome: "meteorito roxo",
        preco: 850
    },
    {
        nome: "meteorito vermelho",
        preco: 610
    },
    {
        nome: "meteorito rosa",
        preco: 790
    }
  ]


function Main(props) {
    
    return (
        <MainContainer >

            <p>Produtos</p>
            <ul>{produtos
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

                    }
                })
                .map((produto) => {
                    return (
                        <li>{produto.nome}-{produto.preco}</li>
                    )
                })
            }
            </ul>
        </MainContainer>
    )
}

export default Main;
