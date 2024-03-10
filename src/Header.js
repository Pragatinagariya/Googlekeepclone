import React from 'react';
import logo from "./images/logo.png";

const Header = () => {
  return (
    <>
      {/* <h1>header</h1> */}
      <div className="header">
      <img src={logo} alt="logo" width='70' height="60"/>
      <h1>Pragati Keep</h1>
      </div>
    </>
  );
};

export default Header
