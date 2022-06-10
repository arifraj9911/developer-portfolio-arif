import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import {
  Routes,
  Route,
} from "react-router-dom"
import About from './components/About';
import Portfolio from './components/Portfolio';
import ProjectsOverview from './components/ProjectsOverview';
import Footer from './components/Footer';
import Skill from './components/Skill';
import Blogs from './components/Blogs';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/skill' element={<Skill></Skill>}></Route>
      <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
      <Route path='/projects' element={<ProjectsOverview></ProjectsOverview>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
     </Routes>
     <Footer></Footer>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
