import React from "react";
import {Rodape} from "../style";

function Footer (props) {
    return (
        <Rodape>
            <p>{props.texto}</p>
        </Rodape>
    )
}

export default Footer;