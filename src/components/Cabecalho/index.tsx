import React from "react";
import CampodeBusca from "../CampoDeBusca";

class Cabecalho extends React.Component {
    render() {
        return (
            <div className="cabecalho">
                <img src="logo.png" alt="logo" />
                <ul>
                    <li>Home</li>
                    <li>Nossas Lojas</li>
                    <li>Novidade</li>
                    <li>Promoções</li>
                </ul>
                <h1>React App</h1>
                <CampodeBusca />
            </div>
        );
    }
    
}

export default Cabecalho;