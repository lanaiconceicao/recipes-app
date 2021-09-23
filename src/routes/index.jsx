import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Bebidas,
  Comidas,
  ComidasArea,
  DetalhesBebidas,
  DetalhesBebidasInProgress,
  DetalhesComidas,
  DetalhesComidasInProgress,
  Explorar,
  ExplorarBebidas,
  ExplorarBebidasIngredientes,
  ExplorarComidas,
  ExplorarComidasIngredientes,
  Login,
  Profile,
  ReceitasFavoritas,
  ReceitasFeitas,
} from '../pages';

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={ Login }
    />
    <Route
      exact
      path="/bebidas"
      component={ Bebidas }
    />
    <Route
      exact
      path="/comidas"
      component={ Comidas }
    />
    <Route
      exact
      path="/explorar/comidas/area"
      component={ ComidasArea }
    />
    <Route
      exact
      path="/bebidas/:id/in-progress"
      component={ DetalhesBebidasInProgress }
    />
    <Route
      exact
      path="/comidas/:id/in-progress"
      component={ DetalhesComidasInProgress }
    />
    <Route
      exact
      path="/bebidas/:id"
      component={ DetalhesBebidas }
    />
    <Route
      exact
      path="/comidas/:id"
      component={ DetalhesComidas }
    />
    <Route
      exact
      path="/receitas-feitas"
      component={ ReceitasFeitas }
    />
    <Route
      exact
      path="/receitas-favoritas"
      component={ ReceitasFavoritas }
    />
    <Route
      exact
      path="/explorar"
      component={ Explorar }
    />
    <Route
      exact
      path="/explorar/bebidas"
      component={ ExplorarBebidas }
    />
    <Route
      exact
      path="/explorar/comidas"
      component={ ExplorarComidas }
    />
    <Route
      exact
      path="/explorar/bebidas/ingredientes"
      component={ ExplorarBebidasIngredientes }
    />
    <Route
      exact
      path="/explorar/comidas/ingredientes"
      component={ ExplorarComidasIngredientes }
    />
    <Route
      exact
      path="/perfil"
      component={ Profile }
    />
  </Switch>
);

export default Routes;
