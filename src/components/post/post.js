import React , { Component } from 'react';

import api from '../../api/api'

import './post.css';

class Post extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:"",
            content:""
        }
    }

    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = async (e)=>{
        let addPostResult = await api.addPost({title:this.state.title,content:this.state.content});
        console.log(addPostResult)
    }

    render(){
        return(
            <div className="post">
                <div className="post-box">
                    <div className="post-title">
                        <h2>대나무숲 글 작성하기</h2>
                    </div>
                    <div className="post-data">
                        <input type="text" placeholder="제목을 입력해주세요" name="title" value={this.state.title} onChange={this.handleChange}></input>
                        <textarea name="content" placeholder="내용을 입력해주세요" value={this.state.content} onChange={this.handleChange}></textarea>
                        <input type="button" onClick={this.handleSubmit} value="제출"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;