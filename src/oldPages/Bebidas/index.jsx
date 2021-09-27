import React, { useContext, useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useLocation } from 'react-router-dom';
import { Card, Footer, Header, Button } from '../../components';
import Context from '../../context/Context';
import style from './Bebidas.module.css';
import fetchCategories from '../../services/fetchCategories';

// LINK https://ihsavru.medium.com/react-paginate-implementing-pagination-in-react-f199625a5c8e
const Bebidas = () => {
  const { appState: { recipes }, handleSearch } = useContext(Context);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const location = useLocation();

  useEffect(() => {
    const searchObj = { query: '', typeSearch: 'byName', location };
    handleSearch(searchObj);
  }, []);

  useEffect(() => {
    const getUrlLocation = () => {
      if (location.pathname.includes('comida')) {
        return 'meal';
      } if (location.pathname.includes('bebida')) {
        return 'cocktail';
      }
    };
    const updateCategories = async () => {
      const categoriesBtn = await fetchCategories(getUrlLocation());
      setCategories(categoriesBtn);
    };
    updateCategories();
  }, []);

  useEffect(() => {
    const updateRecipes = async (globalRecipes) => {
      await setFilteredRecipes(globalRecipes);
    };
    updateRecipes(recipes);
  }, [recipes]);

  const filterByCategory = (category) => {
    setFilteredRecipes(recipes.filter((recipe) => recipe.strCategory.includes(category)));
  };

  const renderCategories = (categoriesBtn) => (
    categoriesBtn.map((category, i) => (
      <Button
        name={ category }
        key={ i }
        dataTestId={ `${category}-category-filter` }
        onClick={ ({ target: { name } }) => filterByCategory(name) }
      >
        {category}
      </Button>
    ))
  );

  const renderRecipes = (recipesArr) => {
    const PER_PAGE = 12;
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(recipes.length / PER_PAGE);
    return (
      <>
        {recipesArr
          .slice(offset, offset + PER_PAGE)
          .map((recipe, i) => (
            <Card
              key={ i }
              index={ i }
              name={ recipe.strDrink }
              img={ recipe.strDrinkThumb }
            />
          ))}
        <ReactPaginate
          previousLabel="Anterior"
          nextLabel="Proxima"
          breakLabel="..."
          pageCount={ pageCount }
          onPageChange={ handlePageClick }
        />
      </>
    );
  };

  return (
    <main className={ style.main }>
      <Header title="Bebidas" displaySearchBtn />
      {categories && renderCategories(categories)}
      <Button
        onClick={ () => filterByCategory('') }
      >
        All
      </Button>
      {filteredRecipes && renderRecipes(filteredRecipes)}
      <Footer />
    </main>
  );
};

export default Bebidas;
