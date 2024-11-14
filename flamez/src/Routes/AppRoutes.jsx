import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home, Recipie, RecipieDetails} from '../Pages/Index';

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="recipie" Component={Recipie } />
          <Route path="recipie/:id" Component={RecipieDetails} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes