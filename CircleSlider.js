import React, { Component } from 'react'
import { PanResponder, View, Dimensions } from 'react-native'
import Svg, { Path, Circle, G, Text } from 'react-native-svg'

export default class CircleSlider extends Component {
  constructor(props){
    super(props)

    this.state = {
      angle: this.props.value,
    };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e,gs) => true,
      onStartShouldSetPanResponderCapture: (e,gs) => true,
      onMoveShouldSetPanResponder: (e,gs) => true,
      onMoveShouldSetPanResponderCapture: (e,gs) => true,
      onPanResponderMove: (e,gs) => {
        let xOrigin = this.props.xCenter - (this.props.dialRadius + this.props.btnRadius);
        let yOrigin = this.props.yCenter - (this.props.dialRadius + this.props.btnRadius);
        let a = this.cartesianToPolar(gs.moveX-xOrigin, gs.moveY-yOrigin);
        
        if (a<=this.props.min) {
          this.setState({angle: this.props.min});
        } else if (a>=this.props.max) {
          this.setState({angle: this.props.max});
        } else {
          this.setState({angle: a});
        }
      }
    });
  }

  polarToCartesian(angle) {
    let r = this.props.dialRadius;
    let hC = this.props.dialRadius + this.props.btnRadius;
    let a = (angle-90) * Math.PI / 180.0;

    let x = hC + (r * Math.cos(a));
    let y = hC + (r * Math.sin(a));
    return {x,y};
  }

  cartesianToPolar(x,y) {
    let hC = this.props.dialRadius + this.props.btnRadius;

    if (x === 0) {
      return y>hC ? 0 : 180;
    }
    else if (y === 0) {
      return x>hC ? 90 : 270;
    }
    else {
      return (Math.round((Math.atan((y-hC)/(x-hC)))*180/Math.PI) +
        (x>hC ? 90 : 270));
    }
  }

  render() {
    let width = (this.props.dialRadius + this.props.btnRadius)*2;
    let bR = this.props.btnRadius;
    let dR = this.props.dialRadius;
    let startCoord = this.polarToCartesian(0);
    let endCoord = this.polarToCartesian(this.state.angle);

    return (
      <Svg
        width={width}
        height={width}>
        <Circle r={dR}
          cx={width/2}
          cy={width/2}
          stroke={this.props.strokeColor}
          strokeWidth={this.props.strokeWidth}
          fill={this.props.fillColor}/>

        <Path stroke={this.props.meterColor}
          strokeWidth={this.props.dialWidth}
          fill='none'
          d={`M${startCoord.x} ${startCoord.y} A ${dR} ${dR} 0 ${this.state.angle>180?1:0} 1 ${endCoord.x} ${endCoord.y}`}/>

        <G x={endCoord.x-bR} y={endCoord.y-bR}>
          <Circle r={bR}
            cx={bR}
            cy={bR}
            fill={this.props.meterColor}
            {...this._panResponder.panHandlers}/>
          <Text x={bR}
            y={bR+(this.props.textSize/2)}
            fontSize={this.props.textSize}
            fill={this.props.textColor}
            textAnchor="middle"
          >{this.props.onValueChange(this.state.angle)+''}</Text>
        </G>
      </Svg>
    )
  }
}

CircleSlider.defaultProps = {
  btnRadius: 15,
  dialRadius: 130,
  dialWidth: 5,
  meterColor: '#0cd',
  textColor: '#fff',
  fillColor: 'none',
  strokeColor: '#fff',
  strokeWidth: 0.5,
  textSize: 10,
  value: 0,
  min: 0,
  max: 359,
  xCenter: Dimensions.get('window').width/2,
  yCenter: Dimensions.get('window').height/2,
  onValueChange: x => x,
}
