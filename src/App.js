
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './components/Home';


import About from './components/About';
function App() {
  return (
    <>
   <Route exact path="/home" element={ <Home/>}/>
    </>
  );
}

export default App;
