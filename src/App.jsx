import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Добавляем BrowserRouter
import LeftSide from './components/LeftSide.jsx';
import RightSide from './components/RightSide.jsx';

const App = () => {
  return (
    <BrowserRouter basename="/resumejs"> {/* Оборачиваем приложение в BrowserRouter */}
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
