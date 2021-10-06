import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams, useHistory } from 'react-router';
import { Button, HeaderRecipes, IngredientList, Instruction } from '../../components';
import Context from '../../context/Context';
import { filterIngredients, filterMeasures } from './helpers';

const DetalhesComidasInProgress = () => {
  const {
    appState: { recipe, inProgressRecipes: { meals } },
    handleSearchById, handleProgressRecipe, handleDoneRecipe,
  } = useContext(Context);
  const { id } = useParams();
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    handleSearchById({ location, id });
  }, []);
  const [checkboxList, setCheckboxList] = useState({});
  const [recipeStillInProgress, setRecipeStillInProgress] = useState(true);

  useEffect(() => {
    const findRecipeIngredients = meals[id];
    if (!findRecipeIngredients || Object.keys(findRecipeIngredients).length === 0) {
      const state = filterIngredients(recipe).reduce((obj, ingredient) => ({
        ...obj,
        [ingredient]: false,
      }), {});
      return setCheckboxList(state);
    }
    setCheckboxList(findRecipeIngredients);
    const areAllDone = Object
      .values(findRecipeIngredients).every((ingredient) => ingredient);
    setRecipeStillInProgress(!areAllDone);
  }, [meals, id, recipe]);

  const handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const obj = {
      ...checkboxList,
      [target.name]: value,
    };
    setCheckboxList(obj);
    handleProgressRecipe({ id: recipe.idMeal, checkboxList: obj, type: 'comida' });
    const areAllDone = Object.values(obj).every((ingredient) => ingredient);
    setRecipeStillInProgress(!areAllDone);
  };

  return (
    <div>

      <HeaderRecipes
        category={ recipe.strCategory }
        img={ recipe.strMealThumb }
        title={ recipe.strMeal }
        url={ window.location.href.split('/i')[0] }
      />
      <Instruction instruction={ recipe.strInstructions } />

      <IngredientList
        isCheckbox
        ingredients={ filterIngredients(recipe) }
        measures={ filterMeasures(recipe) }
        checkboxIngredients={ { list: checkboxList, change: handleChange } }
      />

      <Button
        disabled={ recipeStillInProgress }
        dataTestId="finish-recipe-btn"
        onClick={ () => {
          handleDoneRecipe(recipe, 'comida');
          history.push('/receitas-feitas');
        } }
      >
        Finalizar receita
      </Button>
    </div>
  );
};

export default DetalhesComidasInProgress;
