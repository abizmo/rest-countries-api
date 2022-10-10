import React from 'react';
import { Route, HashRouter, Routes } from 'react-router-dom';

import { Country } from './country/components/Country/Country';
import Home from './pages/Home';

import './App.css';
import { Header } from './shared/components';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <HashRouter>
          <Routes>
            <Route path='/country/:countryCode' element={<Country />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </HashRouter>
      </main>
      <footer>footer</footer>
    </>
  );
};

export default App;
