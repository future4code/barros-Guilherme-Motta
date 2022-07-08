import styled from 'styled-components';



export const Rodape = styled.footer`
    background-color: gray;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 30px;
    padding: 0 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const SecaoLateral = styled.aside`
    background-color: orange;
    width: 200px;
    height: 85vh;
    position: absolute;
    bottom: 30px;
`
export const SecaoLateralTwo = styled.aside`
background-color: orange;
width: 200px;
height: 85vh;
position: absolute;
bottom: 30px;
right: 0px;
`
export const Input1 = styled.input`
    width: 150px;
    margin-left: 20px;
`
export const Input2 = styled.input`
    width: 400px;
    margin-left: 20px;
    `

export const Mensagem1 = styled.label`
    color: black;
    text-transform:capitalize;
    margin-left: 30px;
`

export const Botao = styled.button`
        margin-left: 30px;
`

export const Principal = styled.main`
    width: 74%;
    height:80vh;
    display: flex;
    flex-direction:row;
    align-items:flex-end;

    box-sizing: border-box;

    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 53%)
`


export const MyImagem = styled.div`
    background-image: url(${(props)=>props.backImage});
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction:row;
    align-items: center;
    
    position:absolute;
    left: 50%;
    transform: translate(-100%);
`

export const FraseLogo = styled.h2`
    color:black;
    margin-left: 90px;

`