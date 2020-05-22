import React from 'react';
import GaodeMap from './map'
import LeftGauge from './leftShow'
import TitleName from './rightShow/titleName'
import RightShow from './rightShow/rightShow'
import Myheader from './header'
import MyFooter from './footer'
import './App.css';

function App() {
  const GaugeArr = [];
  GaugeArr.length = 3;
  const rightArr = ["实有房屋","实有人口"];
  const titleNameData = [
  {name:"面积/km",value:"9.34"},
  {name:"网格/个",value:"10"},
  {name:"小区/个",value:"9"},
  {name:"党组织/个",value:"10"},
  {name:"党员/人",value:"34"},
  {name:"社区人员/人",value:"13"},
  {name:"民警/人",value:"1"},
  {name:"网格员/人",value:"2"},
  {name:"兼职网络员/人",value:"8"}];
  const footerNameData = [
    {name:"学校",value:"1"},
    {name:"店家",value:"12"},
    {name:"场所",value:"3"},
  ]
  return (
    <div className="App">
      <div className="tooltip">
      <header>
        <Myheader headerName={'xxxxxxxxx'}></Myheader>
      </header>
      <main>
        <div className="leftShow">
          {GaugeArr.fill().map((item,index)=><LeftGauge key={index}></LeftGauge>)}
        </div>
        <div className="rightShow">
          <TitleName dataList = {titleNameData}></TitleName>
          {rightArr.map((item)=><RightShow title={item}></RightShow>)}
          <div>实习单位</div>
          <TitleName dataList = {footerNameData}></TitleName>
        </div>
      </main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
      </div>
      <div className="gaodeMap">
          <GaodeMap></GaodeMap>
        </div>
    </div>
  );
}

export default App;
