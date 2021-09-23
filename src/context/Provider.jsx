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
    case 'get-meals-token':
      return {
        ...state,
        mealsToken: payload,
      };
    case 'get-cocktails-token':
      return {
        ...state,
        cocktailsToken: payload,
      };
    case 'set-user-email':
      return {
        ...state,
        user: {
          email: payload,
        },
      };
    case 'add-done-recipe':
      return {
        ...state,
        // doneRecipes: ,
      };
    // adicionar outros cases
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

  const value = {
    updatedState,
    handleSubmitLogin,
  };

  return (
    <Context.Provider value={ value }>{children}</Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
