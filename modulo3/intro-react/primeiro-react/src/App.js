import fotoPerfil from './imagem01.jpeg';
import './App.css';

function App() {
  const mensagemPRincipal = 'Olá! Eu sou o Guilherme!';

  const onClickBotao = () => {
    alert("Boa noite!!");
  }

  const explanation = () => {
    alert("Não Coloquei uma foto minha, pois não tenho muitas fotos, e a que tenho no slack não consigo mais recuperá-la")
  }
  alert("Olá bom dia, seja bem vindo")
  return (
    <div className="App">
      <h1>{mensagemPRincipal}</h1>

      <header className="App-header">
        <img src={fotoPerfil} className="App-logo" alt="imagem que simula foto de perfil" />
        <p className='PrimeiroTexto'>
          Este é o meu primeiro site React !!
        </p>

        <div>
          <button className='Botao' onClick={onClickBotao}>Aperte este botão</button>
        </div>
        <div>
          <button className='Botao2' onClick={explanation}>Aperte</button>
        </div>
      </header>
    </div>
  );
}

export default App;
