import React from 'react';
import styles from './SumDisplay.module.scss';

export default function SumDisplay() {
  return (
    <div className={styles.sumDisplay}>
      <h3>Highest Sum</h3>
      <p><span role="img" aria-label="thinking">🤔</span></p>
    </div>
  );
}
