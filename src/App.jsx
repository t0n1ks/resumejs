import React from 'react';
import LeftSide from './components/LeftSide.jsx';
import RightSide from './components/RightSide.jsx';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter basename="/resumejs">
      <div className="container">
        <div className="left-column">
          <LeftSide />
        </div>
        <div className="right-column">
          <RightSide />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
