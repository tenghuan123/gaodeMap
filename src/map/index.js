import React, { Component } from 'react';
import { Map, Marker } from 'react-amap';


class GaodeMap extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.MapParent = React.createRef();
        this.amapEvents = {
          created: (mapInstance) => {
            console.log('高德地图 Map 实例创建成功；如果你要亲自对实例进行操作，可以从这里开始。比如：');
            console.log(mapInstance.getZoom());
            mapInstance.setMapStyle('amap://styles/1c2682d803fbc2f6d7d04e6056d78142');
          }
        };
        // this.markerEvents = {
        //   created: (markerInstance) => {
        //     console.log('高德地图 Marker 实例创建成功；如果你要亲自对实例进行操作，可以从这里开始。比如：');
        //     console.log(markerInstance.getPosition());
        //   }
        // }
        this.markerPosition = { longitude: 120, latitude: 30 };
    }
    componentDidMount(){
    }


    render() {
        return (
          <>
            <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
              <Map events={this.amapEvents} amapkey={'07a929b80174166afe4257ed5d057722'}>
                <Marker position={this.markerPosition} events={this.markerEvents} />
              </Map>
            </div>
          </>
        )
      }
    }

export default GaodeMap;