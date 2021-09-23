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
    history.push('/profile');
  };

  const [showSearchBar, setShowSearchBar] = useState(false);

  const searchBarButton = () => (
    <button
      type="button"
      data-testid="search-top-btn"
      onClick={ () => setShowSearchBar(!showSearchBar) }
    >
      <img src={ searchIcon } alt="search-icon" />
    </button>
  );

  const searchBar = () => <Input />;
  // VOLTAR DAQUI

  return (
    <>
      <button type="button" data-testid="profile-top-btn" onClick={ redirectToProfile }>
        <img src={ profileIcon } alt="profile-icon" />
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
