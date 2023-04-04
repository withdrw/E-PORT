import './App.css';
import Header from './sections/Header';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Footer from './sections/Footer';
import { useState } from 'react';

function App() {

  const [setModal, showModal] = useState('false')
  





  return (
    <>
      <Header></Header>
      <Home/>
      <Projects></Projects>
      <Footer/>
    </>
  );
}

export default App;
