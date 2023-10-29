import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Facilidades from './components/Facilidades';
import ListaCategorias from './components/ListaCategorias';
import ListaProdutos from './components/ListaProtudos';
import Modal from './components/ModalProduto';
import Newsletter from './components/Newsletter';
import Rodape from './components/Rodape';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner'

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
     <Swiper/>



    </div>
  );
}

export default App;
