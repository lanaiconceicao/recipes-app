import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, HeaderRecipes, IngredientList, Instruction } from '../../components';
import Context from '../../context/Context';
import { filterIngredients, filterMeasures } from './helpers';

const DetalhesComidasInProgress = () => {
  const {
    appState: { recipe, inProgressRecipes: { meals } },
    handleSearchById, handleProgressRecipe,
  } = useContext(Context);
  const { id } = useParams();
  const location = useLocation();
  useEffect(() => {
    handleSearchById({ location, id });
  }, []);
  const [checkboxList, setCheckboxList] = useState({});
  const [recipeStillInProgress, setRecipeStillInProgress] = useState(true);

  useEffect(() => {
    const findRecipeIngredients = meals[id];
    if (!findRecipeIngredients) {
      const state = filterIngredients(recipe).reduce((obj, ingredient) => ({
        ...obj,
        [ingredient]: false,
      }), {});
      return setCheckboxList(state);
    }
    setCheckboxList(findRecipeIngredients);
  }, [recipe, meals, id]);

  const handleChange = ({ target: { name, value } }) => {
    const obj = {
      ...checkboxList,
      [name]: !JSON.parse(value),
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

      <Button disabled={ recipeStillInProgress } dataTestId="finish-recipe-btn">
        <Link to="/receitas-feitas">
          Finalizar receita
        </Link>
      </Button>
    </div>
  );
};

export default DetalhesComidasInProgress;
