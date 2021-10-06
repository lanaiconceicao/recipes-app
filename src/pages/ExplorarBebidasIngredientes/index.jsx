import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Footer, Header } from '../../components';
import fetchAPI from '../../services/fetchAPI';
import Context from '../../context/Context';
import style from './ExplorarBebidasIngredientes.module.css';

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

  if (!ingredientsList) return <div>Carregando</div>;

  return (
    <>
      <Header title="Explorar Ingredientes" displaySearchBtn={ false } />

      {ingredientsList && ingredientsList.slice(0, TWELVE)
        .map(({ strIngredient1: ingredient }, i) => (
          <article
            className={ style.article }
            key={ `${i}-${ingredient}` }
            data-testid={ `${i}-ingredient-card` }
          >
            <Link
              onClick={ () => handleSearch(
                { query: ingredient, typeSearch: 'byIngredient', location },
              ) }
              to="/bebidas"
            >
              <img
                alt={ `Foto do ingrediente ${ingredient}` }
                data-testid={ `${i}-card-img` }
                src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png` }
              />
              <p data-testid={ `${i}-card-name` }>
                {ingredient}
              </p>
            </Link>
          </article>
        ))}

      <Footer />
    </>
  );
};

export default ExplorarBebidasIngredientes;
