import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import style from './Footer.module.css';

const Footer = () => (
  <footer data-testid="footer" className={ style.footer }>
    <Button
      className={ style.drinkIcon }
    >
      <Link to="/bebidas">
        <img data-testid="drinks-bottom-btn" src={ drinkIcon } alt="drink icon" />
      </Link>
    </Button>

    <Button
      className={ style.exploreIcon }
    >
      <Link to="/explorar">
        <img data-testid="explore-bottom-btn" src={ exploreIcon } alt="explore icon" />
      </Link>
    </Button>

    <Button
      className={ style.foodIcon }
    >
      <Link to="/comidas">
        <img data-testid="food-bottom-btn" src={ mealIcon } alt="food icon" />
      </Link>
    </Button>
  </footer>
);

export default Footer;
