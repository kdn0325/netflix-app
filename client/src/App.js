import './App.scss';
import Home from "./pages/Home/Home";
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { Switch, Redirect, Route, BrowserRouter as Router,} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './AuthContext/AuthContext';


function App() {
    // const {user} = useContext(AuthContext);
    const user = true
  return (
  <Router>
        <Switch>
            <Route exact path="/"> {user ? <Home/> : <Redirect to="/register"/>}</Route>
            <Route path="/register">{!user ? <Register/> : <Redirect to="/"/>}</Route>
            <Route path="/login">{!user ? <Login/> : <Redirect to="/"/>}</Route>
            {user && (
                <>
                  <Route path="/movies"><Home type="movie"/></Route>
                  <Route path="/series"><Home type="series"/></Route>
                  <Route path="/watch"><Watch/></Route>
                </>
                )
            }
        </Switch>
  </Router>
  );
}

export default App;
