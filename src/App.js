import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import HomeUser from './pages/HomeUser/HomeUser';
import UserForm from './pages/UserForm/UserForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <Login/> }/>
        <Route exact path='/home' element={ <HomeUser/> }/>
        <Route exact path='/addUser' element={ <UserForm/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
