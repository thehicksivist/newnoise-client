import React from 'react'
import axios from 'axios'

const api = 'http://localhost:3001/users'

class Users extends React.Component {

    state = {
        users: []
      }
    
      componentDidMount() {
        axios.get(api)
        .then((response) => {
          this.setState({ users: response.data })
        })
      }

      render(){
          return(
              <div>
                   { this.state.users.map((user) => <p>{ user.name }, {user.email}</p>) }
              </div>
          )
      }
}

export default Users