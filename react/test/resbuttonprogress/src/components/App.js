import React from 'react';
import Buy from '../container/Buy';
import Progress from '../container/Progress'

function App() {
  return (
    <div className="App">
      <Buy></Buy>
      <Progress disableDrag={true}></Progress>
    </div>
  );
}

export default App;
