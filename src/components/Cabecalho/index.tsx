import React from "react";
import CampodeBusca from "../CampoDeBusca";
import "./style.scss";

class Cabecalho extends React.Component {
    render() {
        return (
            <div className="cabecalho">
                <div className="alinhamento">
                <img src="./imagens/logo/logo-desktop.png" alt="logo" />
                    
                    <ul>

                        <li> <a href="#">Home</a></li>
                        <li><a href="#">Nossas Lojas</a></li>
                        <li><a href="#">Novidade</a></li>
                        <li><a href="#">Promoções</a></li>
                    </ul>


                    </div>
                <CampodeBusca />
                
            </div>
        );
    }
    
}

export default Cabecalho;