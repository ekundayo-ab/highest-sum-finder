import React from 'react';
import PropTypes from 'prop-types';

import styles from './IntegersForm.module.scss';

export default function IntegersForm(props) {
  const {
    integers,
    setIntegers,
    handleSubmit,
    integerError,
  } = props;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={`${styles.formControl} ${integerError && styles.formError}`}>
        <label htmlFor="integers">
          * Enter comma separated integers - integer numbers can be negative
          positive or zero (e.g 1, 2 -9, 0, 320)
        </label>
        <input
          type="text"
          name="integers"
          placeholder="Enter integers here..."
          id="integers"
          value={integers}
          onChange={event => setIntegers(event.target.value)}
        />
        {integerError && <span>{integerError}</span>}
      </div>

      <button type="submit" className="btn">Generate Sum</button>
    </form>
  );
}

IntegersForm.propTypes = {
  integers: PropTypes.string.isRequired,
  setIntegers: PropTypes.func.isRequired,
  integerError: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
