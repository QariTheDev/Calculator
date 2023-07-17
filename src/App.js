import './App.css';
import React from 'react';
import Container from './components/container';
import Footer from './components/footer';
import Navbar from './components/navbar';

function App() {

  return (
    <>
      <Navbar title="DigiCalc" />
      <Container title="Calculator" />
      <Footer title="Qari Sahab" />
    </>
  );
}

export default App;
