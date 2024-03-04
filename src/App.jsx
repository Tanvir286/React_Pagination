import React from 'react';
import Shop from './component/Shop';
import NavBar from './component/NavBar';
import Header from './component/Header';

const App = () => {
  return (
    <div>
      <Header/> 
       <NavBar/>
      <Shop/>
    </div>
  );
};

export default App;