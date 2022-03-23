import React from 'react';
import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom'

import Home from './routes/home/homepage.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';



const Shop = () => {
  return <h1>Shop Page</h1>;
};

const App = ()  => {
   return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/auth' element={<Authentication />} />
      </Route>
    </Routes>
   )
};

export default App;
