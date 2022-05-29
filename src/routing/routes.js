import React from 'react';

import Dashboard from '../pages/Dashboard';
import Contact from '../pages/Contact';
import Contact1 from '../pages/Contact1';

import { Routes, Route } from 'react-router-dom';

const routes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/contact/*' element={<Contact />}>
        <Route path='me' element={<Contact1 />} />
      </Route>
      {/* <Route path='/404' /> */}
      <Route
        path='*'
        // element={<Navigate to='/404' element={<Page404 />} replace />}
      />
    </Routes>
  );
};
export default routes;
