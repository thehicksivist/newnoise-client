import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Music from './components/Music';
import Miniatures from './components/Miniatures';
import Contact from './components/Contact';
import Header from './components/Header';
import Burger from './components/Menu/Burger';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer';
import { useOnClickOutside } from './hooks';
import './styles/global.css';
import ScrollToTop from './components/BitsNbobs/ScollToTop';

const App = () => {
    const [open, setOpen] = useState(false);
    const [showArrow, setShowArrow] = useState(false);

    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    window.onscroll = function () {
        console.log('offset:', window.scrollY);

        if (window.pageYOffset > 400 && showArrow !== true) {
            console.log(true);
            setShowArrow(true);
        }
        if (window.pageYOffset < 400 && showArrow !== false) {
            console.log(false);
            setShowArrow(false);
        }
    };

    return (
        <Router>
            <ScrollToTop />
            <div className='App'>
                <Header />
                <div ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                </div>
                <Menu open={open} setOpen={setOpen} />
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/music' component={Music} />
                <Route exact path='/miniatures' component={Miniatures} />
                <Route exact path='/contact' component={Contact} />
                <Footer key={window.location.pathname} />
                {showArrow === true && (
                    <p className='arrowcont'>
                        <i
                            className='arrow'
                            onClick={() =>
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                            }
                        ></i>
                    </p>
                )}
            </div>
        </Router>
    );
};

export default App;
