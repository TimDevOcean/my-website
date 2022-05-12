import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import ComponentSection from './components/ComponentSection';
import Canvas from './Canvas';


function App() {
  return (
    <div className="App">
      <Header />
      <IntroSection />
      <ComponentSection />
      <Footer />
      <Canvas />
    </div>
  );
}

export default App;
