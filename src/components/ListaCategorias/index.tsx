
import React, { Component } from "react";
import Categoria from "../Categoria";
import './style.scss';

const categoriasLista = [
    {nome: "Camisetas", imagem: "./imagens/Categorias/Camiseta.png"},
    {nome: "Bolsas", imagem: "./imagens/Categorias/Bolsa.png"},
    {nome: "Calçados", imagem: "./imagens/Categorias/Calcados.png"},
    {nome: "Calças", imagem: "./imagens/Categorias/Calcas.png"},
    {nome: "Casacos", imagem: "./imagens/Categorias/Casacos.png"},
    {nome: "Óculos", imagem: "./imagens/Categorias/Oculos.png"},
]

class ListaCategorias extends Component {
    render(){
        return (
            <section className="listaCategorias">
                {categoriasLista.map((categoria, index) => (
                    <Categoria 
                    key={index} 
                    nome={categoria.nome} 
                    imagem={categoria.imagem} />
                ))}
            </section>
        )
    }
}

export default ListaCategorias;