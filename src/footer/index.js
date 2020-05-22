import React,{Component} from 'react';

import './index.css'

class MyFooter extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataList:[
                {
                    id:1,
                    value:"事件上报",
                    event:function(){
                        alert(this.value);
                    }
                },{
                    id:2,
                    value:"数据新增",
                    event:function(){
                        alert(this.value);
                    }
                },{
                    id:3,
                    value:"告警新增",
                    event:function(){
                        alert(this.value);
                    }
                },{
                    id:4,
                    value:"事件超期",
                    event:function(){
                        alert(this.value);
                    }
                },{
                    id:5,
                    value:"事件上报",
                    event:function(){
                        alert(this.value);
                    }
                },{
                    id:6,
                    value:"数据新增",
                    event:function(){
                        alert(this.value);
                    }
                },{
                    id:7,
                    value:"告警新增",
                    event:function(){
                        alert(this.value);
                    }
                },
            ]
        }
    }

    render(){
        const { dataList } = this.state;
        return(
            <div className="footerNav">
                {dataList.map((item)=><div className='btn' onClick={()=>item.event()} key={item.id}>
                    {item.value}
                </div>)}
            </div>
        )
    }
}
export default MyFooter