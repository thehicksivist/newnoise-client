import React from 'react'
import Posts from './Posts'
import NewPost from './NewPost'
import axios from 'axios'

class PostsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.addNewPost = this.addNewPost.bind(this)
    }

    handleFormSubmit(title, image, text){
        let body = JSON.stringify({post: {title: title, image: image, text: text} })

        axios.post('http://localhost:3001/posts', {
            body: body
          })
            .then((response) => {return response.json()})
            .then((post)=>{
                this.addNewPost(post)
        })
    }

    addNewPost(post){
        this.setState({
            posts: this.state.posts.concat(post)
        })
    }

    componentDidMount(){
        axios.get('http://localhost:3001/posts')
          .then((response) => {return response.json()})
          .then((data) => {this.setState({ posts: data }) });
    }

    render(){
        return(
          <div>
			<NewPost handleFormSubmit={this.handleFormSubmit}/>
            <Posts posts={this.state.posts} />
          </div>
        )
    }
}

export default PostsContainer