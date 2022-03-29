import { Outlet } from 'react-router-dom';
import React from 'react';

import Directory from '../../components/directory/directory.component';

const Home = ()  => {
  return (
      <div>
          <Outlet />
          <Directory />
          
      </div>
    
  );

};

export default Home;
