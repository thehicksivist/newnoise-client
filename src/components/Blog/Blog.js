// this page will show all posts
// will need create, edit post pages
import React, { Component } from 'react';
import PostsContainer from './PostsContainer';

class Blog extends Component {
    render() {
        return (
            <div>
                <div>
                    <iframe
                        src='https://anchor.fm/james-hicks0/embed'
                        height='102px'
                        width='400px'
                        frameborder='0'
                        scrolling='no'
                    ></iframe>
                </div>
                <div>
                    Posts Heading:
                    <PostsContainer />
                </div>
            </div>
        );
    }
}
export default Blog;
