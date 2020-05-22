import React,{Component} from 'react'
import './titleName.css'

class TitleName extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataList:[
                
            ]
        }
    }
    componentWillMount(){
        const { dataList } = this.props;
        this.setState({
            dataList
        })
    }

    render(){
        const { dataList } = this.state;
        return (
            <div className="titleName">
                {dataList.map((item)=><div className="spanTile">
                    <span className="spanName">{item.value}</span>
                    <span className="spanValue">{item.name}</span>
                </div>)}
            </div>
        )
    }
}

export default TitleName;
