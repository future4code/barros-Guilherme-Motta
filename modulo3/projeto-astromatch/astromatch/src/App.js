import './App.css';
import Perfil from './components/Perfil';
import { listaDeDados } from './MockDeDados';
// import { Main } from './style';

function App() {

  const [dados] = [listaDeDados];

  return (
    <div className="App">
      
      {
        dados.map((item, index)=>{

          return (
              <Perfil fotoUsuario={item.fotoUser} idade={item.age} nome={item.name} descricao={item.descricao} key={index}></Perfil>
          )
        })
      }
    

    </div>
  );
}

export default App;
