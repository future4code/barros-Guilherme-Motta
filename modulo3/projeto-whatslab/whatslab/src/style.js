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
export const Principal = styled.main`
    width:70%;
    height: 80vh;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -45%);

    border: 2px solid black;
    border-radius: 10px;

    background-color: deepskyblue;

    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    box-sizing: border-box;

    overflow: hidden;
       
    padding: 10px;
    li{
        list-style-type:none;
        max-width: max-content; 
        max-height:max-content;
        
        background-color: #d3fe9a;
        padding-inline: 20px;
        border-radius: 5px;
        margin-right: 10px;

        display: flex;
        flex-direction: row;
        align-items:center;
        /* justify-content: center; */

        margin: 10px;
        button{
            width: max-content;
            margin-left: 10px;
            box-sizing: border-box;
            cursor: pointer;
            /* background-color: #d3fe9a; */
        }
    }
`

export const Texto1 = styled.p`
    /* margin: 10px; */
    margin-right: 10px;
    box-sizing: border-box; 
`

export const MyForm = styled.form`
    width:100%;
    height: 50px;
    display: flex;
    box-sizing: border-box;
    
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 0;

    .input1{
        width: 200px;
        margin: 0px 3px;
        padding: 5px;
    }
    .input2{
        width:400px;
        margin: 0px 3px;
        padding: 5px;
    }   
    button{
        padding: 5px;
        margin-left: 15px;
    }
`