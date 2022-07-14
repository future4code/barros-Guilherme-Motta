import React from "react";
import Footer from "./Components/Footer";
import Section from "./Components/Section";
import { MyImagem, FraseLogo} from "./style";
import Logo from "./iconeLogo.png";
import Formulario from "./Components/Form";

function App() {
  


  return (
    <div>
      <MyImagem backImage={Logo}>
        <FraseLogo>
                <h2>LabZap</h2>
        </FraseLogo>
      </MyImagem>
      <Section/>
      
      <Formulario/>
      <Footer texto={"Copyright 2022.  Escrito por Guilherme Motta, Nova Friburgo-RJ"}/>
    </div>
  );
}

export default App;
