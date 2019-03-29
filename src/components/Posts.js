import React from 'react'
import axios from 'axios'

const api = 'http://localhost:3001/posts'

class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      newPost: {}
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }
    
    
      componentDidMount() {
        axios.get(api)
        .then((response) => {
          this.setState({ posts: response.data })
        })
      }

      // changeNewPost = (event) => {
      //   this.setState({ newPost: event.target.value })
      // }

      handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
      
        this.setState({
          newPost: {...this.state.newPost, [name]: value }
        })
      }

      createNewPost = (event) => {
        event.preventDefault()

        axios.post(api, {...this.state.newPost})
        .then((response) => {
          const posts = [...this.state.posts, response.data]
          this.setState({ posts, newPost: {} })
        })
      }

      render(){
          return(
              <div>
                <div>
                <form onSubmit={this.createNewPost}>
                <label>New Post:</label><br/>
                Title:
                <input name="title" value={ this.state.newPost.title } onChange={ this.handleInputChange } /><br/>
                Image Url:
                <input name="image" value={ this.state.newPost.image } onChange={ this.handleInputChange } /><br/>
                Text:
                <input name="text" value={ this.state.newPost.text } onChange={ this.handleInputChange } /><br/>
                <button>Submit</button>
                </form>
                </div>
                   { this.state.posts.map((post) => <p>{ post.title }, { post.image }, { post.text }</p>) }
              </div>
          )
      }
}

export default Posts