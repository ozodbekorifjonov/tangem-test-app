import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';

const CustomRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
    </Routes>
  );
};

export default CustomRoutes;
