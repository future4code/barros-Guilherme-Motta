import React from "react";
import {Formulario, PaiForm } from "../style";


function Etapa3 () {
    // const enviar = (e) => {
    //     e.preventDefault();
    //     console.log("testando!");
    // }
    return(
        <div>
            <PaiForm>                            
                {/* <Titulo>{props.titulo}</Titulo> */}
                    <Formulario>

                            <label>Por que você não terminou um curso de graduação?</label>
                            <input type="text" placeholder=" "/>

                            <label>Você fez algum curso complementar?</label>
                            <select name="grau-escolaridade" size="1">
                                <option value="vazio"> </option>
                                <option value="Curso Tecnico">Curso Técnico</option>
                                <option value="Curso de Ingles">Curso de Inglês</option>
                                <option value="Não fiz">Não fiz curso complementar</option>
                            </select>   

                            {/* <button enviar={enviar}>Continuar</button> */}
                    </Formulario>
            </PaiForm>
        </div>
    )
}

export default Etapa3;