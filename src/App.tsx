import React from 'react';
import DataComponent from './components/DataComponent';
import ErrorComponent from './components/ErrorComponent';
import LoadingComponent from './components/LoadingComponent';

const App: React.FC = () => {
  return (
    <div>
      <h1>useJsonFetch Demo</h1>
      <h2>Data Component</h2>
      <DataComponent />
      <h2>Error Component</h2>
      <ErrorComponent />
      <h2>Loading Component</h2>
      <LoadingComponent />
    </div>
  );
};

export default App;
