import React,{ Component } from "react";
import './style.scss';
import CardProdutos from "../CardProdutos";
import produtos from "../../data/Produtos/produtos.json";



class ListaProdutos extends Component {

    render(){
        return (
            
            <section className="listaProdutos">
                <div >
                    <h2>Produtos que estão bombando!</h2>
                </div>
                <div className="produtos">  
                    {produtos.map((produto, index) => (
                    <CardProdutos 
                    id={produto.id} 
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