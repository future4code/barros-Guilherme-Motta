import './App.css';
import Etapa4 from './Components/Etapa4';
import FormBase from './Components/Etapa1';
import SegundaEtapa from './Components/SegundaEtapa';
import Etapa3 from './Components/TerceiraEtapa';
import {useState} from "react";
import { Botao, PaiForm } from './style';


function App() {

  let proximaEtapa;

  const [etapa,setEtapa] = useState(1);
  
  switch(etapa){
      case 1:
        proximaEtapa = <FormBase />
        break;
      case 2:
        proximaEtapa = <SegundaEtapa />
        break;
      case 3:
        proximaEtapa = <Etapa3 />
        break;
      default:
        proximaEtapa = <Etapa4 />
  }
  

  function atualizaEtapa (e) {
    let sum = etapa + 1;
    setEtapa(sum);
    // e.preventDefault();
  }

  return (
    <div>
      {proximaEtapa}
        <PaiForm>
          <Botao onClick={atualizaEtapa}>Continuar</Botao>
        </PaiForm>
    </div>
  );
}

export default App;
