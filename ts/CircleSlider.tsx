// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React, { Component } from "react";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-native' or its correspon... Remove this comment to see the full error message
import { PanResponder, Dimensions } from "react-native";
import Svg, { Path, Circle, G, Text } from "react-native-svg";

type OwnState = any;

type State = OwnState & typeof CircleSlider.defaultProps;

export default class CircleSlider extends Component<{}, State> {
static defaultProps: any;

	constructor(props: {}) {
		super(props);

// @ts-expect-error ts-migrate(2339) FIXME: Property 'state' does not exist on type 'CircleSli... Remove this comment to see the full error message
		this.state = {
// @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'CircleSli... Remove this comment to see the full error message
			angle: this.props.value,
		};

// @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'panResponder'. Did you mean 'Pan... Remove this comment to see the full error message
		panResponder = PanResponder.create({
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'e' implicitly has an 'any' type.
			onStartShouldSetPanResponder: (e, gs) => true,
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'e' implicitly has an 'any' type.
			onStartShouldSetPanResponderCapture: (e, gs) => true,
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'e' implicitly has an 'any' type.
			onMoveShouldSetPanResponder: (e, gs) => true,
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'e' implicitly has an 'any' type.
			onMoveShouldSetPanResponderCapture: (e, gs) => true,
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'e' implicitly has an 'any' type.
			onPanResponderMove: (e, gs) => {
				let xOrigin =
// @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'CircleSli... Remove this comment to see the full error message
					this.props.xCenter - (this.props.dialRadius + this.props.btnRadius);
				let yOrigin =
// @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'CircleSli... Remove this comment to see the full error message
					this.props.yCenter - (this.props.dialRadius + this.props.btnRadius);
				let a = this.cartesianToPolar(gs.moveX - xOrigin, gs.moveY - yOrigin);

// @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'CircleSli... Remove this comment to see the full error message
				if (a <= this.props.min) {
// @ts-expect-error ts-migrate(2339) FIXME: Property 'setState' does not exist on type 'Circle... Remove this comment to see the full error message
					this.setState({ angle: this.props.min });
// @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'CircleSli... Remove this comment to see the full error message
				} else if (a >= this.props.max) {
// @ts-expect-error ts-migrate(2339) FIXME: Property 'setState' does not exist on type 'Circle... Remove this comment to see the full error message
					this.setState({ angle: this.props.max });
				} else {
// @ts-expect-error ts-migrate(2339) FIXME: Property 'setState' does not exist on type 'Circle... Remove this comment to see the full error message
					this.setState({ angle: a });
				}
			},
		});
	}

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'angle' implicitly has an 'any' type.
	polarToCartesian(angle) {
// @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'CircleSli... Remove this comment to see the full error message
		let r = this.props.dialRadius;
// @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'CircleSli... Remove this comment to see the full error message
		let hC = this.props.dialRadius + this.props.btnRadius;
		let a = ((angle - 90) * Math.PI) / 180.0;

		let x = hC + r * Math.cos(a);
		let y = hC + r * Math.sin(a);
		return { x, y };
	}

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'x' implicitly has an 'any' type.
	cartesianToPolar(x, y) {
// @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'CircleSli... Remove this comment to see the full error message
		let hC = this.props.dialRadius + this.props.btnRadius;

		if (x === 0) {
			return y > hC ? 0 : 180;
		} else if (y === 0) {
			return x > hC ? 90 : 270;
		} else {
			return (
				Math.round((Math.atan((y - hC) / (x - hC)) * 180) / Math.PI) +
				(x > hC ? 90 : 270)
			);
		}
	}

	render() {
// @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'CircleSli... Remove this comment to see the full error message
		let width = (this.props.dialRadius + this.props.btnRadius) * 2;
// @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'CircleSli... Remove this comment to see the full error message
		let bR = this.props.btnRadius;
// @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'CircleSli... Remove this comment to see the full error message
		let dR = this.props.dialRadius;
		let startCoord = this.polarToCartesian(0);
// @ts-expect-error ts-migrate(2339) FIXME: Property 'state' does not exist on type 'CircleSli... Remove this comment to see the full error message
		let endCoord = this.polarToCartesian(this.state.angle);

		return (
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			<Svg width={width} height={width}>
{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
				<Circle
					r={dR}
					cx={width / 2}
					cy={width / 2}
// @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'CircleSli... Remove this comment to see the full error message
					stroke={this.props.strokeColor}
// @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'CircleSli... Remove this comment to see the full error message
					strokeWidth={this.props.strokeWidth}
// @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'CircleSli... Remove this comment to see the full error message
					fill={this.props.fillColor}
				/>

{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
				<Path
// @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'CircleSli... Remove this comment to see the full error message
					stroke={this.props.meterColor}
// @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'CircleSli... Remove this comment to see the full error message
					strokeWidth={this.props.dialWidth}
					fill="none"
					d={`M${startCoord.x} ${startCoord.y} A ${dR} ${dR} 0 ${
// @ts-expect-error ts-migrate(2339) FIXME: Property 'state' does not exist on type 'CircleSli... Remove this comment to see the full error message
						this.state.angle > 180 ? 1 : 0
					} 1 ${endCoord.x} ${endCoord.y}`}
				/>

{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
				<G x={endCoord.x - bR} y={endCoord.y - bR}>
{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
					<Circle
						r={bR}
						cx={bR}
						cy={bR}
// @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'CircleSli... Remove this comment to see the full error message
						fill={this.props.meterColor}
// @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'panResponder'. Did you mean 'Pan... Remove this comment to see the full error message
						{...panResponder.panHandlers}
					/>
{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
					<Text
						x={bR}
// @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'CircleSli... Remove this comment to see the full error message
						y={bR + this.props.textSize / 2}
// @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'CircleSli... Remove this comment to see the full error message
						fontSize={this.props.textSize}
// @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'CircleSli... Remove this comment to see the full error message
						fill={this.props.textColor}
						textAnchor="middle"
					>
{/* @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'CircleSli... Remove this comment to see the full error message */}
						{this.props.onValueChange(this.state.angle) + ""}
					</Text>
				</G>
			</Svg>
		);
	}
}

CircleSlider.defaultProps = {
	btnRadius: 15,
	dialRadius: 130,
	dialWidth: 5,
	meterColor: "#0cd",
	textColor: "#fff",
	fillColor: "none",
	strokeColor: "#fff",
	strokeWidth: 0.5,
	textSize: 10,
	value: 0,
	min: 0,
	max: 359,
	xCenter: Dimensions.get("window").width / 2,
	yCenter: Dimensions.get("window").height / 2,
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'x' implicitly has an 'any' type.
	onValueChange: (x) => x,
};
