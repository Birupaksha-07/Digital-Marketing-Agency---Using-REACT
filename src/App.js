
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Project from './pages/Project';




function App() {
  return (
    <>
    <Router>
      <Routes>
        

        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/project' element={<Project/>}/>


      </Routes>
    </Router>
    </>
  );
}

export default App;
