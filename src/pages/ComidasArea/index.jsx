import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Footer, Header, Select, Card } from '../../components';

const ComidasArea = () => {
  const [areaMeals, setAreaMeals] = useState([]);
  const [selectedArea, setSelectedArea] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const fetchAreaFiltered = async (query) => {
    try {
      const r = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${query}`);
      const data = await r.json();
      return data.meals;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAreaUnfiltered = async () => {
    try {
      const r = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const data = await r.json();
      console.log(data.meals);
      return data.meals;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (selectedArea === '') {
      fetchAreaUnfiltered()
        .then((result) => setAreaMeals(result));
    } else {
      fetchAreaFiltered(selectedArea).then((result) => setAreaMeals(result));
    }
  }, [selectedArea]);

  useEffect(() => {
    fetchAreaUnfiltered()
      .then((result) => setAreaMeals(result));
  }, []);

  const handleChange = ({ target: { value } }) => {
    setSelectedArea(value);
  };

  const getCards = (meals) => {
    const PER_PAGE = 12;
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(meals.length / PER_PAGE);
    return (
      <>
        { meals
          .slice(offset, offset + PER_PAGE)
          .map((meal, i) => (
            <Card
              id={ meal.idMeal }
              img={ meal.strMealThumb }
              name={ meal.strMeal }
              key={ i }
              mealOrDrink="comidas"
              index={ i }
            />
          )) }
        <ReactPaginate
          previousLabel="Anterior"
          nextLabel="Proxima"
          breakLabel="..."
          pageCount={ pageCount }
          onPageChange={ handlePageClick }
        />
      </>);
  };
  if (!areaMeals) return <div>Carregando</div>;

  return (
    <>
      <Header title="Explorar Origem" displaySearchBtn />
      <Select onChange={ handleChange } />
      { getCards(areaMeals) }
      <Footer />
    </>
  );
};

export default ComidasArea;
