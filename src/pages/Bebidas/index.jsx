import React, { useContext, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Card, Footer, Header } from '../../components';
import Context from '../../context/Context';
import style from './Bebidas.module.css';
// LINK https://ihsavru.medium.com/react-paginate-implementing-pagination-in-react-f199625a5c8e
const Bebidas = () => {
  const { appState: { recipes } } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const renderRecipes = () => {
    const PER_PAGE = 12;
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(recipes.length / PER_PAGE);
    return (
      <>
        {recipes
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
      {recipes && renderRecipes()}
      <Footer />
    </main>
  );
};

export default Bebidas;
