import React from 'react';
import { Header, Footer } from '../../components';
import style from './Comidas.module.css';

const Comidas = () => (
  <main className={ style.main }>
    <Header title="Comidas" displaySearchBtn />
    <Footer />
  </main>
);

export default Comidas;
