import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Header from './Header';
import Form from './NavigationForm/Form';
import DispData from './NavigationForm/DispData';
import Routerpractice from './Routerpractise/Routerpractice';
import Display from './Routerpractise/Display';

function App() {
  return (
    <BrowserRouter>
    <Header no={151} />
    <Routes>
    <Route exact path='/' element={<Home />}/>
      <Route path='/contact/:no' element={<Contact />} />
      <Route path='/about/:id' element={<About />} />
      <Route path='/form' element={<Form />} />
      <Route  path='/DispData' element={<DispData />}/>
      <Route  path='/RouterPractice' element={<Routerpractice />}/>
      <Route  path='/Display' element={<Display />}/>


      
      </Routes>
    </BrowserRouter>

  );
}

export default App;
