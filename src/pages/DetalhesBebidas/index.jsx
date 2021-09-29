import React, { useContext, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import {
  Button, HeaderRecipes,
  IngredientList, Instruction,
  Recommendations } from '../../components';
import Context from '../../context/Context';
// import style from './DetalhesBebidas.module.css';
const DetalhesBebidas = () => {
  const { id } = useParams();
  const location = useLocation();
  const {
    handleSearchById,
    handleRecommendations,
    handleRecipeStarted,
    appState: { recipe, recommendations, inProgressRecipes } } = useContext(Context);

  const [recipeStarted, setRecipeStarted] = useState(false);

  useEffect(() => {
    handleSearchById({ location, id });
    handleRecommendations({ location });
  }, []);

  useEffect(() => {
    const isInDoneRecipes = Object
      .keys(inProgressRecipes.cocktails).some((r) => r === recipe.idDrink);
    setRecipeStarted(isInDoneRecipes);
  }, [inProgressRecipes, recipe.idDrink]);

  if (Object.keys(recipe).length === 0) return (<div>Carregando...</div>);

  const filterIngredients = Object
    .entries(recipe)
    .filter((key) => key[0].includes('strIngredient') && key[1])
    .map((e) => e[1]);

  const filterMeasures = Object
    .entries(recipe)
    .filter((key) => key[0].includes('strMeasure') && key[1])
    .map((e) => e[1]);

  return (
    <article>
      <HeaderRecipes
        category={ `${recipe.strCategory} ${recipe.strAlcoholic}` }
        img={ recipe.strDrinkThumb }
        title={ recipe.strDrink }
      />
      <IngredientList
        isCheckbox={ false }
        ingredients={ filterIngredients }
        measures={ filterMeasures }
      />
      <Instruction instruction={ recipe.strInstructions } />
      <Recommendations recommendations={ recommendations } />
      <Button
        onClick={ () => {
          handleRecipeStarted({ recipe, path: location.pathname });
          setRecipeStarted(true);
        } }
        styleBtn={ { position: 'fixed',
          bottom: '0px',
          height: '20%' } }
        dataTestId="start-recipe-btn"
      >
        <Link to={ `/bebidas/${recipe.idDrink}/in-progress` }>
          {recipeStarted ? 'Continuar Receita' : 'Iniciar Receita'}
        </Link>
      </Button>
    </article>
  );
};

export default DetalhesBebidas;
