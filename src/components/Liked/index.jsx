import React from 'react';
import Button from '../Button';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
// import blackHeartIcon from '../../images/blackHeartIcon.svg';

const Liked = () => (
  <Button>
    <img
      data-testid="favorite-btn"
      src={ whiteHeartIcon }
      alt="unfavorited icon"
    />
  </Button>
);

export default Liked;
