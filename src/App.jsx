import React from 'react';
import LeftSide from './components/LeftSide.jsx';
import RightSide from './components/RightSide.jsx';

const App = () => {
  return (
    <div className="container">
      <div className="left-column">
        <LeftSide />
      </div>
      <div className="right-column">
        <RightSide />
      </div>
    </div>
  );
};

export default App;
