import React, { useState } from 'react';
import copy from 'clipboard-copy';
import Button from '../Button';
import shareIcon from '../../images/shareIcon.svg';

const Share = () => {
  const [showCopied, setShowCopied] = useState(false);
  return (
    <Button
      onClick={ () => copy(window.location.href).then(() => {
        setShowCopied(true);
      }) }
    >
      <img
        data-testid="share-btn"
        src={ shareIcon }
        alt="share icon"
      />
      {showCopied && 'Link copiado!'}
    </Button>
  );
};

export default Share;
