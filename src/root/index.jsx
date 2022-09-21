import React from 'react';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';

export const Root = () => {
  return <BrowserRouter>
  <Routes>
    <Route path='/home' element={<h1>Home</h1>} />
    <Route path='/properties' element={<h1>Properties</h1>} />
    <Route path='*' element={<h1>404 not found</h1>} />
    <Route path='/' element={<Navigate to={'/home'} />} />




  </Routes>
  </BrowserRouter>
    
  
}


export default Root;