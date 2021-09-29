import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { Button, HeaderRecipes, IngredientList, Instruction } from '../../components';
import Context from '../../context/Context';

const DetalhesBebidasInProgress = () => {
  const { appState: { recipe }, handleSearchById, handleProgressRecipe } = useContext(Context);
  const { id } = useParams();
  const location = useLocation();
  useEffect(() => {
    handleSearchById({ location, id });
  }, []);
  const [checkboxList, setCheckboxList] = useState({});

  const filterIngredients = Object
    .entries(recipe)
    .filter((key) => key[0].includes('strIngredient') && key[1])
    .map((e) => e[1]);

  useEffect(() => {
    const state = filterIngredients.reduce((obj, ingredient) => ({
      ...obj,
      [ingredient]: false,
    }), {});
    setCheckboxList(state);
  }, [recipe]);

  const filterMeasures = Object
    .entries(recipe)
    .filter((key) => key[0].includes('strMeasure') && key[1])
    .map((e) => e[1]);

  const handleChange = ({ target: { name, value } }) => {
    setCheckboxList({
      ...checkboxList,
      [name]: !JSON.parse(value),
    });
  };
  return (
    <div>
      <HeaderRecipes
        category={ recipe.strCategory }
        img={ recipe.strDrinkThumb }
        title={ recipe.strDrink }
      />

      <Instruction instruction={ recipe.strInstructions } />

      <IngredientList
        isCheckbox
        ingredients={ filterIngredients }
        measures={ filterMeasures }
        checkboxIngredients={ { list: checkboxList, change: handleChange } }
      />
      <Button dataTestId="finish-recipe-btn">
        Finalizar receita
      </Button>
    </div>
  );
};

export default DetalhesBebidasInProgress;
