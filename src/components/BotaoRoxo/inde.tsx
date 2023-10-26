import React from "react";
import './style.scss';
interface Props{
    texto: string,
}

const BotaoRoxo: React.FC<Props> = ({texto}) => {
    return (
        <div className="botaoRoxo">
            <button>{texto}</button>
        </div>
    );
}


export default BotaoRoxo;