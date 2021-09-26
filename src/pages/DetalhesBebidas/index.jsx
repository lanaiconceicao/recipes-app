import React, { useContext, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router';
import { HeaderRecipes, IngredientList } from '../../components';
import Context from '../../context/Context';

const DetalhesBebidas = () => {
  const { id } = useParams();
  const location = useLocation();
  const { handleSearchById, appState: { recipe } } = useContext(Context);

  useEffect(() => {
    handleSearchById({ location, id });
  }, [handleSearchById, location, id, recipe]);

  if (Object.keys(recipe).length === 0) return (<div>Carregando...</div>);

  const filterIngredients = Object
    .entries(recipe)
    .filter((key) => key[0].includes('strIngredient') && key[1])
    .map((e) => e[1]);

  return (
    <article>
      <HeaderRecipes
        category={ recipe.strCategory }
        img={ recipe.strDrinkThumb }
        title={ recipe.strDrink }
      />
      <IngredientList
        isCheckbox={ false }
        ingredients={ filterIngredients }
      />
      {JSON.stringify(recipe)}
    </article>
  );
};

export default DetalhesBebidas;
