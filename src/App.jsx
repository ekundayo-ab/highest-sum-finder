import React from 'react';

import Header from './components/Header';
import IntegersForm from './components/IntegersForm';
import SumDisplay from './components/SumDisplay';

function App() {
  return (
    <React.Fragment>
      <Header />
      <IntegersForm />
      <SumDisplay />
    </React.Fragment>
  );
}

export default App;
