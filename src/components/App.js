import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import NavBar from './Navbar'
import Projects from './Projects'
import Blog from './Blog/Blog'
import axios from 'axios'

const api = 'http://localhost:3001/'

class App extends React.Component {

    state = {
        users: []
    }
    
    componentDidMount() {
        axios.get(api+'users')
        .then((response) => {
            this.setState({ users: response.data })
        })
    }

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
					<div>
                        FOOTER
                        { this.state.users.map((user) => <p>{ user.name }: {user.email}</p>) }
					</div>
				</div>
            </Router>
        )
    }
}

export default App