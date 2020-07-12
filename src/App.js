import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Footer from './components/Footer';
import Skills from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
