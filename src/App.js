import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/Navbar';
import Projects from './components/Portfolio/Projects';
import Blog from './components/Blog/Blog';
import Users from './components/Users';
import Posts from './components/Posts';
import Portfolio from './components/Portfolio/Portfolio';
import Header from './components/Header';
import Burger from './components/Menu/Burger';
import Menu from './components/Menu/Menu';
import { useOnClickOutside } from './hooks';

const App = () => {
    const [open, setOpen] = useState(false);

    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    return (
        <Router>
            <div className='App'>
                <div ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} />
                </div>
                <div>
                    <Header />
                </div>
                <div>
                    <NavBar />
                </div>
                <Route exact path='/' component={Home} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/posts' component={Posts} />
                <Route exact path='/portfolio' component={Portfolio} />
                <Route exact path='/users' component={Users} />
                <div>FOOTER</div>
            </div>
        </Router>
    );
};

export default App;
