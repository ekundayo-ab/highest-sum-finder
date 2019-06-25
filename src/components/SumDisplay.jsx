import React from 'react';
import PropTypes from 'prop-types';

import styles from './SumDisplay.module.scss';

export default function SumDisplay({ highestSum }) {
  return (
    <div className={styles.sumDisplay}>
      <h3>Highest Sum</h3>
      <p>
        <span role="img" aria-label="thinking">
          { highestSum === '' ? '🤔' : highestSum }
        </span>
      </p>
    </div>
  );
}

SumDisplay.propTypes = {
  highestSum: PropTypes.string.isRequired,
};
