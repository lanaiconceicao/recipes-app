import { useLocation } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import { Footer, Header, Select, Card } from '../../components';
import Context from '../../context/Context';

const ComidasArea = () => {
  const { appState: { recipes }, handleSearch } = useContext(Context);
  const [areaMeals, setAreaMeals] = useState([]);
  const [selectedArea, setSelectedArea] = useState('');

  const fetchAreaFiltered = async (query) => {
    try {
      const r = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${query}`);
      const data = await r.json();
      return data.meals;
    } catch (error) {
      console.error(error);
    }
  };

  const location = useLocation();

  // Falta fazer o resto da lógica de aparecer todas as receitas quando a pág começa no All
  useEffect(() => {
    if (selectedArea === '') {
      handleSearch({ query: selectedArea, typeSearch: 'byName', location });
      setAreaMeals(recipes);
    } else {
      fetchAreaFiltered(selectedArea).then((result) => setAreaMeals(result));
    }
  }, [selectedArea]);

  const handleChange = ({ target: { value } }) => {
    setSelectedArea(value);
  };

  const getCard = (cards) => (
    cards.map((item, i) => (
      <Card
        id={ item.idMeal }
        img={ item.strMealThumb }
        name={ item.strMeal }
        key={ i }
        mealOrDrink="comidas"
        index={ i }
      />
    ))
  );

  return (
    <>
      <Header title="Explorar Origem" displaySearchBtn />
      <Select onChange={ handleChange } />
      {/* PARAMOS AQUI: Falta fazer a lógica do Card */}
      { getCard(areaMeals || [])}
      <Footer />
    </>
  );
};

export default ComidasArea;
