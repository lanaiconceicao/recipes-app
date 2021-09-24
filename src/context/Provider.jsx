import PropTypes from 'prop-types';
import React, { useReducer } from 'react';
import Context from './Context';
import { saveLocalStorage } from '../services/localStorage';

const Provider = ({ children }) => {
  const initialState = {
    mealsToken: '',
    cocktailsToken: '',
    user: {
      email: '',
    },
    doneRecipes: [],
    favoriteRecipes: [],
    inProgressRecipes: [],
  };

  const reducerRecipes = (state, { type, payload }) => {
    switch (type) {
    case 'set-user-email':
      return {
        ...state,
        user: {
          email: payload,
        },
      };
    case 'add-recipes':
      return {
        ...state,
        recipes: payload,
      };
    case 'add-done-recipe':
      return {
        ...state,

      };

    default:
      return state;
    }
  };

  const [updatedState, dispatch] = useReducer(reducerRecipes, initialState);

  const handleSubmitLogin = (email) => {
    saveLocalStorage('mealsToken', 1);
    saveLocalStorage('cocktailsToken', 1);
    saveLocalStorage('user', { email });
    dispatch({ type: 'set-user-email', payload: email });
  };

  const handleSearch = async ({ query, typeSearch, location }) => {
    const verifySearchMeal = {
      byIngredient: 'fetchMealByIngredient',
      byName: 'fetchMealByName',
      byFirstLetter: 'fetchMealByFirstLetter',
    };

    const verifySearchCocktail = {
      byIngredient: 'fetchCocktailByIngredient',
      byName: 'fetchCocktailByName',
      byFirstLetter: 'fetchCocktailByFirstLetter',
    };

    const data = await fetchAPI(
      location.pathname.includes('comidas')
        ? verifySearchMeal[typeSearch]
        : verifySearchCocktail[typeSearch],
      query,
    );
    dispatch({ type: 'add-recipes', payload: data });
  };

  const value = {
    updatedState,
    handleSubmitLogin,
    handleSearch,
  };

  return (
    <Context.Provider value={ value }>{children}</Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
