import React, { useState } from 'react';
import Post from './components/Post/Post';
import './style.css'
import {Formulario, CaixaMensagem, TitutloDivisor} from './style';

function App() {

const [arrayPosts, setArrayPosts] = useState(
    [   {nomeUsuario:'paulinha', fotoUsuario:'https://picsum.photos/50/50', fotoPost:'https://picsum.photos/200/150'},
        {nomeUsuario:'Izabelle', fotoUsuario:'https://picsum.photos/60/50', fotoPost:'https://picsum.photos/150/150'},
        {nomeUsuario:'beatriz', fotoUsuario:'https://picsum.photos/70/50', fotoPost:'https://picsum.photos/100/100'},  ]
)

console.log(arrayPosts);

const [inputName, setInputName] = useState("");
const [inputFotoPost, setInputFotoPost] = useState("");
const [inputFotoUser, setInputFotoUser] = useState ("");

const handleInputName = (event) => {
  setInputName(event.target.value);
}
const handleInputFotoPost = (event) => {
  setInputFotoPost(event.target.value);
}
const handleInputFotoUser = (event) => {
  setInputFotoUser(event.target.value);
}



const adicionar = (event) => {
  event.preventDefault();
  const itensAtualizados = [...arrayPosts, {nomeUsuario:inputName , fotoUsuario: inputFotoUser, fotoPost:inputFotoPost}];
  setArrayPosts(itensAtualizados);
}

return(
  <div className='MainContainer'>  

          <TitutloDivisor>Aqui é referente a primeira parte de manipulação de arrays: </TitutloDivisor>
  {/* Aqui foi feito na primiera aula, na aula sobre estados */}
          
          <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
          <Post
          nomeUsuario={'Izabelle'}
          fotoUsuario={'https://picsum.photos/60/50'}
          fotoPost={'https://picsum.photos/150/150'}
          />
          <Post
            nomeUsuario={'beatriz'}
            fotoUsuario={'https://picsum.photos/70/50'} 
            fotoPost={'https://picsum.photos/100/100'}
          />
{/* termina aqui a primeira parte  */}
          <TitutloDivisor>Daqui para baixo é a parte que está totalmente atualizada: </TitutloDivisor>
          
      {/* mensagems de avisos que foram criadas juntamente com a parte abaixo delas, criado no dia 07/07 */}
          <CaixaMensagem>
            <p>Obs: Para funcionar corretamente tem que colocar um endereço absoluto das imagens, nos campos Foto Post e Foto usuário.</p>
            <p>Obs: endereço absoluto é aquele que é acompanhado pelo protocolo http, por exemplo, https://picsum.photos/150/250</p>
          </CaixaMensagem>

      {/* formulario serve para colocar mais uma pub. igual as outras.
        Para ele funcionar tive que criar varias funções que estão antes do return do compoenente App */}
          <Formulario>
                  <input type='text' required placeholder='Nome' onChange={handleInputName}  value={inputName}/>
                  <input type='text' value={inputFotoPost} placeholder='Foto Post' onChange={handleInputFotoPost}/>
                  <input type='text' placeholder='Foto usuário' value={inputFotoUser} onChange={handleInputFotoUser} />

                  <button onClick={adicionar}>Adicionar</button>
          </Formulario>

      {/* Não entendi muito como isso daqui fez funcionar, mas ele fez com atualizasse o meu array padrão e eu pude adicionar quantas pub. eu quisesse.  */}
        <div>
          {arrayPosts.map((item, index)=>{
          return <Post nomeUsuario={item.nomeUsuario} fotoPost={item.fotoPost} fotoUsuario={item.fotoUsuario} key={index}/>
          })}
        </div>
  </div>
)

}

export default App;
