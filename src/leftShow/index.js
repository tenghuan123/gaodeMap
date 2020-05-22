import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/gauge';
// 引入提示框和标题组件
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import "./index.css"

class LeftGauge extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.echartsId = React.createRef();
    }
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        // console.log(this.refs.echartsId);
        var myChart = echarts.init(this.refs.echartsId);
        // 绘制图表
        const options = {
            tooltip: {
                formatter: '{a} <br/>{b} : {c}%'
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            legend: {
                type: 'plain',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: ['直接访问']
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    radius:'60%',
                    detail: {
                        show:true,
                        offsetCenter:[0,'50%'],
                        fontSize:14,
                        formatter: '{value}%'
                    },
                    data: [{value: 11, name: '直接访问'}],
                    axisLine:{
                        lineStyle:{
                            width:10
                        }
                    },
                    pointer:{
                        width:3,
                        length:'50%'
                    },
                    axisLabel:{
                        show:false
                    },
                    title:{
                        offsetCenter:[0,'85%']
                    }
                }
            ]
        };
        myChart.setOption(options);
    }
    render() {
        const legendArr = [
            {
                name:"未办结",
                value:0
            },
            {
                name:"已办结",
                value:0
            },
            {
                name:"今日新增",
                value:0
            },
        ]
        return (
            <div className="smallleftBox">
                <div style={{ width: 200, height: 200 }} ref="echartsId"></div>
                <div className="legend">
                    {legendArr.map((item,index)=>
                        <div className="legendItem" key={index}>
                            <span>{item.name}:</span>
                            <span>{item.value}</span>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default LeftGauge;