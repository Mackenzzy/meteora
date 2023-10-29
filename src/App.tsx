import React from 'react';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Facilidades from './components/Facilidades';
import ListaCategorias from './components/ListaCategorias';
import ListaProdutos from './components/ListaProtudos';
import Newsletter from './components/Newsletter';
import Rodape from './components/Rodape';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner'
import ModalNewsletter from './components/ModalNewsletter';

function App() {

  return (
    <div className="App">
     <Cabecalho>  </Cabecalho>
     <Banner/>

     <ListaCategorias/>
     <ListaProdutos/>
     <Facilidades/>
     <Newsletter/>
     <Rodape />
     <ModalNewsletter/>


    </div>
  );
}

export default App;
