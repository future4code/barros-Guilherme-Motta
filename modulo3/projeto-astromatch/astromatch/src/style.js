import styled from "styled-components";

export const Main = styled.main`
    width: 300px;
    height: 500px;

    overflow: hidden;

    border: 2px solid black;
    border-radius: 5px;

    margin: 10px auto;

    box-sizing: border-box;

    position: relative;

    img{
        width: 250px;
        height: 300px;
        border-radius: 5px;
    }

    button{
        width: 100px;
        margin: 10px;
    }
`

export const PaiTitulo = styled.section`

    width: 100%;
    height: 50px;

    background-color: red;

    border-bottom: 1px solid black;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    h2{ 
        margin-top: 6%;
    }
    img{
        width: 25px;
        height: 25px;
    }
    button{
        width: max-content;
        height: max-content;
        background-color: transparent;
        border-color: transparent;
        cursor: pointer;
    }
`

export const ContainerInfoUser = styled.section`

    margin-top: 30px;
    p{
        margin:0;
        font-size: 15px;
    }
`

export const PaiBotoes = styled.div`

    width: 100%;
    height: 75px;
    /* background-color: yellow; */

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    img{
        width: 40px;
        height: 40px;
    }
    button{
        width: max-content;
        height: max-content;
        background-color: transparent;
        border-color: transparent;
        cursor: pointer;
    }
`