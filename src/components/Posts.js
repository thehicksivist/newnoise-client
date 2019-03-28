import React from 'react'
import axios from 'axios'

const api = 'http://localhost:3001/posts'

class Posts extends React.Component {

    state = {
        posts: [],
        newPost: ''
      }
    
      componentDidMount() {
        axios.get(api)
        .then((response) => {
          this.setState({ posts: response.data })
        })
      }

      changeNewPost = (event) => {
        this.setState({ newPost: event.target.value })
      }

      createNewPost = (event) => {
        event.preventDefault()
        axios.post(api, { post: this.state.newPost })
        .then((response) => {
          const posts = [...this.state.posts, response.data]
          this.setState({ posts, newPost: '' })
        })
      }

      render(){
          return(
              <div>
                <div>
                <form onSubmit={this.createNewPost}>
                <label>New Post:</label>
                <input value={ this.state.newPost } onChange={ this.changeNewPost } />
                </form>
                </div>
                   { this.state.posts.map((post) => <p>{ post.title }, { post.image }, { post.text }</p>) }
              </div>
          )
      }
}

export default Posts