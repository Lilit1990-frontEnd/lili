import  React, { useState } from 'react';
import 'normalize.css';
import "./style/header.module.css";
import  "./style/nav.module.css"
import Header1 from "./components/Header1";
import Navbar from "./components/Nav";

function App() { 
  return (
    <div className="App">
      <div className="wrapper">
       <Navbar/>
        <Header1/>
        
      </div>
    </div>
  );
}

export default App;
