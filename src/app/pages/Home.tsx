import React from 'react';
import { Outlet } from 'react-router-dom';

// import { Countries } from '../country/components/Countries/Countries';

const Home = (): JSX.Element => (
  <>
    <div>search & filter</div>
    <Outlet />
    {/* <Countries /> */}
  </>
);

export default Home;
