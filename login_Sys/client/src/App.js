import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Nav from './Components/Nav';


function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      < Route path='/login' element={<Login />}  />
    </Routes>
    </>
  );
}

export default App;
