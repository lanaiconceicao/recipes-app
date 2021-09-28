import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Context from '../../context/Context';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import Button from '../Button';

const Liked = () => {
  const { handleFavorites, appState: { recipe, favoriteRecipes } } = useContext(Context);

  const { pathname } = useLocation();

  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const verifyId = pathname.includes('comidas') ? recipe.idMeal : recipe.idDrink;
    const verifyFavorite = favoriteRecipes.some((favorite) => favorite.id === verifyId);
    setIsFavorite(verifyFavorite);
  }, [recipe, favoriteRecipes, pathname]);

  if (!recipe) return (<div>Carregando...</div>);

  return (
    <Button onClick={ () => handleFavorites({ recipe, path: pathname }) }>
      <img
        data-testid="favorite-btn"
        src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
        alt={ isFavorite ? 'Favoritado' : 'Não favoritado' }
      />
    </Button>
  );
};

export default Liked;
