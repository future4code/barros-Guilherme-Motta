import React, { useState } from "react";
import { Principal, MyForm, Texto1} from "../style";

function Formulario () {
    const [inputName,setInputName] = useState("");
    const [inputMsg, setInputMsg] = useState ("");

    const [listaMsg, setListaMsg] = useState (
        [
            // {nomeUsuario: "", msg: ""},
        ]);


    const handleInputName = (event) => {
        setInputName(event.target.value);
    }

    const handleInputMsg = (event) => {
        setInputMsg(event.target.value);
    }
    
    

    const adicionar = (event) => {
        event.preventDefault();
        const novasMensagens = [...listaMsg, {nome: inputName, mensagem: inputMsg}];
        setListaMsg(novasMensagens);
        setInputName("");
        setInputMsg("");
    }
    
    const remover = (indexRemove) => {
        const itensAtualizados = listaMsg.filter((item, index) => {return index !== indexRemove;})
        setListaMsg(itensAtualizados);
    }

    const pessoa = "eu";

    const historicoMsgs = listaMsg.map((item,i)=> {
        if(item.nome === pessoa){
        return(
            <div >
                <li key={i}> <p>{item.mensagem}</p> <button onClick={()=>{remover(i)}}>:)</button> </li>         
            </div>  
            )}
        else if (item.nome !== pessoa){
            return ( 
                <div>
                    {/* <li  key={i}> <strong><p>{item.nome}</p></strong>:  <p>{item.mensagem}</p> <button onClick={()=>{remover(i)}}>:)</button></li>  */}
                    <li  key={i}> <strong><Texto1>{item.nome}: </Texto1></strong>  <p>{item.mensagem}</p> <button onClick={()=>{remover(i)}}>:)</button></li> 
                </div>
            )}
    })



    return(
        <Principal>
            <ul>
                {historicoMsgs}        
            </ul>

            <MyForm>
                <input className="input1" type='text' required placeholder="Nome" value={inputName} onChange={handleInputName}/>
                <input className="input2" type='text' required placeholder="Mensagem" value={inputMsg} onChange={handleInputMsg}/>
                <button onClick={adicionar} >Enviar</button>
            </MyForm>
        </Principal>

)}

export default Formulario;