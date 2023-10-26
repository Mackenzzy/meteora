import React from 'react';
import './App.css';
import Cabecalho from './components/Cabecalho';

import Facilidades from './components/Facilidades';
import ListaCategorias from './components/ListaCategorias';
import ListaProdutos from './components/ListaProtudos';
import Banner from './pages/Home/Banner';

function App() {
  return (
    <div className="App">
     <Cabecalho>  </Cabecalho>
     <Banner/>
     <ListaCategorias/>
     <ListaProdutos/>
     <Facilidades/>


    </div>
  );
}

export default App;
