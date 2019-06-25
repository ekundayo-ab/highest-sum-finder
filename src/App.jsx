import React, { useState } from 'react';

import Header from './components/Header';
import IntegersForm from './components/IntegersForm';
import SumDisplay from './components/SumDisplay';

import { useFormValidator, intReqdMessage } from './core/hooks';
import findHighestSum from './core/findHighestSum';
import { stripAndFilterIntegers } from './helpers';

function App() {
  const [integers, setIntegers] = useState('');
  const [integerError, setIntegerError] = useFormValidator(integers);
  const [highestSum, setHighestSum] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (!integers.length) {
      setIntegerError(intReqdMessage);
      return;
    }

    const sum = findHighestSum(stripAndFilterIntegers(integers));
    setHighestSum(sum);
  }

  const formProps = {
    integers,
    setIntegers,
    integerError,
    handleSubmit,
  };

  return (
    <React.Fragment>
      <Header />
      <IntegersForm {...formProps} />
      <SumDisplay highestSum={highestSum.toString()} />
    </React.Fragment>
  );
}

export default App;
