import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import Input from '../Input';

const Header = (props) => {
  const { title, displaySearchBtn } = props;

  const history = useHistory();
  const redirectToProfile = () => {
    history.push('/perfil');
  };

  const [showSearchBar, setShowSearchBar] = useState(false);

  const searchBarButton = () => (
    <button
      type="button"
      onClick={ () => setShowSearchBar(!showSearchBar) }
    >
      <img data-testid="search-top-btn" src={ searchIcon } alt="search-icon" />
    </button>
  );

  const searchBar = () => <Input name="search" />;
  // VOLTAR DAQUI

  return (
    <>
      <button type="button" onClick={ redirectToProfile }>
        <img data-testid="profile-top-btn" src={ profileIcon } alt="profile-icon" />
      </button>
      <h1 data-testid="page-title">{title}</h1>
      { displaySearchBtn && searchBarButton() }
      { showSearchBar && searchBar() }
    </>
  );
};

Header.propTypes = {
  displaySearchBtn: PropTypes.bool,
  title: PropTypes.string,
}.isRequired;

export default Header;
