import React from "react";
import CampodeBusca from "../CampoDeBusca";
import HamburgerMenu from "./HamburgerMenu";
import "./style.scss";

class Cabecalho extends React.Component {
    render() {
        return (
            <div>
                <div className="cabecalho">
                
                <div className="alinhamento">
                <img src="./imagens/logo/logo-desktop.png" alt="logo" />
                    
                    <ul>

                        <li> <a href="#">Home</a></li>
                        <li><a href="#">Nossas Lojas</a></li>
                        <li><a href="#">Novidade</a></li>
                        <li><a href="#">Promoções</a></li>
                    </ul>

                    <div className="buscaVisivel">
                    <CampodeBusca />

                    </div>


                    </div>
                    <HamburgerMenu/>
                   
                   
                    </div>
                    <div className="corDoFundo">
                    <CampodeBusca />
                    </div>
                    
                
                
            </div>
        );
    }
    
}

export default Cabecalho;