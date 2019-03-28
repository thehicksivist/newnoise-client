import React from 'react'
import axios from 'axios'

const api = 'http://localhost:3001/posts'

class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      newPost: {title: '', image: '', text: ''}
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
        console.log(`${name} = ${value}`)
        this.setState({newPost})
       
        // below is a guide
        // var someProperty = {...this.state.someProperty}
        // someProperty.flag = true;
        // this.setState({someProperty})
      }

      createNewPost = (event) => {
        event.preventDefault()
        console.log(this.state.newPost.title)
        console.log(this.state.newPost.image)
        console.log(this.state.newPost.text)

        let title = this.state.newPost.title
        let image = this.state.newPost.image
        let text = this.state.newPost.text

        axios.post(api, { post: {title: title, image: image, text: text} })
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
                <input name="title" value={ this.state.newPost.title } onChange={ this.handleInputChange } />
                <input name="image" value={ this.state.newPost.image } onChange={ this.handleInputChange } />
                <input name="text" value={ this.state.newPost.text } onChange={ this.handleInputChange } />
                <button>Submit</button>
                </form>
                </div>
                   { this.state.posts.map((post) => <p>{ post.title }, { post.image }, { post.text }</p>) }
              </div>
          )
      }
}

export default Posts