import React from "react";
import { Formulario, PaiForm, Titulo } from "../style";


function FormBase () {
    
    return(
        <div>
            <PaiForm>
                <Titulo>Dados Gerais:</Titulo>    
                
                <Formulario>
                    <label>Nome</label>
                    <input type="text" placeholder="Digite o seu nome"/>

                    <label>Idade</label>
                    <input type="tel"  placeholder="Digite a sua idade"/>

                    <label>E-mail</label>
                    <input type="email"  placeholder="Digite o seu email"/>

                    <label>Grau Escolaridade</label>
                    <select name="grau-escolaridade" size="1">
                        <option value="vazio"> </option>
                        <option value="EMI">Ensino Médio Incompleto</option>
                        <option value="EMC">Ensino Médio Completo</option>
                        <option value="ESI">Ensino Superior Incompleto</option>
                        <option value="ESC">Ensino Superior Completo</option>
                    </select>

                </Formulario>
            </PaiForm>
        </div>


)}

export default FormBase;