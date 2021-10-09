import React from 'react'
import Home from './Pages/Home'
import Login from './Pages/login';
import Signup from './Pages/Signup';
import Navbar from './Components/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
function App() {
    return (
        <Router>
            <Navbar className = "navigation-links" />
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
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}
export default App;