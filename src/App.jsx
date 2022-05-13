import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Canvas from './Canvas';
import Insights from './components/Insights';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Websites from './components/Websites';
import NothingFound from './components/NothingFound';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className='spacer'></div>
      <div className='app-body'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/nothingfound" element={<NothingFound />} />
        </Routes>
      </div>
      <Footer />
      <Canvas />
    </div>
  </Router>  
  )
}

export default App;
