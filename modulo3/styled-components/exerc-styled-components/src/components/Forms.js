import React from "react";
import {Principal,Input1, Input2, Mensagem1,Botao} from '../style';

function Formularios (props) {
    return (
        <div>
            <Principal>
                <Mensagem1>
                    <span>Remetente: </span>
                </Mensagem1>
                <Input1/>
                <Mensagem1>
                    <span>Msg: </span>
                </Mensagem1>
                <Input2/>

                <Botao>Enviar Mensagem</Botao>
            </Principal>
        </div>
        
    )
}

export default Formularios;