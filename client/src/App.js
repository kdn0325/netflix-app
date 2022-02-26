import './App.scss';
import Home from "./pages/Home/Home";
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


function App() {
    const user = true;
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={user ? <Home/> : <Navigate replace to="/register"/>}/>
            <Route exact path="/register" element={!user ? <Register/> : <Navigate replace to="/"/>}/>
            <Route exact path="/login" element={!user ? <Login/> : <Navigate replace to="/"/>}/>
            {user && (
                <>
                  <Route path="/movies" element={<Home type="movie"/>}/>
                  <Route path="/series" element={<Home type="series"/>}/>
                  <Route path="/watch" element={<Watch/>}/>
                </>
                )
            }
        </Routes>
  </BrowserRouter>
  );
}

export default App;
