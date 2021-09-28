import PropTypes from 'prop-types';
import React from 'react';
import Liked from '../Liked';
import Share from '../Share';

const HeaderRecipes = ({
  category,
  img,
  title,
}) => (
  <section>
    <img data-testid="recipe-photo" src={ img } alt={ `Imagem do ${title}` } />
    <h2 data-testid="recipe-title">{title}</h2>
    <h3 data-testid="recipe-category">{category}</h3>
    <Liked />
    <Share destinationUrl={ window.location.href } />
  </section>
);

const { string } = PropTypes;

HeaderRecipes.propTypes = {
  category: string.isRequired,
  img: string.isRequired,
  title: string.isRequired,
};

/*
A foto deve possuir o atributo data-testid="recipe-photo";
O título deve possuir o atributo data-testid="recipe-title";
O texto da categoria deve possuir o atributo data-testid="recipe-category";
    */

export default HeaderRecipes;
