import React from "react";
import Botao from "../CampoDeBusca/Botao";
import "./style.scss";

class CampodeBusca extends React.Component {
    render() {
        return (
            <form action="" className="formulario">
                            <input className="campoDeBusca" placeholder="Digite o produto" type="text" />
                            <Botao />
            </form>
            
        );

    }
}


export default CampodeBusca