import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router';
import { HeaderRecipes, IngredientList } from '../../components';

const DetalhesComidas = () => {
  const { id } = useParams();
  const location = useLocation();
  // const { handleSearchById, appState: { recipe } } = useContext(Context);

  useEffect(() => {
    handleSearchById({ id, location });
  }, [handleSearchById, id, location]);

  return (
    <>
      <HeaderRecipes />
      Detalhes Comidas
      <IngredientList />
    </>
  );
};

export default DetalhesComidas;
