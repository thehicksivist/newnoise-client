import React, { Component } from 'react';
import Projects from './Projects';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <div>Software Development Portfolio</div>
                <div>Projects:</div>
                <Projects />
            </div>
        );
    }
}
export default Portfolio;
