import React from 'react';
import Navbar from './component/navbar';
import HeroSection from './component/HeroSection';
import './style/app.css';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection
          title='PROTECT YOUR MONEY SECURELY WITH US.'
          subtitle='Keep your company cashflow better and grow the business would be better integral systems.'
          buttonText='PROTECT MY MONEY'
          trustText='The most trusted system in the global world'
        />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
