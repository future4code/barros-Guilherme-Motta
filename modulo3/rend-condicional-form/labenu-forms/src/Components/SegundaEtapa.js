import React from "react";
import { Formulario, PaiForm } from "../style";


const SegundaEtapa = () => {

    // const enviar = (e) => {
    //     e.preventDefault();
    //     console.log("testando!");
    // }

    return(
        <div>
            <PaiForm>
                    <Formulario>
                            <label>Curso</label>
                            <input type="text" placeholder="Qual curso?"/>

                            <label>Unidade de ensino</label>
                            <input type="text" placeholder="Qual é a unidade de ensino?"/>

                            {/* <button onClick={enviar}>Continuar</button> */}
                    </Formulario>
            </PaiForm>
        </div>
)}

export default SegundaEtapa;