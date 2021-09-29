import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../context/Context';
import { Header, FilterRecipes, Share, Liked } from '../../components';

const ReceitasFavoritas = () => {
  const { appState: { favoriteRecipes } } = useContext(Context);
  const [selectedCategory, setSelectedCategory] = useState('');

  const filterByCategory = (category) => {
    setSelectedCategory(category);
  };

  const renderCards = (recipesArray) => (
    recipesArray
      .filter((recipe) => (recipe.type.includes(selectedCategory)))
      .map((recipe, index) => (
        <div key={ index } className="horizontal-card">
          <Link
            to={ recipe.type === 'comida'
              ? `/comidas/${recipe.id}`
              : `/bebidas/${recipe.id}` }
          >
            <img
              data-testid={ `${index}-horizontal-image` }
              src={ recipe.image }
              alt={ `receita ${index}` }
              style={ { width: '25%' } }
            />
            <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
          </Link>
          {/* { recipe.type === 'comida' && <p>{`${recipe.area} - ${recipe.category}`}</p> }
          { recipe.type === 'bebida' && <p>{recipe.alcoholicOrNot}</p> } */}
          <p data-testid={ `${index}-horizontal-top-text` }>
            {
              recipe.type === 'comida' ? `${recipe.area} - ${recipe.category}`
                : recipe.alcoholicOrNot
            }
          </p>

          <Share
            type={ recipe.type }
            id={ recipe.id }
            dataTestId={ `${index}-horizontal-share-btn` }
            destinationUrl={
              window.location.href.split(window.location.pathname)[0]
              + (recipe.type === 'comida'
                ? `/comidas/${recipe.id}`
                : `/bebidas/${recipe.id}`)
            }
          />

          <Liked recipe={ recipe } dataTestId={ `${index}-horizontal-favorite-btn` } />
          {/* Aguardando implementação da lógica de like */}
        </div>
      ))
  );

  return (
    <>
      <Header title="Receitas Favoritas" displaySearchBtn={ false } />
      <FilterRecipes onClick={ ({ target: { name } }) => filterByCategory(name) } />
      { renderCards(favoriteRecipes) }
    </>
  );
};

export default ReceitasFavoritas;
