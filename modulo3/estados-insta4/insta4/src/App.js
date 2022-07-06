import React from 'react';
import Post from './components/Post/Post';
import './style.css'
import {TitutloDivisor} from './style';

function App() {

// Essa parte tambem é relativa a aula sobre listas: 
const arrayPosts = [  
  {nomeUsuario:'paulinha', fotoUsuario:'https://picsum.photos/50/50', fotoPost:'https://picsum.photos/200/150'},
  {nomeUsuario:'Izabelle', fotoUsuario:'https://picsum.photos/60/50', fotoPost:'https://picsum.photos/150/150'},
  {nomeUsuario:'beatriz', fotoUsuario:'https://picsum.photos/70/50', fotoPost:'https://picsum.photos/100/100'},
]
  
// Isso daqui eu estava testando umas coisinhas:

const mapeaPosts = arrayPosts.map((item,index)=>{
    console.log(item);
    return(
      <ul key={index}>
          <li>nomeUsuario = {item.nomeUsuario}</li>
          <li>fotoUsuario = {item.fotoUsuario}</li>
          <li>fotoPost = {item.fotoPost}</li>
      </ul>
    )
});

// Termina aqui a parte de js da aula sobre listas(04.07)

return(
  <div className='MainContainer'>  
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
{/* Aqui começa a parte da aual sobre listas: */}
          {/* <h3>Atividade da aula sobre como renderizar um array</h3> */}
          <TitutloDivisor>Atividade da aula sobre como renderizar uma lista:</TitutloDivisor>

          <div>
            {arrayPosts.map((item, index)=>{
              return <Post nomeUsuario={item.nomeUsuario} fotoPost={item.fotoPost} fotoUsuario={item.fotoUsuario} key={index}/>
            })}
          </div>

            {/* <div>
                {mapeaPosts}
            </div> */}
  </div>
)

}


export default App;
