import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import Input from '../Input';
import Button from '../Button';
import Context from '../../context/Context';
import style from './Header.module.css';

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
    <section className={ style.searchBar }>
      <div
        className={ style.background }
        onClickCapture={ () => setShowSearchBar(!showSearchBar) }
      />
      <Input
        dataTestId="search-input"
        name="search"
        onChange={ ({ target: { value } }) => setBySearch(value) }
        value={ search }
      />
      <section
        className={ style.options }
        onChange={ ({ target: { value } }) => setBySearchQuery(value) }
      >
        <Input
          value="byIngredient"
          name="searchQuery"
          type="radio"
          dataTestId="ingredient-search-radio"
          label="Buscar por ingrediente"
        />
        <Input
          value="byName"
          type="radio"
          name="searchQuery"
          dataTestId="name-search-radio"
          label="Buscar pelo nome"
        />
        <Input
          value="byFirstLetter"
          type="radio"
          name="searchQuery"
          dataTestId="first-letter-search-radio"
          label="Buscar por letra"
        />
      </section>

      <Button
        onClick={ getInfoFromSearch }
        dataTestId="exec-search-btn"
      >
        Buscar
      </Button>
    </section>
  );
  // VOLTAR DAQUI

  return (
    <header className={ style.header }>
      <Button onClick={ redirectToProfile }>
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profile-icon"
        />
      </Button>
      <h1 data-testid="page-title">{title}</h1>
      {displaySearchBtn && searchBarButton()}
      {showSearchBar && searchBar()}
    </header>
  );
};

Header.propTypes = {
  displaySearchBtn: PropTypes.bool,
  title: PropTypes.string,
}.isRequired;

export default Header;
