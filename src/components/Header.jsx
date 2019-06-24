import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>highest sum</h1>
      <h2>Generate the highest sum from an array of integers</h2>
    </div>
  );
}
