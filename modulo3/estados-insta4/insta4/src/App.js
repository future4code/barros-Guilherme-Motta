import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
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
  </div>
)

}


export default App;
