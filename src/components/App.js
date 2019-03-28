import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import NavBar from './Navbar'
import Projects from './Projects'
import Blog from './Blog/Blog'
import Users from './Users'
import Posts from './Posts'

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="App">
					<div>
                        <NavBar/>
					</div>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/posts" component={Posts} />
                        <Route exact path="/users" component={Users} />
					<div>
                        FOOTER
					</div>
				</div>
            </Router>
        )
    }
}

export default App