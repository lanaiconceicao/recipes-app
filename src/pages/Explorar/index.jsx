import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer, Button } from '../../components';

const Explorar = () => (
  <>
    <Header title="Explorar" displaySearchBtn={ false } />
    <Link to="/explorar/comidas">
      <Button dataTestId="explore-food">
        Explorar Comidas
      </Button>
    </Link>
    <Link to="/explorar/bebidas">
      <Button dataTestId="explore-drinks">
        Explorar Bebidas
      </Button>
    </Link>
    <Footer />
  </>
);

export default Explorar;
