import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../context/Context';
import { Header, FilterRecipes, Share } from '../../components';

const ReceitasFeitas = () => {
  const { appState: { doneRecipes } } = useContext(Context);
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
            />
            <p data-testid={ `${index}-horizontal-top-name` }>{recipe.name}</p>
          </Link>
          { recipe.type === 'comida' && <p>{recipe.area}</p> }
          { recipe.type === 'bebida' && <p>{recipe.alcoholicOrNot}</p> }
          <p data-testid={ `${index}-horizontal-top-text` }>{recipe.category}</p>
          <p data-testid={ `${index}-horizontal-done-date` }>
            Feita em:
            {recipe.doneDate}
          </p>
          { recipe.type === 'comida' && recipe.tags.map((tagName) => (
            <p
              data-testid={ `${index}-${tagName}-horizontal-tag` }
              key={ tagName }
            >
              {tagName}
            </p>
          ))}

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
        </div>
      ))
  );

  return (
    <>
      <Header title="Receitas Feitas" displaySearchBtn={ false } />
      <FilterRecipes onClick={ ({ target: { name } }) => filterByCategory(name) } />
      { renderCards(doneRecipes) }
    </>
  );
};

export default ReceitasFeitas;
