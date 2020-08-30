import React , {Component} from 'react';
import api from '../../api/api';
import PostComponent from './components/postComponent';

import './view.css';

class View extends Component{
    constructor(props){
        super(props);
        this.state = {
            postData:[]
        }
    }

    async componentDidMount(){
        let getPostData = await api.getPost();
        if(getPostData.status != 404){
            this.setState({postData:getPostData.data})
        }
        else{
            alert("글을 작성해주십쇼")
        }
    }

    getPostComponentUpdate = async (e)=>{
        let getPostData = await api.getPost();
        if(getPostData.status != 404){
            this.setState({postData:getPostData.data})
        
        }
    }

 

    render(){
        return(
            <div className="view-content">
                {this.state.postData.map((data,i)=>{
                    return(<PostComponent getPostComponentUpdate={this.getPostComponentUpdate}id={data.id} title={data.title} content={data.content} key={i}/>);
                })}
            </div>
        );
    }
}

export default View;