import React, { useState } from 'react';
import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import Button from '../Button';
import shareIcon from '../../images/shareIcon.svg';

const Share = ({ dataTestId, destinationUrl }) => {
  const [showCopied, setShowCopied] = useState(false);
  return (
    <Button
      dataTestId={ dataTestId }
      onClick={ () => copy(destinationUrl).then(() => {
        setShowCopied(true);
      }) }
    >
      <img
        // data-testid={ dataTestId }
        src={ shareIcon }
        alt="share icon"
      />
      {showCopied && 'Link copiado!'}
    </Button>
  );
};

Share.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  destinationUrl: PropTypes.string.isRequired,
};

export default Share;
