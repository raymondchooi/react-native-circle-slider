import React, { Component } from 'react'
import { PanResponder, View } from 'react-native'
import Svg, { Path, Circle, G, Text } from 'react-native-svg'

export default class CircleSlider extends Component {
  constructor(props){
    super(props)

    this.state = {
      angle: this.props.value,
      normalised: false,
      dx: 0,
      dy: 0,
    };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e,gs) => true,
      onStartShouldSetPanResponderCapture: (e,gs) => true,
      onMoveShouldSetPanResponder: (e,gs) => true,
      onMoveShouldSetPanResponderCapture: (e,gs) => true,
      onPanResponderMove: ({nativeEvent: {pageX,pageY,locationX,locationY} },gs) => {
        if (this.state.normalised === false) {
          this.setState({dx: pageX-locationX, dy: pageY-locationY, normalised: true});
        }
        else {
          let a = this.cartesianToPolar(gs.moveX-this.state.dx, gs.moveY-this.state.dy);
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
      <Svg onLayout={this.onLayout}
        ref="circleslider"
        width={width}
        height={width}>
        <Circle r={dR}
          cx={width/2}
          cy={width/2}
          stroke='#eee'
          strokeWidth={0.5}
          fill='none'/>

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
            y={bR-(this.props.textSize/2)}
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
  textSize: 10,
  value: 0,
  onValueChange: x => x,
}
