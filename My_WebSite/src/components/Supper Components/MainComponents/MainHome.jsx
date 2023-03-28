import React from 'react'
import Header from '../../Bata Components/Header/Header';
import Home from '../../Bata Components/Home_Section/Home';
import Email from '../../Bata Components/My_email/email';
import './MainHome.scss'

function MainHome() {
  return (
    <div className="main-home">
      <Header />
      <Home />
      <Email />
    </div>
  );
}

export default MainHome