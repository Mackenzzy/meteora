import React,{ Component } from "react";
import './style.scss';
import CardProdutos from "../CardProdutos";

const Lista = [
    {
        imagem: "./imagens/Produtos/Camiseta.png",
        altImagem: "Camiseta Conforto",
        nome: "Camiseta Conforto",
        descricao: "Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.",
        preco: "70,00"
    },
    {
        imagem: "./imagens/Produtos/Calça.png",
        altImagem: "Camiseta Conforto",
        nome: "Calça Alfaiataria",
        descricao: "Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!.",
        preco: "180,00"
    },
    {
        imagem:"./imagens/Produtos/Tenis.png",
        altImagem:"imagem do tenis chunky",
        nome:"Tênos Chunky",
        descricao:"Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.",
        preco:"250,00"
    },
    {
        imagem:"./imagens/Produtos/Jaqueta.png",
        altImagem:"imagem da jaqueta Jeans",
        nome:"Jaqueta Jeans",
        descricao:"Modelo unissex oversized com gola de camurça. Atemporal e autêntica!",
        preco:"150,00"
    },
    {
        imagem:"./imagens/Produtos/Oculos.png",
        altImagem:"imagem do oculos redondo",
        nome:"Óculos Redondo",
        descricao:"Armação metálica em grafite com lentes arredondadas. Sem erro!",
        preco:"120,00"
    },
    {
        imagem:"./imagens/Produtos/Bolsa.png",
        altImagem:"imagem da bolsa",
        nome:"Bolsa Coringa",
        descricao: "Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!",
        preco:"120,00"
    },
    
]

class ListaProdutos extends Component {
    render(){
        return (
            
            <section className="listaProdutos">
                <div >
                    <h2>Produtos que estão bombando!</h2>
                </div>
                <div className="produtos">  
                    {Lista.map((produto, index) => (
                    <CardProdutos 
                    key={index} 
                    imagem={produto.imagem} 
                    altImagem={produto.altImagem} 
                    nome={produto.nome} 
                    descricao={produto.descricao} 
                    preco={produto.preco} />
                ))}
                </div>
                </section>
            )
        }
    }
    export default ListaProdutos;