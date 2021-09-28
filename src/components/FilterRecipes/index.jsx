import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const FilterRecipes = ({ onClick }) => (
  <>
    <Button
      dataTestId="filter-by-all-btn"
      onClick={ onClick }
      name=""
    >
      All
    </Button>
    <Button
      dataTestId="filter-by-food-btn"
      onClick={ onClick }
      name="meal"
    >
      Food
    </Button>
    <Button
      dataTestId="filter-by-drink-btn"
      onClick={ onClick }
      name="drink"
    >
      Drinks
    </Button>
  </>
);

FilterRecipes.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FilterRecipes;
