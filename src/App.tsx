import React from 'react';
import './App.css';
import Cabecalho from './components/Cabecalho';
import ListaCategorias from './components/ListaCategorias';
import Banner from './pages/Home/Banner';

function App() {
  return (
    <div className="App">
     <Cabecalho>  </Cabecalho>
     <Banner/>
     <ListaCategorias/>
    </div>
  );
}

export default App;
