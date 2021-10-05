import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Header, Footer } from '../../components';
import fetchRandomRecipe from '../../services/fetchRandomRecipe';

const ExplorarBebidas = () => {
  const location = useLocation();

  const urlLocation = location.pathname.includes('comidas')
    ? 'comidas'
    : 'bebidas';

  const mealOrDrink = urlLocation === 'comidas' ? 'meal' : 'cocktail';

  const [randomUrl, setRandomUrl] = useState('');

  useEffect(() => {
    const getRandomRecipe = async () => {
      const randomRecipe = await fetchRandomRecipe(mealOrDrink);
      setRandomUrl(
        `/${urlLocation}/${randomRecipe[0].idMeal || randomRecipe[0].idDrink}`,
      );
    };
    getRandomRecipe();
  }, [mealOrDrink, urlLocation]);

  return (
    <>
      <Header title="Explorar Bebidas" displaySearchBtn={ false } />
      <Link to={ `/explorar/${urlLocation}/ingredientes` }>
        <button
          type="button"
          data-testId="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>
      {urlLocation === 'comidas' && (
        <Link to={ `/explorar/${urlLocation}/area` }>
          <button type="button" data-testId="explore-by-area">
            Por Local de Origem
          </button>
        </Link>
      )}
      <Link to={ randomUrl }>
        <button
          type="button"
          data-testId="explore-surprise"
        >
          Me Surpreenda!
        </button>
      </Link>
      <Footer />
    </>);
};

export default ExplorarBebidas;
