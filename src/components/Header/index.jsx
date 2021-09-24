import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import Input from '../Input';
import Context from '../../context/Context';

const Header = (props) => {
  const { title, displaySearchBtn } = props;
  const location = useLocation();
  const history = useHistory();
  const [search, setBySearch] = useState('');
  const [searchQuery, setBySearchQuery] = useState('');
  const { handleSearch } = useContext(Context);

  const redirectToProfile = () => {
    history.push('/perfil');
  };

  const getInfoFromSearch = () => {
    handleSearch({ query: search, typeSearch: searchQuery, location });
  };

  const [showSearchBar, setShowSearchBar] = useState(false);

  const searchBarButton = () => (
    <button type="button" onClick={ () => setShowSearchBar(!showSearchBar) }>
      <img data-testid="search-top-btn" src={ searchIcon } alt="search-icon" />
    </button>
  );

  const searchBar = () => (
    <section>
      {/* <Input name="search" /> */}
      <label htmlFor="search">
        Search
        <input
          onChange={ ({ target: { value } }) => setBySearch(value) }
          id="search"
          type="text"
          data-testid="search-input"
        />
      </label>
      <section onChange={ ({ target: { value } }) => setBySearchQuery(value) }>
        <input
          value="byIngredient"
          id="byIngredient"
          name="searchQuery"
          type="radio"
          data-testid="ingredient-search-radio"
        />
        <input
          value="byName"
          id="byName"
          type="radio"
          name="searchQuery"
          data-testid="name-search-radio"
        />
        <input
          value="byFirstLetter"
          id="byFirstLetter"
          type="radio"
          name="searchQuery"
          data-testid="first-letter-search-radio"
        />
      </section>

      <button
        onClick={ getInfoFromSearch }
        data-testid="exec-search-btn"
        type="button"
      >
        Buscar
      </button>
    </section>
  );
  // VOLTAR DAQUI

  return (
    <>
      <button type="button" onClick={ redirectToProfile }>
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profile-icon"
        />
      </button>
      <h1 data-testid="page-title">{title}</h1>
      {displaySearchBtn && searchBarButton()}
      {showSearchBar && searchBar()}
    </>
  );
};

Header.propTypes = {
  displaySearchBtn: PropTypes.bool,
  title: PropTypes.string,
}.isRequired;

export default Header;
