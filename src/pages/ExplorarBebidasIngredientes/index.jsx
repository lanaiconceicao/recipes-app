import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Footer, Header } from '../../components';
import fetchAPI from '../../services/fetchAPI';
import Context from '../../context/Context';

const ExplorarBebidasIngredientes = () => {
  const TWELVE = 12;
  const { handleSearch } = useContext(Context);
  const [ingredientsList, setIngredientsList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchIngredients = async () => {
      const ingredients = await fetchAPI('fetchCocktailIngredientsByList', '');
      setIngredientsList(ingredients);
    };
    fetchIngredients();
  }, []);

  return (
    <>
      <Header title="Explorar Ingredientes" displaySearchBtn={ false } />

      {ingredientsList && ingredientsList.slice(0, TWELVE)
        .map((ingredient, i) => (
          <article key={ i } data-testid={ `${i}-ingredient-card` }>
            <Link
              onClick={ () => handleSearch(
                { query: ingredient.strIngredient, typeSearch: 'byIngredient', location },
              ) }
              to="/bebidas"
            >
              <img
                alt={ `Foto do ingrediente ${ingredient.strIngredient1}` }
                data-testid={ `${i}-card-img` }
                src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
              />
              <p data-testid={ `${i}-card-name` }>
                {ingredient.strIngredient1}
              </p>
            </Link>
          </article>
        ))}

      <Footer />
    </>
  );
};

export default ExplorarBebidasIngredientes;
