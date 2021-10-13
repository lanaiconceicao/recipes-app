import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';

const Card = ({ index, img, name, mealOrDrink, id }) => (
  <Link className={ style.card } to={ `/${mealOrDrink}/${id}` }>
    <article className={ style.article } data-testid={ `${index}-recipe-card` }>
      <h3 data-testid={ `${index}-card-name` }>
        {name}
      </h3>
      <img
        className={ style.recipePhoto }
        data-testid={ `${index}-card-img` }
        src={ img }
        alt={ `Foto referente a receita de ${name}` }
      />

    </article>
  </Link>
);

const { number, string } = PropTypes;

Card.propTypes = {
  img: string.isRequired,
  index: number.isRequired,
  name: string.isRequired,
  mealOrDrink: string.isRequired,
  id: string.isRequired,
};

export default Card;
