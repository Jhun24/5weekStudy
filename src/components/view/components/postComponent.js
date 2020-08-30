import React , {Component} from 'react';
import api from '../../../api/api';

import './postComponent.css';

class PostComponent extends Component{
    constructor(props){
        super(props);
    }

    handleSubmit = async (e)=>{
        console.log(this.props.id)
        let deleteResult = await api.deletePost(this.props.id);
        this.props.getPostComponentUpdate();
    }

    render(){
        return(
            <div className="post-content">
                <h2>{this.props.title}</h2>
                <div className="post-line"></div>
                <p>{this.props.content}</p>
                <div className="post-delete">
                    <input type="button" value="삭제" onClick={this.handleSubmit}/>
                </div>
            </div>
        );
    }
}

export default PostComponent;