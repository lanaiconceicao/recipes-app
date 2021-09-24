import PropTypes from 'prop-types';
import React from 'react';

const IngredientList = ({
  isCheckbox,
  ingredients,
}) => (
  <div>
    <h3>Ingredients</h3>
    <ul>
      {ingredients.map((ingredient, i) => (
        !isCheckbox
          ? (<li key={ i }>{`- ${ingredient}`}</li>)
          : (
            <li key={ i }>
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
