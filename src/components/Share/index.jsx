import React from 'react';
import Button from '../Button';
import shareIcon from '../../images/shareIcon.svg';

const Share = () => (
  <Button>
    <img
      data-testid="profile-share-btn"
      src={ shareIcon }
      alt="share icon"
    />
  </Button>
);

export default Share;
