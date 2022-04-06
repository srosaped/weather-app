import React, { useState } from 'react';
import './App.css';
import './components/Login/login.css';

import Header from './components/Header/Header';
import LoginBtn from './components/Login/LoginBtn';
import LogoutBtn from './components/Login/LogoutBtn';
import Profile from './components/Profile/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import Weather from './components/Weather/Weather';

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
  
    <div className="w-container">
      <div className='login-wrapper'>
        <Profile />  
        <LogoutBtn />
      </div>
        <LoginBtn />
        <Header />
        <Weather />
    </div>
  );
}

export default App;
