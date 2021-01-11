import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Music from './components/Music';
import Miniatures from './components/Miniatures';
import Contact from './components/Contact';
import Header from './components/Header';
import Navbar from './components/Menu/Navbar';
import Burger from './components/Menu/Burger';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer';
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
                <div ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                </div>
                <Menu open={open} setOpen={setOpen} />
                <div className='hidebar'>
                    <Navbar />
                </div>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/music' component={Music} />
                <Route exact path='/miniatures' component={Miniatures} />
                <Route exact path='/contact' component={Contact} />
                <Footer />
            </div>
        </Router>
    );
};

export default App;
