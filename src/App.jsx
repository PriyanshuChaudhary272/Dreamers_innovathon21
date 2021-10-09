import React from 'react'
import Home from './Pages/Home'
import Login from './Pages/login';
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
                <Route path="/Login">
                    <Login />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}
export default App;