import React, { useContext, useEffect } from 'react';
import { useParams, useLocation } from 'react-router';
import ReactPlayer from 'react-player/youtube';
import { Button, HeaderRecipes, IngredientList, Instruction, Recommendations } from '../../components';
import Context from '../../context/Context';
import style from './DetalhesComidas.module.css';

const DetalhesComidas = () => {
  const { id } = useParams();
  const location = useLocation();
  const { handleSearchById, handleRecommendations, appState: { recipe, recommendations } } = useContext(Context);

  useEffect(() => {
    handleSearchById({ location, id });
    handleRecommendations({ location });
  }, []);

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
        category={ recipe.strCategory }
        img={ recipe.strMealThumb }
        title={ recipe.strMeal }
      />
      <IngredientList
        isCheckbox={ false }
        ingredients={ filterIngredients }
        measures={ filterMeasures }
      />
      <Instruction instruction={ recipe.strInstructions } />
      <div data-testid="video" className={ style.playerWrapper }>
        <ReactPlayer
          className={ style.reactPlayer }
          url={ recipe.strYoutube }
          width="100%"
          height="100%"
        />
      </div>
      <Recommendations recommendations={ recommendations } />
      <Button
        styleBtn={ { position: 'fixed',
          bottom: '0px',
          height: '20%' } }
        dataTestId="start-recipe-btn"
      >
        Iniciar receita
      </Button>
    </article>
  );
};

export default DetalhesComidas;
