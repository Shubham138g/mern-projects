import './App.css';
import Home from './Screens/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Screens/Login';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from './Screens/Signup';
import { CardProvider } from './Components/ContextReducer';
import MyOrder from './Screens/MyOrder';

function App() {
  return (
    <>
      <CardProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/createuser' element={<Signup />} />
            <Route path='/myorder' element={<MyOrder />} />
          </Routes>

        </BrowserRouter>
      </CardProvider>

    </>
  );
}

export default App;
