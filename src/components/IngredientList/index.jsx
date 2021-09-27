import PropTypes from 'prop-types';
import React from 'react';

const IngredientList = ({
  isCheckbox,
  ingredients,
  measures,
}) => (
  <div>
    <h3>Ingredients</h3>
    <ul>
      {ingredients.map((ingredient, i) => (
        !isCheckbox
          ? (
            <li
              data-testid={ `${i}-ingredient-name-and-measure` }
              key={ i }
            >
              {`- ${ingredient} - ${measures[i]}`}
            </li>)
          : (
            <li key={ i } data-testid={ `${i}-ingredient-name-and-measure` }>
              <input type="checkbox" value={ ingredient } />
              {ingredient}
            </li>)))}
    </ul>
  </div>
);

IngredientList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  isCheckbox: PropTypes.bool.isRequired,
};
export default IngredientList;
