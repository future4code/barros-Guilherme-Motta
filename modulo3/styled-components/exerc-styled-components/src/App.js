import React from "react";
import Footer from "./components/footer";
import Aside from "./components/Aside";
import Formularios from "./components/Forms";
import { MyImagem, FraseLogo } from "./style";
import Logo from "./iconeLogo.png";

function App() {
  return (
    <div>
      <MyImagem backImage={Logo}>
        <FraseLogo>
                <h2>LabZap</h2>
        </FraseLogo>
      </MyImagem>
      <Aside/>
      <Formularios/>
      <Footer texto={"Copyright 2022.  Escrito por Guilherme Motta, Nova Friburgo-RJ"}/>
    </div>
  );
}

export default App;
