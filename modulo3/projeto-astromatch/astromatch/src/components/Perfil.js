import React, {useState, useEffect} from "react";
import { ContainerInfoUser, Main, PaiTitulo, PaiBotoes } from "../style";
import iconeUser from "../icones&imagens/iconeUser.png";
import iconeRejeitar from "../icones&imagens/iconeX.png";
import iconeCoracao from "../icones&imagens/iconeCoracao.png";


function Perfil (props) {

    return(
        <div>
            <Main>
                <PaiTitulo>
                    <h2>Astromatch</h2>
                    <button>
                    <img src={iconeUser} alt="icone usuario"/>
                    </button>
                </PaiTitulo>
                
                
                
                <ContainerInfoUser>
                    <img src={props.fotoUsuario}/>
                    
                    <p>{props.nome}, {props.idade}</p>
                    <p>{props.descricao}</p>

                </ContainerInfoUser>
                    {/* <span>{props.nome}, {props.idade}</span> */}

                {/* <button>Rejeitar</button> */}
                <PaiBotoes>
                    <button>
                        <img src={iconeRejeitar} alt="icone de rejeitar perfil"/>
                    </button>

                    <button>
                        <img src={iconeCoracao} alt="icone de dar match"/>
                    </button>
                </PaiBotoes>
                {/* <button>Match</button> */}


            </Main>
        </div>
    )
}

export default Perfil;