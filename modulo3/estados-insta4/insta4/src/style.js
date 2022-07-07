import styled from 'styled-components';

// estilo nas tags h3
export const TitutloDivisor = styled.h3`
    color:  rgba(255, 0, 0, 0.6);
`

// aplica estilo no formulario e todo o seu conteudo; O estilo dentro do formulario é aplicado em cascata
export const Formulario = styled.form`    
margin: 50px;
    label{
        font-size:15px;
        margin: 10px;
    }
    input{ 
        width: 200px;
        margin: 5px;
    }
    button{
        width: 100px;
        margin: 10px;
    }
`
// aplica estilo para a tag section e o que ela tem dentro DelayNode, nesse caso é a tag p

export const CaixaMensagem = styled.section`
    width: 100%;
    height: 90px;
    background-color: rgba(255, 10, 100, 0.6);
    p{
        text-align: center;
        color: yellow;
    }
`

