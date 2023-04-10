import './App.css';
import Header from './sections/Header';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Footer from './sections/Footer';
import { useState } from 'react';


function App() {


  const [modal, setModal] = useState(false)



  return (
    <div className='bg'>
      
      <Header modal={modal} setModal={setModal} ></Header>
      <Home modal={modal} setModal={setModal} />
      <Projects></Projects>
      <Footer/>
    </div>
  );
}

export default App;
