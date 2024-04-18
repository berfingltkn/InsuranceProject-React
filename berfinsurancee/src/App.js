import {  Router } from '@mui/icons-material';
import './App.css';
import Search from './components/Search';
import bootstrap from "bootstrap";
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Insurance from './components/Insurance';


function App() {
  return (
    <div className='app'>

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/insurance" exact element={<Insurance />} />
        
      </Routes>

    </div>
  );
}

export default App;
