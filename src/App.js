// import logo from './logo.svg';
// import { Switch } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';

import Header from './Header';
import Home from './Home';

import Checkout from './Checkout/Checkout';

function App() {
    return (
        <app className="App">
            <Router>
                {/* menu bar */}
                <Header/>

                {/* content page */}
                <Switch>
                    {/* checkout page ↓ */}
                    <Route path='/checkout'>
                        <Checkout/>
                    </Route>
                    {/* checkout page ↑ */}

                    {/* default target ↓ */}
                    <Route path='/'>
                        {/* home page */}
                        <Home/>
                    </Route>
                    {/* default target　↑ */}
                </Switch>
            </Router>
        </app>
    );
}

export default App;
