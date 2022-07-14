import styled from "styled-components";


export const PaiForm = styled.div`
    width: 700px;
    height: 600px;
    
    padding: 10px;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
`
export const Titulo = styled.h2`
    color: red;
    text-align: center;
`

export const Formulario = styled.form`
    width: 700px;
    height: 550px;
    background-color: pink;

    box-sizing: border-box;

    margin-top:  10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    label{
        margin-left: 10px;
        margin-top: 15px;
        display: inline;
    }
    input{
        margin-left: 5px;
        padding: 10px;
        width: 80%;

        border: 1px solid black;
        border-radius: 10px;

        box-sizing: border-box;
    }
    select{
        margin-top : 10px;
        width: 80%;
        padding: 10px;

        border: 1px solid black;
        border-radius: 10px;
    }
    button{
        margin-top: 20px;
        padding: 10px;

        width: 50%;

        border: 1px solid black;
        border-radius: 10px;

        cursor: pointer;
    }
    
`
export const Mensagem = styled.p`
    color: deepskyblue;
    font-size: 20px;
`
export const CaixaMensagem = styled.div`
    width: 700px;
    height: 600px;
     position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`

export const Botao = styled.button`
    margin-top: 20px;
        padding: 10px;

        width: 50%;

        border: 1px solid black;
        border-radius: 10px;

        cursor: pointer;

        position: absolute;
        top: 65%;
        left: 50%;

        transform: translate(-50%);
`