import React from 'react'
import Home from './Pages/Home'
import Login from './Pages/login';
import Signup from './Pages/Signup';
import Navbar from './Components/Navbar';
import UploadCV from './Pages/UploadCV';
import Profile from './Pages/Profile';
import Footer from './Components/Footer';
import Recruit from './Pages/Recruit';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { useState } from 'react/cjs/react.development';

function App() {
    const [login, setLogin] = useState(false);
    function handleLogin(){
        setLogin(true);
    }
    function handlelogin(){
        setLogin(!login);
    }
    return (
        <Router>
            <Navbar login = {login?"true":"false"} />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/Login">
                    <Login />
                </Route>
                <Route exact path="/Signup">
                    <Signup />
                </Route>
                <Route exact path="/UploadCV">
                    <UploadCV />
                </Route>
                <Route exact path="/Profile">
                    <Profile />
                </Route>
                <Route exact path="/Recruit">
                    <Recruit />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}
export default App;