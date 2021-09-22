import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

const Footer = () => (
  <footer data-testid="footer" className="footer">
    <Button
      data-testid="drinks-bottom-btn"
      className="drink-icon"
    >
      <img scr={ drinkIcon } alt="drink icon" />
      <Link to="/bebidas" />
    </Button>

    <Button
      data-testid="explore-bottom-btn"
      className="explore-icon"
    >
      <img scr={ exploreIcon } alt="explore icon" />
      <Link to="/explore" />
    </Button>

    <Button
      data-testid="food-bottom-btn"
      className="food-icon"
    >
      <img src={ mealIcon } alt="food icon" /> 
      <Link to="/comidas" />
    </Button>
  </footer>
);
