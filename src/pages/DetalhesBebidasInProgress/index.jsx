import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { Button, HeaderRecipes, IngredientList, Instruction } from '../../components';
import Context from '../../context/Context';
import { filterIngredients, filterMeasures } from './helpers';

const DetalhesBebidasInProgress = () => {
  const {
    appState: { recipe, inProgressRecipes: { cocktails } },
    handleSearchById, handleProgressRecipe,
  } = useContext(Context);
  const { id } = useParams();
  const location = useLocation();
  useEffect(() => {
    handleSearchById({ location, id });
  }, []);
  const [checkboxList, setCheckboxList] = useState({});

  useEffect(() => {
    const findRecipeIngredients = cocktails[id];
    if (!findRecipeIngredients) {
      const state = filterIngredients(recipe).reduce((obj, ingredient) => ({
        ...obj,
        [ingredient]: false,
      }), {});
      return setCheckboxList(state);
    }
    setCheckboxList(findRecipeIngredients);
  }, [recipe, cocktails, id]);

  const handleChange = ({ target: { name, value } }) => {
    const obj = {
      ...checkboxList,
      [name]: !JSON.parse(value),
    };
    setCheckboxList(obj);
    handleProgressRecipe({ id: recipe.idDrink, checkboxList: obj, type: 'bebida' });
  };

  return (
    <div>
      <HeaderRecipes
        category={ recipe.strCategory }
        img={ recipe.strDrinkThumb }
        title={ recipe.strDrink }
        url={ window.location.href.split('/i')[0] }
      />

      <Instruction instruction={ recipe.strInstructions } />

      <IngredientList
        isCheckbox
        ingredients={ filterIngredients(recipe) }
        measures={ filterMeasures(recipe) }
        checkboxIngredients={ { list: checkboxList, change: handleChange } }
      />
      <Button dataTestId="finish-recipe-btn">
        Finalizar receita
      </Button>
    </div>
  );
};

export default DetalhesBebidasInProgress;
