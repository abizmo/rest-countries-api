import React from 'react';

import Home from './pages/Home';

import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Country } from './country/components/Country/Country';

const App = (): JSX.Element => {
  return (
    <>
      <header>where in the world?</header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route
              path='/rest-countries-api/country/:code'
              element={<Country />}
            />
            <Route path='/rest-countries-api' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer>footer</footer>
    </>
  );
};

export default App;
