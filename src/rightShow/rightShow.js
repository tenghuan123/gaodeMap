import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import "./rightShow.css";

class RightShow extends Component {
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
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                right: 10,
                bottom:10,
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
                {
                    name: '不知道是啥',
                    type: 'pie',
                    radius: [35, 45],
                    center: ['20%', '50%'],
                    label: {
                        show: false
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    },
                    data: [
                        {value: 10, name: '直接访问'},
                        {value: 5, name: '邮件营销'},
                        {value: 15, name: '联盟广告'},
                        {value: 25, name: '视频广告'},
                        {value: 20, name: '搜索引擎'},
                        {value: 35, name: 'rose6'},
                        {value: 30, name: 'rose7'},
                        {value: 40, name: 'rose8'}
                    ]
                },
                {
                    name: '不知道是啥',
                    type: 'pie',
                    radius: [35, 45],
                    center: ['55%', '50%'],
                    label: {
                        show: false
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    },
                    data: [
                        {value: 10, name: '直接访问'},
                        {value: 5, name: '邮件营销'},
                        {value: 15, name: '联盟广告'},
                        {value: 25, name: '视频广告'},
                        {value: 20, name: '搜索引擎'},
                        {value: 35, name: 'rose6'},
                        {value: 30, name: 'rose7'},
                        {value: 40, name: 'rose8'}
                    ]
                },
            ]
        };
        
        
        myChart.setOption(options);
    }
    render() {
        const {title} = this.props;
        return (
            <div className="smallRightBox">
                <div className="smalleTitle">
                    <span>{title}</span>
                </div>
                <div style={{ width: '100%', height: 150 }} ref="echartsId"></div>
            </div>
        );
    }
}

export default RightShow;