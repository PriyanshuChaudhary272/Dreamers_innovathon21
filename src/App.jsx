import React from 'react'
import Home from './Pages/Home'
import Login from './Pages/login';
import Signup from './Pages/Signup';
import Navbar from './Components/Navbar';
import UploadCV from './Pages/UploadCV';
import Profile from './Pages/Profile';
import Footer from './Components/Footer';
import Recruit from './Pages/Recruit';
import UserList from './Pages/Userlist';
import Credential from './Pages/Credentials';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
// import { useState } from 'react/cjs/react.development';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/register">
                    <Signup />
                </Route>
                <Route exact path="/uploadCV">
                    <UploadCV />
                </Route>
                <Route exact path="/profile/:username">
                    <Profile />
                </Route>
                <Route exact path="/recruit">
                    <Recruit />
                </Route>
                <Route exact path="/startup">
                    <UserList />
                </Route>
                <Route exact path="/credential">
                    <Credential />
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