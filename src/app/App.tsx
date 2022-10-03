import React from 'react';

import Home from './pages/Home';

import './App.css';
import { Route, HashRouter, Routes } from 'react-router-dom';
import { Country } from './country/components/Country/Country';

const App = (): JSX.Element => {
  return (
    <>
      <header>where in the world?</header>
      <main>
        <HashRouter>
          <Routes>
            <Route path='/country/:code' element={<Country />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </HashRouter>
      </main>
      <footer>footer</footer>
    </>
  );
};

export default App;
