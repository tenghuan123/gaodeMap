import React,{Component} from 'react';
import './index.css'

class Myheader extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        const { headerName } = this.props;
        return (
            <div className="MyHeader">
                <span>{headerName}</span>
            </div>
        )
    }
}

export default Myheader;