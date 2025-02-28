
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import 'react-toastify/ReactToastify.css'
import { useState } from 'react';
import Refresher from './Refresher';

function App() {
  const [isAuthenticate, setIsAuthenticate] = useState(false)
  const PrivateRoute = ({element}) =>{
    return isAuthenticate ? element : <Navigate to={'/login'}/>
  }
  return (
    <div className="App">
      <Refresher setIsAuthenticate={setIsAuthenticate}/>
      <Routes>
        <Route path='/' element={<Navigate to={"/login"}/>}/>                    
        <Route path='/login' element={ <Login/>}/>
        <Route path='/signup' element={ <Signup/>}/>
        <Route path='/home' element={ <PrivateRoute element ={<Home/>}/>}/>
      </Routes>
    </div>
  );
}

export default App;
