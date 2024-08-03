
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

import Foter from './Components/Footer';


function App() {
  

  return (
   <>
   <Router>
  <Navbar/>
 
  <Routes>
  
  <Route path='/' element={<Home/>}></Route>
  <Route path='/contactus' element={<Contact/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/services' element={<Services/>}></Route>
  <Route path='/projects' element={<Projects/>}></Route>
  <Route path='/skills' element={<Skills/>}></Route>
    
  
</Routes>
  
  <Foter/>
  </Router>
   </>
  )
}

export default App
