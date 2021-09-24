import React, { useContext, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router';
import { HeaderRecipes, IngredientList } from '../../components';
import Context from '../../context/Context';

const DetalhesBebidas = () => {
  const { id } = useParams();
  const location = useLocation();
  const { handleSearchById } = useContext(Context);
  const [stateRecipe, setRecipe] = useState({});

  useEffect(() => {
    const data = handleSearchById({ location, id });
    data.then((d) => setRecipe(d[0]));
  }, [handleSearchById, location, id]);

  const filterIngredients = Object
    .entries(stateRecipe)
    .filter((key) => key[0].includes('strIngredient') && key[1])
    .map((e) => e[1]);

  return (
    <article>
      <HeaderRecipes
        category={ stateRecipe.strCategory }
        img={ stateRecipe.strDrinkThumb }
        title={ stateRecipe.strDrink }
      />
      <IngredientList
        isCheckbox={ false }
        ingredients={ filterIngredients }
      />
      {JSON.stringify(stateRecipe)}
    </article>
  );
};

export default DetalhesBebidas;
