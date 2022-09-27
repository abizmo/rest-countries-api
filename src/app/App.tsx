import React from 'react';

import Home from './pages/Home';

import './App.css';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { Country } from './country/components/Country/Country';

const App = (): JSX.Element => {
  return (
    <>
      <header>where in the world?</header>
      <main>
        <Router>
          <Routes>
            <Route path='/'>
              <Route index element={<Home />} />
              <Route path='country/:code' element={<Country />} />
            </Route>
          </Routes>
        </Router>
      </main>
      <footer>footer</footer>
    </>
  );
};

export default App;
