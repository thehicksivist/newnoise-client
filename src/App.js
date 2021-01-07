import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About';
import Music from './components/Music';
import Miniatures from './components/Miniatures';
import Portfolio from './components/Portfolio/Portfolio';
import Header from './components/Header';
import Navbar from './components/Menu/Navbar';
import Burger from './components/Menu/Burger';
import Menu from './components/Menu/Menu';
import { useOnClickOutside } from './hooks';
import './styles/global.css';

const App = () => {
    const [open, setOpen] = useState(false);

    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    return (
        <Router>
            <div className='App'>
                <div>
                    <Header />
                </div>
                <div ref={node} className='hideburger'>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} />
                </div>
                <div className='hidebar'>
                    <Navbar />
                </div>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/music' component={Music} />
                <Route exact path='/miniatures' component={Miniatures} />
                <Route exact path='/portfolio' component={Portfolio} />
                <div>FOOTER</div>
            </div>
        </Router>
    );
};

export default App;
