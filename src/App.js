import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/Navbar';
import Projects from './components/Portfolio/Projects';
import Blog from './components/Blog/Blog';
import Users from './components/Users';
import Posts from './components/Posts';
import Portfolio from './components/Portfolio/Portfolio';
import Header from './components/Header';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='App'>
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
    }
}

export default App;
