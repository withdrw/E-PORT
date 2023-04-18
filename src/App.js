import './App.css';
import Header from './sections/Header';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Footer from './sections/Footer';
import { useRef, useState } from 'react';


function App() {



  const [modal, setModal] = useState(false)

  const sendEmail = useRef()

const [isHover, setIsHovering] = useState(false)

  return (
    <div className='bg'>
      
      <Header modal={modal} setModal={setModal}  ></Header>
      <Home modal={modal} setModal={setModal} sendEmail={sendEmail}    />
      <Projects isHover={isHover} setIsHovering={setIsHovering} />
      <Footer/>
    </div>
  );
}

export default App;
