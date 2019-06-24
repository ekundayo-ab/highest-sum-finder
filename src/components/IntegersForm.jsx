import React from 'react';
import styles from './IntegersForm.module.scss';

export default function IntegersForm() {
  return (
    <form className={styles.form}>
      <div className={styles.formControl}>
        <label htmlFor="integers">
          * Enter comma separated integers - integer numbers can be negative
          positive or zero (e.g 1, 2 -9, 0, 320)
        </label>
        <input type="text" name="integers" placeholder="Enter integers here..." id="integers" />
      </div>

      <button type="button" className="btn">Generate Sum</button>
    </form>
  );
}
