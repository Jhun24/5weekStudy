import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import './header.css';

class Header extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="header">
                <h2>LikeLion</h2>

                <div className="button-box">
                    <Link to="/"><input type="button" value="글쓰기" onClick={this.postWrite}/></Link>
                    <Link to="/view"><input type="button" value="글보기" onClick={this.postView}/></Link>
                </div>
            </div>
        );
    }
}

export default Header;