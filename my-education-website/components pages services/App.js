import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/login" component={LoginPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
