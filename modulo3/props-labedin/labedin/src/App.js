import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import MyFoto from './imagens/my-foto.jpg';

function App() {
  const texto = "guilhermeoliveiraadamotta@gmail.com";

  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          // imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          imagem = {MyFoto}
          nome="Guilherme" 
          descricao="Oi, eu sou o Guilherme. Sou estudante de programação. Adoro estudar programação, pois acho muito fascinante como ocorre o processo de criação de um software e também gosto do mundo da tecnologia."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div> 

      <div>
          <CardPequeno
          imagem="https://img.icons8.com/doodle/2x/newsletter.png"
          titulo="Email: "
          texto=" guilhermeoliveiraadamotta@gmail.com"
          />
      </div>

      <div>
          <CardPequeno
          imagem="https://img.icons8.com/fluency/2x/location-update.png"
          titulo="Endereço: "
          texto=" Rua Aureliano Barbosa Faria"
          />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          // imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          imagem="https://static.wixstatic.com/media/71860d_b7e7713a8b5e4b6c99e5a8f6b9f93467~mv2.jpg/v1/fit/w_2500,h_1330,al_c/71860d_b7e7713a8b5e4b6c99e5a8f6b9f93467~mv2.jpg"
          nome="Sinimbu" 
          descricao="Industria de fitas decorativas tradicional da minha cidade" 
        />
        
        <CardGrande 
          // imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-0-768x768.png" 
          imagem="https://static.wixstatic.com/media/71860d_b7e7713a8b5e4b6c99e5a8f6b9f93467~mv2.jpg/v1/fit/w_2500,h_1330,al_c/71860d_b7e7713a8b5e4b6c99e5a8f6b9f93467~mv2.jpg"
          nome="Senai" 
          descricao="Jovem aprendiz de tecelão" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
