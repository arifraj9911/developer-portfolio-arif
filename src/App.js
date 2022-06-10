import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Home></Home>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
