import React , {Component} from 'react';

import './postComponent.css';

class PostComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="post-content">
                <h2>{this.props.title}</h2>
                <div className="post-line"></div>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default PostComponent;