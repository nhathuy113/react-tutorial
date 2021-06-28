// import logo from './logo.svg';
// import { Switch } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';

import Header from './Header';
import Home from './Home';

function App() {
    return (
        <Router>
            <app className="App">
                <Switch>
                    {/* checkout page ↓ */}
                    <Route path='/checkout'>
                        {/* menu bar */}
                        <Header/>
                        <div>
                            <p>give me 1000$</p>
                        </div>
                    </Route>
                    {/* checkout page ↑ */}

                    {/* default target ↓ */}
                    <Route path='/'>
                        {/* menu bar */}
                        <Header/>
                        {/* home page */}
                        <Home/>
                    </Route>
                    {/* default target　↑ */}
                </Switch>
                
            </app>
        </Router>
    );
}

export default App;
