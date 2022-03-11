import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import AuthLayout from './layout/AuthLayout'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Confirm from './pages/Confirm';
import MissingPassword from './pages/MissingPassword';

const App = ():JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route index element={<Login />}/> 
          <Route path='signup' element={<SignUp />} />
          <Route path='confirm/:token' element={<Confirm />} />
          <Route path='password-reset' element={<MissingPassword/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;