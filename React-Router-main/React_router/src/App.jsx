import React from 'react' ;
import Home from './Components/Home' ;
import Header from './Components/Header' ;
import About from './Components/About' ;
import Contact from './Components/Contact' ;
import Services from './Components/Services' ; 
import { Routes, Route} from 'react-router-dom' ;


const App = () => {
  return (
   <div className='App'>
    <Header />
    <Routes>
    <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/services' element={< Services />}/>
    </Routes>
   </div>   
  )
}

export default App
