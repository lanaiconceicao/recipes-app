import PropTypes from 'prop-types';
import React, { useReducer } from 'react';
import { useHistory } from 'react-router';
import Context from './Context';
import { saveLocalStorage } from '../services/localStorage';
import fetchAPI from '../services/fetchAPI';

const Provider = ({ children }) => {
  const history = useHistory();
  const initialState = {
    mealsToken: '',
    cocktailsToken: '',
    user: {
      email: '',
    },
    recipe: {},
    recipes: [],
    doneRecipes: [],
    favoriteRecipes: [],
    inProgressRecipes: [],
    recommendations: [],
    isLoading: true,
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
    case 'recommendations':
      return {
        ...state,
        recommendations: payload,
        isLoading: false,
      };
    case 'add-recipes':
      return {
        ...state,
        recipes: payload,
      };
    case 'recipe-detail':
      return {
        ...state,
        recipe: payload,
      };

    default:
      return state;
    }
  };

  const [appState, dispatch] = useReducer(reducerRecipes, initialState);

  const handleSubmitLogin = (e, email) => {
    e.preventDefault();
    saveLocalStorage('mealsToken', 1);
    saveLocalStorage('cocktailsToken', 1);
    saveLocalStorage('user', { email });
    dispatch({ type: 'set-user-email', payload: email });
    history.push('/comidas');
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

    if (data.length === 0) {
      global
        .alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }

    if (location.pathname.includes('comidas') && data.length === 1) {
      history.push(`/comidas/${data[0].idMeal}`);
    }
    if (location.pathname.includes('bebidas') && data.length === 1) {
      history.push(`/bebidas/${data[0].idDrink}`);
    }
  };

  const handleSearchById = async ({ location, id }) => {
    const data = await fetchAPI(
      location.pathname.includes('comidas')
        ? 'fetchMealById'
        : 'fetchCocktailById',
      id,
    );
    dispatch({ type: 'recipe-detail', payload: data[0] });
  };

  const handleRecommendations = async ({ location }) => {
    const data = await fetchAPI(
      location.pathname.includes('bebidas')
        ? 'fetchMealByName'
        : 'fetchCocktailByName',
      '',
    );
    dispatch({ type: 'recommendations', payload: data });
  };

  const value = {
    appState,
    handleSubmitLogin,
    handleSearch,
    handleSearchById,
    handleRecommendations,
  };

  return (
    <Context.Provider value={ value }>{children}</Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
