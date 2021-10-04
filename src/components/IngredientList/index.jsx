import PropTypes from 'prop-types';
import React from 'react';

const IngredientList = ({
  isCheckbox,
  ingredients,
  checkboxIngredients: { list, change },
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
            <li
              style={ Object.values(list)[i]
                ? { textDecoration: 'line-through' }
                : { textDecoration: 'none' } }
              key={ i }
              data-testid={ `${i}-ingredient-step` }
            >
              <input
                type="checkbox"
                value={ Object.values(list)[i] }
                name={ Object.keys(list)[i] }
                checked={ Object.values(list)[i] }
                onClick={ change }
              />
              {ingredient}
            </li>)))}
    </ul>
  </div>
);
IngredientList.defaultProps = {
  checkboxIngredients: PropTypes.shape({
    list: [],
    change: null,
  }),
};

IngredientList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  measures: PropTypes.arrayOf(PropTypes.string).isRequired,
  isCheckbox: PropTypes.bool.isRequired,
  checkboxIngredients: PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.object),
    change: PropTypes.func,
  }),
};
export default IngredientList;
