import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter
} from "react-router-dom";
import Register from './pages/Registro';
import Login from './pages/Login';
import Home from './pages/Home';
import { AuthContext } from './context/AuthContext';
import {useContext} from "react";

function App() {

  const {currentUser} = useContext(AuthContext);
  
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"></Navigate>
    }

    return children
  }
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
              <Routes>
                <Route path='/'>
                  <Route index element={
                      <ProtectedRoute>
                        <Home/>
                      </ProtectedRoute>
                  }></Route>
                  <Route path="register" element={<Register/>}></Route>
                  <Route path="login" element={<Login/>}></Route>
                </Route>
              </Routes>
        </BrowserRouter>
      
      </header>
    </div>
  );
}

export default App;
