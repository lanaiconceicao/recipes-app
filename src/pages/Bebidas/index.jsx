import React, { useContext, useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useLocation } from 'react-router-dom';
import { Card, Footer, Header, Button } from '../../components';
import style from './Bebidas.module.css';
import Context from '../../context/Context';
import fetchCategories from '../../services/fetchCategories';
import fetchByCategories from '../../services/fetchByCategories';

const Bebidas = () => {
  const { appState:
    { recipes, search: { query, typeSearch } }, handleSearch } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(0);
  const [categories, setCategories] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const location = useLocation();

  const getUrlLocation = () => {
    if (location.pathname.includes('comida')) {
      return 'meal';
    } if (location.pathname.includes('bebida')) {
      return 'cocktail';
    }
  };

  useEffect(() => {
    const searchObj = { query, typeSearch, location };
    const updateCategories = async () => {
      const categoriesBtn = await fetchCategories(getUrlLocation());
      setCategories(categoriesBtn);
    };
    updateCategories();
    handleSearch(searchObj);
  }, []);

  const updateRecipes = async (globalRecipes) => {
    await setFilteredRecipes(globalRecipes);
  };

  useEffect(() => {
    updateRecipes(recipes);
  }, [recipes]);

  const filterByCategory = async (category) => {
    if (selectedCategory === category) {
      updateRecipes(recipes);
      setSelectedCategory('');
    } else {
      const APIResponse = await fetchByCategories(getUrlLocation(), category);
      setFilteredRecipes(APIResponse);
      setSelectedCategory(category);
    }
  };

  const renderCategories = (categoriesBtn) => (
    <section className={ style.categories }>
      {categoriesBtn.map((category, i) => (
        <Button
          name={ category }
          key={ i }
          dataTestId={ `${category}-category-filter` }
          onClick={ ({ target: { name } }) => filterByCategory(name) }
        >
          {category}
        </Button>
      ))}
      <Button
        dataTestId="All-category-filter"
        onClick={ () => updateRecipes(recipes) }
      >
        All
      </Button>
    </section>
  );

  const renderRecipes = (recipesArr) => {
    const PER_PAGE = 12;
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(recipesArr.length / PER_PAGE);
    return (
      <section className={ style.recipes }>
        {recipesArr
          .slice(offset, offset + PER_PAGE)
          .map((recipe, i) => (
            <Card
              key={ recipe.idDrink }
              index={ i }
              name={ recipe.strDrink }
              img={ recipe.strDrinkThumb }
              mealOrDrink="bebidas"
              id={ recipe.idDrink }
            />
          ))}
        <ReactPaginate
          containerClassName={ style.pages }
          previousLabel="Anterior"
          nextLabel="Proxima"
          breakLabel="..."
          pageCount={ pageCount }
          onPageChange={ handlePageClick }
        />
      </section>
    );
  };

  if (!recipes || !filteredRecipes) return <div>Carregando</div>;

  return (
    <section className={ style.section }>
      <Header title="Bebidas" displaySearchBtn />
      {categories && renderCategories(categories)}
      {filteredRecipes && renderRecipes(filteredRecipes)}
      <Footer />
    </section>
  );
};

export default Bebidas;
