import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="Small-card">
            <img className="teste" src={props.imagem } />
            <span>
                <spam>
                    <strong>{props.titulo}</strong>
                    {props.texto}
                </spam>
            </span>
        </div>
    )
}

export default CardPequeno;