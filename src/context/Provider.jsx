import PropTypes from 'prop-types';
import React, { useReducer } from 'react';
import Context from './Context';

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
    case 'get-user-email':
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

  const value = {
    updatedState,
  };

  return (
    <Context.Provider value={ value }>{children}</Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
