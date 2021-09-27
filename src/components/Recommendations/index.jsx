import React from 'react';
import { useLocation } from 'react-router';
import Carousel from 'react-multi-carousel';

const Recommendations = ({ recommendations }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const SIX = 6;
  const location = useLocation();
  const verifyPath = location.pathname.includes('bebidas');
  return (
    <div>
      Recomendacoes
      <Carousel
        responsive={ responsive }
      >
        {recommendations.slice(0, SIX)
          .map((recipe, i) => (
            <article key={ i } data-testid={ `${i}-recomendation-card` }>
              <img
                src={ verifyPath ? recipe.strMealThumb : recipe.strDrinkThumb }
                alt={ `Foto referente a receita de ${
                  verifyPath ? recipe.strMeal : recipe.strDrink}` }
              />
              <p data-testid={ `${i}-recomendation-title` }>
                {verifyPath ? recipe.strMeal : recipe.strDrink}
              </p>
            </article>
          ))}
      </Carousel>
    </div>
  );
};

export default Recommendations;
